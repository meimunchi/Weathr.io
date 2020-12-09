from botocore.exceptions import ClientError
import boto3
import os
import requests
from providers.datagetter import one_call
import json
from pathlib import Path

pinpoint = boto3.client('pinpoint', region_name=os.getenv('AWS_REGION'))

with open('./blog.json') as f:
       blogData = json.load(f)

default_msg = 'Welcome to find Weathr.io to find out about the current weather! Includes all sorts of information ' \
              'from temperature to humidity to cloudiness to wind speed to general weather!'


# -------------- VALIDATION AND CONFIRMATION -------------- #

def sns_confirm_subscription(url):
    try:
        arn = requests.get(url)
        return arn
    except:
        print("could not confirm subscription")


def validate_message(messagetype, req_body):
    if req_body.SignatureVersion != "1":
        return False
    sign_cert = requests.get(req_body.SigningCertURL)
    # TODO: extract public key from sign_cert
    # TODO: create string to sign
    # TODO: decode signature
    # TODO: hash string to sign, decrypt it, compare with signature
    return True


# -------------- FORMULATE MESSAGE -------------- #

def formulate_message(incoming_message):
    response = ""
    if 'menu' in incoming_message:
        return default_msg

    
    for disaster in blogData:
        if disaster.casefold() in incoming_message.casefold():
            response += disaster + " Info: \n"
            info = blogData.get(disaster)
            for section in info:
                if section.casefold() in incoming_message.casefold():
                    response = response + section.upper() + ":\n"
                    for tip in info.get(section):
                        response = response + "- " + tip + "\n"
    if len(response) > 0:
        return response
    (longitude,latitude,valid,zip_msg) = get_location(incoming_message)
    return zip_msg
    if longitude == None or latitude == None:
        if valid:
            return "Incorrectly formatted zip code. Please enter in the format : zip=xxxxx "
        return "Please specify your location using a zip code."
        
    # weather_data = one_call({'lat': '29.651634', 'long': '-82.324829'})
    weather_data = one_call({'lat': latitude, 'long': longitude})
    curr_weather_data = weather_data['current']

    

    response_list = []
    if 'descr'.casefold() in incoming_message.casefold():
        response_list.append(f"Currently in store for {curr_weather_data['weather'][0]['description']}")
    if 'cloud'.casefold() in incoming_message.casefold():
        response_list.append(f"Current cloudiness is at {curr_weather_data['clouds']}%")
    if 'humidity'.casefold() in incoming_message.casefold():
        response_list.append(f"Current humidity is at {curr_weather_data['humidity']}%")
    if 'temp'.casefold() in incoming_message.casefold():
        response_list.append(f"Current temperature is at {curr_weather_data['temp']}F, but feels like"
                             f" {curr_weather_data['feels_like']}F")
    if 'wind'.casefold() in incoming_message.casefold():
        response_list.append(f"Wind is currently at {curr_weather_data['wind_speed']}mph")

    if not len(response_list) == 0:
        response += ' | '.join(response_list)
        response += "\n"
    else:
        response += 'Please come again? That command is not recognized'

   
    return response


# -------------- GET LOCATION OF THE USER -------------- #
def get_location(incoming_message):
    #find zip=
    # if "zip=".casefold() in incoming_message.casefold():
    try:
        start_index = incoming_message.index("zip=")
    except ValueError as err:
        return None,None,False

    try:
        end_index = incoming_message.index(" ",start_index)
    except ValueError as err:
        end_index = len(incoming_message)

    zip_msg = incoming_message[start_index + 4 : end_index]
    #use zip to call geolocation
    
    #return longitude and latitude, if necessary
    return None,None, True, zip_msg


# -------------- SENDING THE MESSAGE -------------- #
def send_message(destinationnumber, message):
    originationnumber = os.getenv('PINPOINT_LONGCODE')
    messageType = "TRANSACTIONAL"

    try:
        response = pinpoint.send_messages(
            ApplicationId=os.getenv('PINPOINT_PROJECT_ID'),
            MessageRequest={
                'Addresses': {
                    destinationnumber: {
                        'ChannelType': 'SMS'
                    }
                },
                'MessageConfiguration': {
                    'SMSMessage': {
                        'Body': message,
                        'MessageType': messageType,
                        'OriginationNumber': originationnumber,
                    }
                }
            }
        )

    except ClientError as e:
        print(e.response['Error']['Message'])
    else:
        print("Message sent! Message ID: "
              + response['MessageResponse']['Result'][destinationnumber]['MessageId'])


def testLoadJSON():
    print("Hey there")
    with open('..blog.json') as f:
        data = json.load(f)


if __name__ == "__main__":
    testLoadJSON()
