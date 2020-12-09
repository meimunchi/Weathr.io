from flask import Blueprint, request
import json
from providers.sms_provider import send_message, formulate_message

sms_api = Blueprint('sms', __name__)


# -------------- SMS RELATED PATHS -------------- #

# input is location, output is string or null (if none)
# @sms_api.route('/disaster')
# def sms_disaster():
#     return 'This is the sms/disaster route!'


@sms_api.route('/general', methods=['POST'])
def sms_general():
    message_type = request.headers['x-amz-sns-message-type']
    if message_type == "Notification":
        req_body = request.get_json(force=True)
        pinpoint_message = json.loads(req_body['Message'])

        message = formulate_message(pinpoint_message['messageBody'])

        send_message(pinpoint_message['originationNumber'], message)
        return message
    else:
        return {'success': False}
    # return formulate_message
