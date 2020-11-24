import subprocess
import sys
try:
    from flask import Flask, render_template, request, jsonify
    from flask_cors import CORS
except ImportError:
    subprocess.check_call([sys.executable, '-m', 'pip', 'install', 'flask'])
    subprocess.check_call(
        [sys.executable, '-m', 'pip', 'install', 'flask_cors'])
finally:
    from flask import Flask, render_template, request, jsonify
    from flask_cors import CORS

app = Flask(__name__)

CORS(app)


@app.route("/", methods=["GET"])
def home():
    return render_template("index.html")


@app.route("/api", methods=["GET"])
def users():
    users = [
        {"name": "Phil",
         "age": 37},
        {"name": "Phil",
            "age": 37},
        {"name": "Phil",
            "age": 37},
        {"name": "Phil Two",
            "age": 99}
    ]

    print(list(map(lambda x: x, users)))
    return jsonify(users=users)


if __name__ == "__main__":
    app.run(debug=True)
