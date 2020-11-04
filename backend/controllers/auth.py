from backend.models import user
from flask import Blueprint, request

auth_api = Blueprint('auth', __name__)


@auth_api.route('/login', methods=['POST'])
def login():
    req_data = request.get_json()
    email = req_data['email']
    password = req_data['password']

    # Query user based on email and verify password
    # login_user(user)

    print(email)
    print(password)

    return req_data


@auth_api.route('/signup', methods=['POST'])
def signup_user():
    req_data = request.get_json()

    new_user = user.User(req_data['email'], req_data['user_id'], req_data['password'], req_data['name'],
                         req_data['phone_num'], req_data['is_admin'])
    new_user.put()

    return "hi"
