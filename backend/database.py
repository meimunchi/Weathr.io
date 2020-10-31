import boto3
import json
from botocore.exceptions import ClientError
from backend import table

# be sure to set up credentials before using :)
# links:
# aws cli setup: https://aws.amazon.com/cli/
# dynamodb api: https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/dynamodb.html
#dynamodb = boto3.resource('dynamodb')


# ------------- CREATE FUNCTIONS ------------- #


def put_user(_email, _uid, _password, _name, _phonenum, _admin):


    response = table.put_item(
        Item={
            'email': _email,
            'user_id': _uid,
            'password': _password,
            'name': _name,
            'phonenum': _phonenum,
            'admin': _admin
        }
    )
    return response


# ------------- READ FUNCTIONS ------------- #


def get_user(_email):

    try:
        response = table.get_item(Key={'email': _email})
    except ClientError as err:
        print(err.response['Error']['Message'])
    else:
        return response['Item']

# ------------- UPDATE FUNCTIONS ------------- #


def update_user(_email, _uid, _password, _name, _phonenum, _admin):

    response = table.update_item(
        Key={
            'email': _email
        },
        UpdateExpression="set user_id=:u, password=:p, nm=:n, phonenum=:pn, admin=:a",
        ExpressionAttributeValues={
            ':u': _uid,
            ':p': _password,
            ':n': _name,
            ':pn': _phonenum,
            ':a': _admin
        },
        ReturnValues="UPDATED_NEW"
    )
    return response

# ------------- DELETE FUNCTIONS ------------- #


def delete_user(_email):

    try:
        response = table.delete_item(
            Key={
                'email': _email
            }
        )
    except ClientError as err:
        print(err.response['Error']['Response'])
    else:
        return response


if __name__ == '__main__':
    #put_user("xxx@gmail.com", "1", "1234pas", "JohnDoe", "7778", False)
    print("Hi")
    #print(get_user("xxx@gmail.com"))
    #print(update_user("xxx@gmail.com", "1", "1234pasnew", "JohnDoe", "7778", False))
    #print(get_user("xxx@gmail.com"))
    #print(delete_user("xxx@gmail.com"))
