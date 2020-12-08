from flask_login import UserMixin
from botocore.exceptions import ClientError
from create_app import login_manager
from passlib.hash import sha256_crypt
from providers.dynamo_table import create_table


class User(UserMixin):
    email = None
    uid = None
    password = None
    name = None
    phone_num = None
    is_admin = None
    table = None

    def __init__(self, _email=None, _uid=None, _password=None, _name=None, _phone_num=None, _is_admin=None):
        self.email = _email
        self.uid = _uid
        self.name = _name
        self.phone_num = _phone_num
        self.is_admin = _is_admin
        self.password = _password
        self.table = create_table('weathr-users')
        return

    def get_id(self):
        return self.email

    def put(self):
        response = self.table.put_item(
            Item={
                'email': self.email,
                'user_id': self.uid,
                'password': self.password,
                'name': self.name,
                'phonenum': self.phone_num,
                'admin': self.is_admin,
            }
        )
        return response

    def secure_password(self):
        self.password = sha256_crypt.hash(self.password)

    def validate_password(self, _password):
        return sha256_crypt.verify(_password, self.password)

    def to_dict(self):
        return {
            "email": self.email,
            "uid": self.uid,
            "name": self.name,
            "phone_num": self.phone_num,
            "is_admin": self.is_admin,
        }

    @classmethod
    def get(cls, email):
        response = create_table('weathr-users').get_item(Key={'email': email})
        if 'Item' not in response:
            return None
        else:
            user_attrs = response['Item']
            user = User(_email=user_attrs['email'], _uid=user_attrs['user_id'], _password=user_attrs['password'],
                        _name=user_attrs['name'], _phone_num=user_attrs['phonenum'], _is_admin=user_attrs['admin'])
            return user

    def update(self, _email, _password, _name, _phonenum, _admin):
        response = self.table.update_item(
            Key={
                'email': _email
            },
            UpdateExpression="set password=:p, #dyno_name=:n, phonenum=:pn, admin=:a",
            ExpressionAttributeValues={
                ':p': _password,
                ':n': _name,
                ':pn': _phonenum,
                ':a': _admin
            },
            ExpressionAttributeNames={
                "#dyno_name": "name",
            },
            ReturnValues="UPDATED_NEW"
        )
        return response

    def delete(self, _email):
        self.table.delete_item(
            Key={
                'email': _email
            }
        )


# Loads user object from user ID stored in session
@login_manager.user_loader
def load_user(email):
    return User.get(email)
