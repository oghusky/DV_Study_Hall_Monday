import subprocess
import sys
try:
    import json
    import requests
    from flask import Flask, render_template, request
    from flask_pymongo import PyMongo
    from flask_cors import CORS
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "requests"])
    subprocess.check_call([sys.executable, "-m", "pip", "install", "flask"])
    subprocess.check_call(
        [sys.executable, "-m", "pip", "install", "flask_pymongo"])
    subprocess.check_call(
        [sys.executable, "-m", "pip", "install", "flask_cors"])
finally:
    import requests
    from flask import Flask, render_template, request
    from flask_pymongo import PyMongo
    from flask_cors import CORS

users_to_append = requests.get(
    "https://jsonplaceholder.typicode.com/users").json()
# print(users_to_append)

app = Flask(__name__)

app.config["MONGO_URI"] = 'mongodb://localhost:27017/users'

CORS(app)

mongo = PyMongo(app)
mongo.db.users.drop()

users = mongo.db.users


def insert_users():
    for user in users_to_append:
        users.insert_one(user)


insert_users()

# print(list(user_list))

# route methods GET, POST, PUT, DELETE <<< CRUD METHODS
@app.route("/", methods=["GET"])
def home():
    user_list = users.find()
    return render_template("index.html", users=user_list)
# post sends info back to server
# put takes info from DB that is already existing and updates


if __name__ == "__main__":
    app.run(debug=True)
