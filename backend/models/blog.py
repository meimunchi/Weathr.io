from providers.dynamo_table import create_table


class Blog:
    uid = None
    name = None
    author = None
    date = None
    content = None
    table = None

    def __init__(self, _uid=None, _name=None, _author=None, _date=None, _content=None):
        self.uid = _uid
        self.name = _name
        self.author = _author
        self.date = _date
        self.content = _content
        self.table = create_table('weathr-blogs')
        return

    def put(self):
        response = self.table.put_item(
            Item={
                'uid': self.uid,
                'name': self.name,
                'author': self.author,
                'date': self.date,
                'content': self.content
            }
        )
        return response

    def to_dict(self):
        return {
            'uid': self.uid,
            'name': self.name,
            'author': self.author,
            'date': self.date,
            'content': self.content
        }

    @classmethod
    def get(cls, uid):
        response = create_table('weathr-blogs').get_item(Key={'uid': uid})
        if 'Item' not in response:
            return None
        else:
            blog_attrs = response['Item']
            blog = Blog(_uid=blog_attrs['uid'], _name=blog_attrs['name'], _author=blog_attrs['author'],
                        _date=blog_attrs['date'], _content=blog_attrs['content'])
            return blog

    @classmethod
    def get_all(cls):
        return create_table('weathr-blogs').scan()['Items']

    @classmethod
    def update(cls, _uid, _name, _author, _date, _content):
        create_table('weathr-blogs').update_item(
            Key={
                'uid': _uid
            },
            UpdateExpression="set #dyno_name=:n, author=:a, #dyno_date=:d, content=:c",
            ExpressionAttributeValues={
                ':n': _name,
                ':a': _author,
                ':d': _date,
                ':c': _content
            },
            ExpressionAttributeNames={
                "#dyno_name": "name",
                "#dyno_date": "date"
            },
            ReturnValues="UPDATED_NEW"
        )

    @classmethod
    def delete(cls, _uid):
        create_table('weathr-blogs').delete_item(
            Key={
                'uid': _uid
            }
        )
