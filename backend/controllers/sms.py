from flask import Blueprint, request
from botocore.exceptions import ClientError
import boto3
import os
from providers.sms_provider import send_message,sns_confirm_subscription, validate_message,formulate_message

sms_api = Blueprint('sms',__name__)

# -------------- SMS RELATED PATHS -------------- #

# input is location, output is string or null (if none)
@sms_api.route('/disaster')
def sms_disaster():
    return 'This is the sms/disaster route!'


@sms_api.route('/general',methods=['POST'])
def sms_general():
    #take in sns message
    messagetype = request.headers['x-amz-sns-message-type']
    req_body = request.get_json()
    print("MESSAGE TYPE",messagetype)
    print("AAAAAAAAHHHHHHH REQUEST BODY AAHHHHHHHHH : ",req_body)
    if messagetype == "Notification":
        #parse message (validate etc)
        if validate_message(messagetype,req_body):
            
            #formulate message
            message = formulate_message(req_body.messageBody)
            #obtain destination number
            destination_number = req_body.originationNumber
            send_message(destination_number,(message))
        return req_body
    elif messagetype == "SubscriptionConfirmation":
        sns_confirm_subscription(req_body['SubscribeURL'])
        return req_body
    else:
        return "error..."
    

