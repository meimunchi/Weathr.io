import unittest
import requests


class TestEndpoints(unittest.TestCase):
    def test_blog(self):
        response = requests.get('http://localhost:5000/educational-blogs')
        self.assertEqual(response.status_code, 200)

    def test_blogs(self):
        response = requests.get('http://localhost:5000/blogs')
        self.assertEqual(response.status_code, 200)


if __name__ == '__main__':
    unittest.main()
