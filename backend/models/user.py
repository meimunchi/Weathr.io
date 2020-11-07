from flask_login import UserMixin
from botocore.exceptions import ClientError
from create_app import table, login_manager
from passlib.hash import sha256_crypt


class User(UserMixin):
    email = None
    uid = None
    password = None
    name = None
    phone_num = None
    is_admin = None

    def __init__(self, _email=None, _uid=None, _password=None, _name=None, _phone_num=None, _is_admin=None):
        self.email = _email
        self.uid = _uid
        self.name = _name
        self.phone_num = _phone_num
        self.is_admin = _is_admin
        self.password = _password
        return

    def get_id(self):
        return self.email

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

    def secure_password(self):
        self.password = sha256_crypt.encrypt(self.password)

    def validate_password(self, _password):
        return sha256_crypt.verify(_password, self.password)

    def to_dict(self):
        return {
            "email": self.email,
            "uid": self.uid,
            "password": self.password,
            "name": self.name,
            "phone_num": self.phone_num,
            "is_admin": self.is_admin
        }

    @classmethod
    def get(cls, email):
        response = table.get_item(Key={'email': email})
        if 'Item' not in response:
            return None
        else:
            user_attrs = response['Item']
            user = User(_email=user_attrs['email'], _uid=user_attrs['user_id'], _password=user_attrs['password'],
                        _name=user_attrs['name'], _phone_num=user_attrs['phonenum'], _is_admin=user_attrs['admin'])
            return user

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


# Loads user object from user ID stored in session
@login_manager.user_loader
def load_user(email):
    return User.get(email)
