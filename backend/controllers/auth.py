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
        return {"success": False, "err": "Invalid request body"}

    try:
        user_login = User.get(email)
    except ClientError as err:
        return {"success": False, "err": err.response['Error']['Message']}
    except Exception as err:
        return {"success": False, "err": str(err)}

    if user_login.validate_password(password):
        login_user(user_login)
        return {"success": True}
    else:
        return {"success": False}


@auth_api.route('/signup', methods=['POST'])
def signup_user():
    req_data = request.get_json()

    user_signup = User(_email=req_data['email'], _uid=req_data['user_id'], _password=req_data['password'],
                       _name=req_data['name'], _phone_num=req_data['phone_num'], _is_admin=req_data['is_admin'])
    # Error handling
    user_signup.put()

    return "hi"


@auth_api.route('/user', methods=['POST'])
@login_required
def get_user():
    return current_user.to_dict()
