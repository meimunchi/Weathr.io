import json
import requests
# done! :) added to req.txt too

# to get API key, do config_data['APIKEY']
config_data = {}

with open('config.json') as f:
    config_data = json.load(f)


# Example of how to access the one call API call
# https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
# API Key: 10d61017ae8b2c417f4655c38368133d

# returns one call as json
def one_call(lat, long, key):
    return None
