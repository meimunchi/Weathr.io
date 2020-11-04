from flask_login import UserMixin
from botocore.exceptions import ClientError
from backend.create_app import table


# TODO: Include a separate table for Users
class User(UserMixin):
    email = None
    uid = None
    password = None
    name = None
    phone_num = None
    is_admin = None

    def __init__(self, _email, _uid, _password, _name, _phone_num, _is_admin):
        self.email = _email
        self.uid = _uid
        self.password = _password
        self.name = _name
        self.phone_num = _phone_num
        self.is_admin = _is_admin

    def put(self):
        response = table.put_item(
            Item={
                'email': self.email,
                'user_id': self.uid,
                'password': self.password,
                'name': self.name,
                'phonenum': self.phone_num,
                'admin': self.is_admin
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
