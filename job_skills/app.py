from flask import Flask, render_template, redirect, jsonify
from flask_cors import CORS
import scraper
app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def home():
    return render_template('index.html')


@app.route("/jobs", methods=["GET"])
def jobs():
    return jsonify(scraper.render())


@app.route("/summary", methods=["GET"])
def job():
    return jsonify(cleaned=scraper.extract()[0], split=scraper.extract()[1], joined=scraper.extract()[2])


if __name__ == "__main__":
    app.run(debug=True)
