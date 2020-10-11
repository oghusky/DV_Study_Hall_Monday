import csv
from pymongo import MongoClient
import pprint
from flask import Flask, render_template, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
client = MongoClient('mongodb://localhost:27017/')
db = client.student_info
# with open('./Resources/StudentsPerformance.csv', encoding='utf-8', newline='') as csvfile:
#     csvreader = csv.reader(csvfile, delimiter=',')
# for row in csvreader:
#     db.student_info.insert_one({
#         "gender": row[0],
#         "ethniicity": row[1],
#         "ploe": row[2],
#         "lunch": row[3],
#         "test_prep": row[4],
#         "math": row[5],
#         "reading": row[6],
#         "writing": row[7]
#     })
pprint.pprint(db.student_info.find_one({"gender": "female", "math": "72"}))
# "gender",
# "race/ethnicity",
# "parental level of education",
# "lunch",
# "test preparation course",
# "math score",
# "reading score",
# "writing score"


@app.route("/", methods=["GET"])
def home():
    return render_template('index.html')


@app.route("/students", methods=["GET"])
def students():
    students = []
    for student in db.student_info.find():
        students.append({
            "gender": student["gender"],
            "ethnicity": student["ethniicity"],
            "ploe": student["ploe"],
            "lunch": student["lunch"],
            "test_prep": student["test_prep"],
            "math": student["math"],
            "reading": student["reading"],
            "writing": student["writing"]
        })
    return jsonify(students=students)


if __name__ == "__main__":
    app.run(debug=True)
