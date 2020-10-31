from flask import Flask, request
from flask_login import LoginManager, login_user
from flask_cors import CORS
from dotenv import load_dotenv
import boto3
import os

#auth login manager
login_manager = LoginManager()

load_dotenv()

# create database and table
dynamodb = boto3.resource('dynamodb', region_name=os.getenv('AWS_REGION'))

#create flask app
def create_app():
    # TODO:handle production environment
    if os.getenv('FLASK_CONFIG') == "production":
        application = Flask(__name__)
        table = dynamodb.Table(os.getenv('DATABASE_PROD'))
    else:
        application = Flask(__name__)


    # TODO:handle auth
    CORS(application)
    login_manager.init_app(application)

    return application


if os.getenv('FLASK_CONFIG') == "production":
    table = dynamodb.Table(os.getenv('DATABASE_PROD'))
else:
    table = dynamodb.Table(os.getenv('DATABASE_DEV'))

