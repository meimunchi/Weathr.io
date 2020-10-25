from flask import Flask, request
from flask_login import LoginManager, login_user
from flask_cors import CORS
from backend.datagetter import *

application = Flask(__name__)
login_manager = LoginManager()

CORS(application)
login_manager.init_app(application)



@application.route('/')
def main():
    return 'Hello Weathr!'

# input is location, ouput is: weather forecast, temperature, current conditions (windspeed,
@application.route('/general')
def general():
    return 'This is the general route!'


# input is location, output is Natural Disaster (name, severity, type, location, list of tips, power updates, etc.)
@application.route('/disaster')
def disaster():
    return 'This is the disaster route!'


# input is location, output is news articles about weather based on location
@application.route('/news')
def news():
    return 'This is the news route!'


# input is ?, output is a list of blogs
@application.route('/educational-blogs')
def edu_blogs():
    return 'This is the educational-blogs route!'


@application.route('/login', methods=['POST'])
def login():
    req_data = request.get_json()
    email = req_data['email']
    password = req_data['password']

    # Query user based on email and verify password
    # login_user(user)

    print(email)
    print(password)

    return req_data

@application.route('/info')
def weathr_info():
    return one_call(request.remote_addr, config_data['APIKEY'])


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
