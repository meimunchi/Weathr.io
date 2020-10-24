import unittest
import requests


class TestEndpoints(unittest.TestCase):
    def test_home(self):
        response = requests.get('http://localhost:5000')
        self.assertEqual(response.status_code, 200)


if __name__ == '__main__':
    unittest.main()
