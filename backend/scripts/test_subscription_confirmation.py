from botocore.exceptions import ClientError
import boto3

sns = boto3.client("sns")

# try to subscribe
# try:
#     response = client.subscribe(
#     TopicArn='string',
#     Protocol='string',
#     Endpoint='string',
#     Attributes={
#         'string': 'string'
#     },
#     ReturnSubscriptionArn=True|False
# )
# try to confirm

try:
    token = sns.get_endpoint_attributes(
         EndpointArn='arn:aws:sns:us-east-1:451696402673:weathrTwoWayHandler:350d4d1e-4052-4d82-afc4-5f189b2e14a5')
    print(token)
    subscription_ARN = sns.confirm_subscription(
        TopicArn='arn:aws:sns:us-east-1:451696402673:weathrTwoWayHandler',
        Token= token.Attributes.Token
    )
    print(subscription_ARN)
except ClientError as err:
    print(err)