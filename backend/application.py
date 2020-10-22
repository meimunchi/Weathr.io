from flask import Flask
from datagetter import *
from flask import request
application = Flask(__name__)


@application.route('/')
def main():
    return 'Hello Weathr!'

@application.route('/info')
def weathr_info():
    return(one_call(request.remote_addr, config_data['APIKEY']))


if __name__ == "__main__":
    application.run(debug=True)
