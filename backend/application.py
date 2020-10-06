from flask import Flask
application = Flask(__name__)

@application.route('/')
def main():
    return 'Hello Weathr!'

if __name__ == "__main__":
    application.run(debug=True)