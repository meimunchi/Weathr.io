from flask import Blueprint, request
from providers.datagetter import *

weather_info_api = Blueprint('weather_info_api', __name__)


@weather_info_api.route('/info', methods=['POST'])
def weathr_info():
    user_location = request.get_json()
    return one_call(user_location)


@weather_info_api.route('/precip', methods=['GET'])
def weathr_precip():
    return get_precipitation_map()


# input is location, ouput is: weather forecast, temperature, current conditions (windspeed,
@weather_info_api.route('/general')
def general():
    return 'This is the general route!'


# input is location, output is Natural Disaster (name, severity, type, location, list of tips, power updates, etc.)
@weather_info_api.route('/disaster')
def disaster():
    return 'This is the disaster route!'


# input is location, output is news articles about weather based on location
@weather_info_api.route('/news')
def news():
    return 'This is the news route!'
