from flask import Blueprint, request
from flask_login import login_required, current_user

from models.blog import Blog

blog_api = Blueprint('blog', __name__)


@blog_api.route('/blogs', methods=['GET'])
def get_blogs():
    # Can filter so it doesn't give all content for each blog
    # blogs = Blog.get_all()
    # blogs = map(lambda blog: blog.to_dict(), blogs)
    return {'blogs': Blog.get_all()}


@blog_api.route('/blog', methods=['POST'])
def get_blog():
    if request.get_json()['uid'] is None:
        return {'success': False, 'err': 'Invalid request body'}

    retrieve_blog = Blog.get(request.get_json()['uid'])
    return {'blog': retrieve_blog.to_dict()}


@blog_api.route('/update-blog', methods=['POST'])
@login_required
def update_blog():
    if not current_user.is_admin:
        return {'success': False, 'err': 'No permissions'}

    req_data = request.get_json()

    if not ('uid' in req_data and
            'name' in req_data and
            'author' in req_data and
            'date' in req_data and
            'content' in req_data):
        return {'success': False, 'err': 'Invalid request body'}

    update_blog_info = request.get_json()
    Blog.update(update_blog_info['uid'], update_blog_info['name'], update_blog_info['author'],
                update_blog_info['date'], update_blog_info['content'])

    return {'success': True}


@blog_api.route('/delete-blog', methods=['POST'])
@login_required
def delete_blog():
    if not current_user.is_admin:
        return {'success': False, 'err': 'No permissions'}

    if request.get_json()['uid'] is None:
        return {'success': False, 'err': 'Invalid request body'}

    Blog.delete(request.get_json()['uid'])

    return {'success': True}


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
