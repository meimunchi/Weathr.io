from flask_login import UserMixin
import boto3
import json
from botocore.exceptions import ClientError
from create_app import table


class User(UserMixin):
    # Database implementation for user

    def put(self, _email, _uid, _password, _name, _phonenum, _admin):
        response = table.put_item(
            Item={
                'email': _email,
                'user_id': _uid,
                'password': _password,
                'name': _name,
                'phonenum': _phonenum,
                'admin': _admin
            }
        )
        return response

    # ------------- READ FUNCTIONS ------------- #

    def get(self, _email):

        try:
            response = table.get_item(Key={'email': _email})
        except ClientError as err:
            print(err.response['Error']['Message'])
        else:
            return response['Item']

    # ------------- UPDATE FUNCTIONS ------------- #

    def update(self, _email, _uid, _password, _name, _phonenum, _admin):

        response = table.update_item(
            Key={
                'email': _email
            },
            UpdateExpression="set user_id=:u, password=:p, nm=:n, phonenum=:pn, admin=:a",
            ExpressionAttributeValues={
                ':u': _uid,
                ':p': _password,
                ':n': _name,
                ':pn': _phonenum,
                ':a': _admin
            },
            ReturnValues="UPDATED_NEW"
        )
        return response

    # ------------- DELETE FUNCTIONS ------------- #

    def delete(self, _email):

        try:
            response = table.delete_item(
                Key={
                    'email': _email
                }
            )
        except ClientError as err:
            print(err.response['Error']['Response'])
        else:
            return response
