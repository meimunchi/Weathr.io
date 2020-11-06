from botocore.exceptions import ClientError
import boto3
import os
import requests
pinpoint = boto3.client('pinpoint',region_name=os.getenv('AWS_REGION'))



def sns_confirm_subscription(url):
    # TODO: 
    try:
        arn = requests.get(url)
    except:
        print("could not confirm subscription")
    


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

   