from flask import request
from backend.datagetter import *
from backend.create_app import create_app
import os
from backend.controllers.auth import auth_api
from backend.controllers.weather_info import weather_info_api

application = create_app()

application.register_blueprint(weather_info_api)


# input is ?, output is a list of blogs
@application.route('/educational-blogs')
def edu_blogs():
    return 'This is the educational-blogs route!'


application.register_blueprint(auth_api)


@application.route('/info')
def weathr_info():
    print(request.remote_addr)
    print(os.getenv('WEATHER_APIKEY'))
    return one_call(request.remote_addr, os.getenv('WEATHER_APIKEY'))


# -------------- SMS RELATED PATHS -------------- #

# input is location, output is string or null (if none)
@application.route('/sms/disaster')
def sms_disaster():
    return 'This is the sms/disaster route!'


@application.route('/sms/general')
def sms_general():
    return 'This is the sms/general route!'


if __name__ == "__main__":
    application.run(debug=True)
