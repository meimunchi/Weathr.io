from flask import Blueprint, request
from botocore.exceptions import ClientError
import boto3
import os
from providers.sms_provider import send_message,sns_confirm_subscription

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
    if messagetype == "Notification":
        #do this
        print("hi")
    elif messagetype == "SubscriptionConfirmation":
        sns_confirm_subscription(req_body.SubscribeURL)
    else:
        return "error..."
    #parse message (validate etc)
    #formulate message
    #obtain destination number
    #send_message('+19044796688',("Default message hehehehe"))
    return messagetype

