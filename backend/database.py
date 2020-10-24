import boto3
import json
from botocore.exceptions import ClientError


# be sure to set up credentials before using :)
# links:
# aws cli setup: https://aws.amazon.com/cli/
# dynamodb api: https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/dynamodb.html
dynamodb = boto3.resource('dynamodb')


# ------------- CREATE FUNCTIONS ------------- #


def put_user(_uid, _email, _password, _name, _phonenum, _admin):

    table = dynamodb.Table('weathr-data-dev')

    response = table.put_item(
        Item={
            'user_id': _uid,
            'email': _email,
            'password': _password,
            'name': _name,
            'phonenum': _phonenum,
            'admin': _admin
        }
    )
    return response


# ------------- READ FUNCTIONS ------------- #


def get_user(_uid):

    table = dynamodb.Table('weathr-data-dev')

    try:
        response = table.get_item(Key={'user_id': _uid})
    except ClientError as err:
        print(err.response['Error']['Message'])
    else:
        return response['Item']

# ------------- UPDATE FUNCTIONS ------------- #


def update_user(_uid, _email, _password, _name, _phonenum, _admin):

    table = dynamodb.Table('weathr-data-dev')

    response = table.update_item(
        Key={
            'user_id': _uid
        },
        UpdateExpression="email=:e, password=:p, name=:n, phonenum=:pn, admin=:a",
        ExpressionAttributeValues={
            ':e': _email,
            ':p': _password,
            ':n': _name,
            ':pn': _phonenum,
            ':a': _admin
        },
        ReturnValues="UPDATED_NEW"
    )
    return response

# ------------- DELETE FUNCTIONS ------------- #


def delete_user(_uid):

    table = dynamodb.Table('weathr-data-dev')

    try:
        response = table.delete_item(
            Key={
                'user_id': _uid
            }
        )
    except ClientError as err:
        print(err.response['Error']['Response'])
    else:
        return response


if __name__ == '__main__':
    put_user("1", "xxx@gmail.com", "1234pas", "JohnDoe", "7778", False)