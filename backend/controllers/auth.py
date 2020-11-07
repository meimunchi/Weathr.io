from models.user import User
from flask import Blueprint, request
from flask_cors import CORS
from flask_login import login_user, current_user, login_required

from botocore.exceptions import ClientError

auth_api = Blueprint('auth', __name__)
CORS(auth_api)


@auth_api.route('/login', methods=['POST'])
def login():
    req_data = request.get_json()
    email = req_data['email']
    password = req_data['password']

    if email is None or password is None:
        return {'success': False, 'err': 'Invalid request body'}

    try:
        user_login = User.get(email)
    except ClientError as err:
        return {'success': False, 'err': err.response['Error']['Message']}

    if user_login is None:
        return {'success': False}

    if user_login.validate_password(password):
        login_user(user_login)
        return {'success': True}
    else:
        return {'success': False}


@auth_api.route('/signup', methods=['POST'])
def signup_user():
    req_data = request.get_json()

    if not('email' in req_data and
           'user_id' in req_data and
           'password' in req_data and
           'name' in req_data and
           'phone_num' in req_data and
           'is_admin' in req_data):
        return {'success': False, 'err': 'Invalid request body'}

    try:
        existing_user = User.get(req_data['email'])
    except ClientError as err:
        return {'success': False, 'err': err.response['Error']['Message']}

    if existing_user is not None:
        return {'success': False, 'err': 'Account associated with email already exists'}

    user_signup = User(_email=req_data['email'], _uid=req_data['user_id'], _password=req_data['password'],
                       _name=req_data['name'], _phone_num=req_data['phone_num'], _is_admin=req_data['is_admin'])
    user_signup.secure_password()

    user_signup.put()

    return {'success': True}


@auth_api.route('/user', methods=['POST'])
@login_required
def get_user():
    return current_user.to_dict()
