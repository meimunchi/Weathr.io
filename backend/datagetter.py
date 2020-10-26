import json
import requests

# Example of how to access the one call API call
# https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
# API Key: 10d61017ae8b2c417f4655c38368133d (see .env)

# returns one call as json
def get_ip_info(ip_addr):
    ip_json = requests.get('http://ip-api.com/json/' + ip_addr).json() # get json object from api
    return ip_json

#changing to make a less redundant call?
def one_call(ip, key):
    ip_info = get_ip_info(ip) # makes call to ip api

    owm_response = requests.get('http://api.openweathermap.org/data/2.5/weather?lat='+ str(ip_info['lat'])
     + '&lon='+ str(ip_info['lon']) + '&appid=' + key) 

    decoded_resp = owm_response.content.decode("utf-8") #decode byte string response
    resp_json = json.loads(decoded_resp)
    return resp_json



### Example
# uncomment and enter ip here to test
# this calls ip and weather api
# data_near_me = one_call('70.171.10.208', config_data['APIKEY'])
# print(data_near_me['coord'])
# print(data_near_me['weather'])
# print(data_near_me['wind'])
# print(data_near_me['name'])
# print(data_near_me['main']['temp']) # reports temperature in kelvin haha



### EXAMPLE
# uncomment and enter your ip here to test
# print(get_ip_info('70.171.10.208')['city'])
# print(get_ip_info('70.171.10.208')['lat'])
# print(get_ip_info('70.171.10.208')['lon'])