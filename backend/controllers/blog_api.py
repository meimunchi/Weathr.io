from flask import Blueprint, request
from flask_login import login_required, current_user

from models.blog import Blog

blog_api = Blueprint('blog', __name__)


@blog_api.route('/get-blogs', methods=['GET'])
def get_blogs():
    return {'all_blogs': Blog.get_all()}

# Get single blog can be implemented if necessary


@blog_api.route('/add-blog', methods=['POST'])
@login_required
def add_blog():
    if not current_user.is_admin:
        return {'success': False, 'err': 'No permissions'}

    req_data = request.get_json()

    if not ('uid' in req_data and
            'name' in req_data and
            'author' in req_data and
            'date' in req_data and
            'content' in req_data):
        return {'success': False, 'err': 'Invalid request body'}

    new_blog = Blog(_uid=req_data['uid'], _name=req_data['name'], _author=req_data['author'], _date=req_data['date'],
                    _content=req_data['content'])
    new_blog.put()

    return {'success': True}
