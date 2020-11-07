import json
import requests
import os
# takes temp in kelvin and returns in celsius
def kelvin_to_celsius(tempK):
    return tempK - 273.15


# takes temp in kelvin and returns in fahrenheit
def kelvin_to_fahr(tempK):
    return (((tempK - 273.15) * 9) / 5) + 32


# returns one call as json
def get_ip_info(ip_addr):
    ip_json = requests.get('http://ip-api.com/json/' + ip_addr).json()  # get json object from api
    return ip_json


# takes in the degrees of the wind dir and returns the according compass direction.
def deg_to_dir(deg):
    index = int((deg / 22.5) + 0.5)
    dirs = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']
    return dirs[index % 16]


# changing to make a less redundant call?
# Here is a quick breakdown of the data available and how to access it
# longitude can be found at ['coord']['lat']
# latitude can be found at ['coord']['lon']
# main weather info (description) found at ['weather'][0]['main'] and more detailed at ['weather'][0]['description']
# temp (kelvin) can be found at ['main']['temp'] and this can be converted with above functions
# feels like (kelvin) found at ['main']['feels_like']
# pressure (in MB) found at ['main']['pressure']
# humidity (%) can be found at ['main']['humidity']
# wind (mph) can be found at ['wind']['speed]
# wind direction can be found at ['wind']['deg'] and converted w above functions
# TODO: determine what else to add
def one_call(ip):
    ip_info = get_ip_info(ip)  # makes call to ip api


    # loads in the api key from config.json
    # config_data = {}
    # with open('config.json', 'r') as f: #secure opening
    #     config_data = json.load(f)
    # key = config_data['APIKEY']
    key = os.getenv('WEATHER_APIKEY') #get through env variable
    # print('key: '+ key )

    owm_response = requests.get('http://api.openweathermap.org/data/2.5/onecall?lat=' + str(ip_info['lat'])
                                + '&lon=' + str(ip_info['lon']) + '&appid=' + key)

    decoded_resp = owm_response.content.decode("utf-8")  # decode byte string response
    resp_json = json.loads(decoded_resp)
    # print(json.dumps(resp_json, indent=2))
    # print(resp_json['weather'][0]['main'])
    return resp_json


def get_clouds_map():
    key = os.getenv('WEATHER_APIKEY')  # get through env variable

    map = requests.get('http://tile.openweathermap.org/map/layer=clouds_new/z=1/x=0/y=0.png?appid=' + key)
    print(map)
    return map


def get_precipitation_map():
    key = os.getenv('WEATHER_APIKEY')  # get through env variable

    map = requests.get('http://tile.openweathermap.org/map/layer=precipitation_new/z=1/x=0/y=0.png?appid=' + key)

    return map


def get_sea_level_pressure_map():
    key = os.getenv('WEATHER_APIKEY')  # get through env variable

    map = requests.get('http://tile.openweathermap.org/map/layer=pressure_new/z=1/x=0/y=0.png?appid=' + key)

    return map


def get_sea_level_pressure_map():
    key = os.getenv('WEATHER_APIKEY')  # get through env variable

    map = requests.get('http://tile.openweathermap.org/map/layer=pressure_new/z=1/x=0/y=0.png?appid=' + key)

    return map


def get_wind_speed_map():
    key = os.getenv('WEATHER_APIKEY')  # get through env variable

    map = requests.get('http://tile.openweathermap.org/map/layer=wind_new/z=1/x=0/y=0.png?appid=' + key)

    return map

def get_temperature_map():
    key = os.getenv('WEATHER_APIKEY')  # get through env variable

    map = requests.get('http://tile.openweathermap.org/map/layer=temp_new/z=1/x=0/y=0.png?appid=' + key)

    return map


### Example
# uncomment and enter ip here to test
# this calls ip and weather api
# data_near_me = one_call('70.171.10.208', config_data['APIKEY'])
# print(data_near_me['coord'])
# print(data_near_me['weather'])
# print(data_near_me['wind'])
# print(data_near_me['name'])
# print(data_near_me['main']['temp']) # reports temperature in kelvin haha
# one_call('128.227.1.41')
# get_clouds_map()



### EXAMPLE
# uncomment and enter your ip here to test
# print(get_ip_info('70.171.10.208')['city'])
# print(get_ip_info('70.171.10.208')['lat'])
# print(get_ip_info('70.171.10.208')['lon'])
