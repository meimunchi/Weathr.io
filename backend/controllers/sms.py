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
    message_type = request.headers['x-amz-sns-message-type']
    req_body = request.get_json(force=True)
    print(req_body['Message'])
    # if message_type == "Notification":
        # parse message (validate etc)
        # if validate_message(message_type,req_body):
            
        #formulate message
        # message = formulate_message(req_body.messageBody)
        #obtain destination number
        # destination_number = '+19044796688'
        # send_message(destination_number, 'Hello Meng Meng')
    return req_body


