from flask import Flask
from flask_login import LoginManager
from flask_cors import CORS

login_manager = LoginManager()


def create_app():
    application = Flask(__name__)
    application.secret_key = b'secret_to_be_changed'

    CORS(application,
         origins=['http://localhost:3000',
                  'http://weathrio-dev.us-east-1.elasticbeanstalk.com/'],
         supports_credentials=True)
    login_manager.init_app(application)

    return application
