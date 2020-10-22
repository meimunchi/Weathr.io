from flask import Flask
application = Flask(__name__)


@application.route('/')
def main():
    return 'Hello Weathr!'


@application.route('/login', methods=['POST'])


if __name__ == "__main__":
    application.run(debug=True)
