from botocore.exceptions import ClientError
import boto3
import os
import requests
from providers.datagetter import one_call
import json


pinpoint = boto3.client('pinpoint', region_name=os.getenv('AWS_REGION'))

with open('../blog.json') as f:
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
    response =""
    if 'menu' in incoming_message:
        return default_msg

    weather_data = one_call({'lat': '29.651634', 'long': '-82.324829'})
    curr_weather_data = weather_data['current']

    response_list = []
    if 'descr' in incoming_message:
        response_list.append(f"Currently in store for {curr_weather_data['weather'][0]['description']}")
    if 'cloud' in incoming_message:
        response_list.append(f"Current cloudiness is at {curr_weather_data['clouds']}%")
    if 'humidity' in incoming_message:
        response_list.append(f"Current humidity is at {curr_weather_data['humidity']}%")
    if 'temp' in incoming_message:
        response_list.append(f"Current temperature is at {curr_weather_data['temp']}F, but feels like"
                             f" {curr_weather_data['feels_like']}F")
    if 'wind' in incoming_message:
        response_list.append(f"Wind is currently at {curr_weather_data['wind_speed']}mph")

    if not len(response_list) == 0:
        response += ' | '.join(response_list)
        response += "\n"

    for disaster in blogData:
        if disaster.casefold() in message.casefold():
            response += disaster + " Info: \n"
            info = data.get(disaster)
            for section in info:
                if section.casefold() in message.casefold():
                    response = response + section.upper() + ":\n"
                    for tip in info.get(section):
                        response = response + "- " + tip + "\n"
    return response


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