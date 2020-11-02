from flask import request
from datagetter import *
from create_app import create_app
import os
from controllers.auth import auth_api
from controllers.weather_info import weather_info_api
from flask_cors import cross_origin
from controllers.sms import sms_api
application = create_app()

application.register_blueprint(weather_info_api)


# input is ?, output is a list of blogs
@application.route('/educational-blogs', methods=['POST'])
def edu_blogs():
    return 'This is the educational-blogs route!'


application.register_blueprint(auth_api)


@application.route('/info')
def weathr_info():
    print(request.remote_addr)
    print(os.getenv('WEATHER_APIKEY'))
    return one_call(request.remote_addr, os.getenv('WEATHER_APIKEY'))


# -------------- SMS RELATED PATHS -------------- #

application.register_blueprint(sms_api,url_prefix='/sms')



if __name__ == "__main__":
    application.run(debug=True)
