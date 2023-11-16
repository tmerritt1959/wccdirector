from flask import Flask
# this runs on port 5000 as a server by using flask run 
app = Flask(__name__)

@app.route('/')
def index():
    return 'Why is it that when people type in Hello World they dont take into account that we are on a relatively small sphere spinning in infinitude. Should your greeting be greater in scope?'

