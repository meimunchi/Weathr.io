from flask import request
from providers.datagetter import *
from create_app import create_app
import os
from dotenv import load_dotenv

from controllers.auth import auth_api
from controllers.weather_info import weather_info_api
from controllers.sms import sms_api


application = create_app()

application.register_blueprint(weather_info_api)

load_dotenv()  # load env vars


# input is ?, output is a list of blogs
@application.route('/educational-blogs', methods=['POST'])
def edu_blogs():
    return 'This is the educational-blogs route!'


application.register_blueprint(auth_api)


@application.route('/info', methods=['POST'])
def weathr_info():
    user_location = request.get_json()
    return one_call(user_location)


application.register_blueprint(sms_api, url_prefix='/sms')

if __name__ == "__main__":
    application.run(debug=True)
