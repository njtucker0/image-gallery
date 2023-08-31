from flask import Flask, request
import requests
import os
from dotenv import load_dotenv

load_dotenv(dotenv_path='./.env.local')

UNSPLASH_URL = 'https://api.unsplash.com/photos/random'
UNSPLASH_KEY = os.environ.get('UNSPLASH_KEY', '')

if not UNSPLASH_KEY:
    raise EnvironmentError("Please create .env.local file "
                           "and insert the UNSPLASH_KEY")

app = Flask(__name__)
@app.route('/new-image')
def new_image():
    headers = {
        'Accept-Version': 'v1',
        'Authorization': "Client-ID " + UNSPLASH_KEY
    }
    params = {'query': request.args.get('query')}
    response = requests.get(url=UNSPLASH_URL,
                            headers=headers,
                            params=params)
    return response.json()


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050)
