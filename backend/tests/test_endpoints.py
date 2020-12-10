import unittest
import requests


class TestEndpoints(unittest.TestCase):
    '''def test_login(self):
        response = requests.get('http://localhost:5000/blogs')
        self.assertEqual(response.status_code, 200)'''

#blog_api tests
    def test_get_blogs(self):
        response = requests.get('http://localhost:5000/blogs')
        self.assertEqual(response.status_code, 200)
    
    def test_get_blog(self):
        response = requests.post('http://localhost:5000/blog')
        self.assertEqual(response.status_code, 200)
    
    def test_update_blog(self):
        response = requests.get('http://localhost:5000/update-blog')
        self.assertEqual(response.status_code, 200)
    
    def test_delete_blog(self):
        response = requests.post('http://localhost:5000/delete-blog')
        self.assertEqual(response.status_code, 200)

    def test_add_blog(self):
        response = requests.post('http://localhost:5000/add-blog')
        self.assertEqual(response.status_code, 200)
    
# login tests
    def test_login(self):
        response = requests.post('http://localhost:5000/login')
        self.assertEqual(response.status_code, 200)

    def test_signup_user(self):
        response = requests.post('http://localhost:5000/signup')
        self.assertEqual(response.status_code, 200)

    def test_get_user(self):
        response = requests.get('http://localhost:5000/user')
        self.assertEqual(response.status_code, 200)

    def test_logout(self):
        response = requests.get('http://localhost:5000/logout')
        self.assertEqual(response.status_code, 200)
    
    
if __name__ == '__main__':
    unittest.main()
