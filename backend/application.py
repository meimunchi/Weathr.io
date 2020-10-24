from flask import Flask, request
from flask_login import LoginManager, login_user
from flask_cors import CORS
from datagetter import *

application = Flask(__name__)
login_manager = LoginManager()

CORS(application)
login_manager.init_app(application)



@application.route('/')
def main():
    return 'Hello Weathr!'


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
    return(one_call(request.remote_addr, config_data['APIKEY']))


if __name__ == "__main__":
    application.run(debug=True)
