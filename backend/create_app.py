from flask import Flask
from flask_login import LoginManager
from flask_cors import CORS
from dotenv import load_dotenv
import boto3
import os


def create_app():
    application = Flask(__name__)

    CORS(application)
    login_manager.init_app(application)

    return application


login_manager = LoginManager()

# Load environment variables for development
load_dotenv()
dynamodb = boto3.resource('dynamodb', region_name=os.getenv('AWS_REGION'))

if os.getenv('FLASK_CONFIG') == "production":
    table = dynamodb.Table(os.getenv('DATABASE_PROD'))
else:
    table = dynamodb.Table(os.getenv('DATABASE_DEV'))
