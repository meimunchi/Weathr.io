from dotenv import load_dotenv
import boto3
import os

load_dotenv()
dynamodb = boto3.resource('dynamodb', region_name=os.getenv('AWS_REGION'))


def create_table(table_name):
    if os.getenv('FLASK_CONFIG') == 'development':
        table_name += '-dev'
    return dynamodb.Table(table_name)
