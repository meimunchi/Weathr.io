import unittest
import requests


class TestEndpoints(unittest.TestCase):
    # Blog Tests
    # # Getting all blogs returns approriate blogs
    # def test_get_blogs(self):
    #     response = requests.get('http://localhost:5000/blogs')
    #     self.assertEqual(response.status_code, 200)
    #     self.assertEqual(response.json()['blogs'][0]['name'], 'Hurricane 101')
    #
    # # Getting specific blog returns approriate blog
    # def test_get_blog(self):
    #     response = requests.post('http://localhost:5000/blog', json={'uid': '35b19bf5-ea32-4f95-86bb-57384fd63048'})
    #     self.assertEqual(response.json()['blog']['name'], 'Blizzard 101')

#     def test_update_blog(self):
#         response = requests.get('http://localhost:5000/update-blog')
#         self.assertEqual(response.status_code, 200)
#
#     def test_delete_blog(self):
#         response = requests.post('http://localhost:5000/delete-blog')
#         self.assertEqual(response.status_code, 200)
#
#     def test_add_blog(self):
#         response = requests.post('http://localhost:5000/add-blog')
#         self.assertEqual(response.status_code, 200)
#
# login tests
#     def test_login(self):
#         response = requests.post('http://localhost:5000/login')
#         self.assertEqual(response.status_code, 200)
#
#     def test_signup_user(self):
#         response = requests.post('http://localhost:5000/signup')
#         self.assertEqual(response.status_code, 200)
#
#     def test_get_user(self):
#         response = requests.get('http://localhost:5000/user')
#         self.assertEqual(response.status_code, 200)
#
#     def test_logout(self):
#         response = requests.get('http://localhost:5000/logout')
#         self.assertEqual(response.status_code, 200)
#
# weather tests

    # def test_weathr_info(self):
    #     response = requests.post('http://localhost:5000/info', json={'lat': 29.6, 'long': -82.3})
    #     self.assertEqual(response.status_code, 200)
    #     print(response.json())

#     def test_weathr_precip(self):
#         response = requests.get('http://localhost:5000/precip')
#         self.assertEqual(response.status_code, 200)
#
#     def test_general(self):
#         response = requests.get('http://localhost:5000/general')
#         self.assertEqual(response.status_code, 200)
#
#     def test_disaster(self):
#         response = requests.get('http://localhost:5000/disaster')
#         self.assertEqual(response.status_code, 200)
#
#     def test_news(self):
#         response = requests.get('http://localhost:5000/news')
#         self.assertEqual(response.status_code, 200)
#
# # sms test
#     def test_sms_general(self):
#         response = requests.post('http://localhost:5000/general')
#         self.assertEqual(response.status_code, 200)


if __name__ == '__main__':
    # response = requests.get('http://localhost:5000/blogs')
    # print(response)
    unittest.main()
