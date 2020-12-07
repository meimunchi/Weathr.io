from flask import request, redirect, url_for
from create_app import create_app
from dotenv import load_dotenv

from controllers.auth import auth_api
from controllers.weather_info import weather_info_api
from controllers.sms import sms_api
from controllers.blog_api import blog_api

from providers.sms_provider import formulate_message


application = create_app()

load_dotenv()  # load env vars

application.register_blueprint(weather_info_api)

application.register_blueprint(auth_api)

application.register_blueprint(sms_api, url_prefix='/sms')

application.register_blueprint(weather_info_api)

application.register_blueprint(blog_api)


@application.route('/chat', methods=['POST'])
def reply_chat():
    sender_msg = request.get_json()['msg']
    return {'msg': formulate_message(sender_msg)}


# input is ?, output is a list of blogs
@application.route('/educational-blogs', methods=['POST'])
def edu_blogs():
    return 'This is the educational-blogs route!'


@application.route('/', methods=['GET'])
def redirect_home():
    return redirect('/static')


if __name__ == "__main__":
    application.run(debug=True)
