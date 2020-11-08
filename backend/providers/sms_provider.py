from botocore.exceptions import ClientError
import boto3
import os
import requests
pinpoint = boto3.client('pinpoint',region_name=os.getenv('AWS_REGION'))

# -------------- VALIDATION AND CONFIRMATION -------------- #

def sns_confirm_subscription(url):
    # TODO: 
    try:
        arn = requests.get(url)
        return arn
    except:
        print("could not confirm subscription")
    
def validate_message(messagetype,req_body):
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
    return incoming_message
    # return "a default message here"



# -------------- SENDING THE MESSAGE -------------- #
def send_message(destinationnumber,message):
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

