from flask import Flask, request
from flask_login import LoginManager

application = Flask(__name__)
login_manager = LoginManager()

login_manager.init_app(application)


@application.route('/')
def main():
    return 'Hello Weathr!'


@application.route('/login', methods=['POST'])
def login():
    req_data = request.get_json()
    email = req_data['email']
    password = req_data['password']

    print(email)
    print(password)

    return req_data


if __name__ == "__main__":
    application.run(debug=True)
