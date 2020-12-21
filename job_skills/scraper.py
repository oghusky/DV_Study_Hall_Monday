from splinter import Browser
import re
import collections
from flask import jsonify
from bs4 import BeautifulSoup
from pymongo import MongoClient
client = MongoClient("mongodb://localhost:27017/")
db = client.indeed_db


def init_browser():
    # @NOTE: Replace the path with your actual path to the chromedriver
    executable_path = {"executable_path": "./chromedriver"}
    return Browser("chrome", **executable_path, headless=True)


def render():
    if(len(list(db.indeed_db.find())) > 0):
        return list(db.indeed_db.find())
    else:
        indeed()


def indeed():
    count = 0
    for page in range(0, 100, 10):
        url = f"https://www.indeed.com/jobs?q=data+engineer+%2485%2C000&l=Atlanta%2C+GA&rbl=Atlanta%2C+GA&jlid=966e6327a98f7e81&explvl=entry_level&start={page}"
        browser = init_browser()
        browser.visit(url)
        page = browser.html
        soup = BeautifulSoup(page, 'html.parser')
        jobs = soup.findAll(
            "div", class_="jobsearch-SerpJobCard unifiedRow row result clickcard")
        for job in jobs:
            try:
                title = job.find("h2").text
                company = job.find("span", class_="company").text
                #     # salary
                salary = job.find(class_="salaryText")
                str_salary = str(salary)
                #     # summary
                summaries = job.find(class_="summary").ul.findAll("li")
                summary_items = []
                for summary in summaries:
                    summary_items.append(summary.text)
                db.indeed_db.insert_one({
                    "_id": str(count)+"_bloop_"+str(count),
                    "title": title.strip(),
                    "company": company.strip(),
                    "salary": str(salary),
                    "summaries": summary_items
                })
                count += 1
            except (AttributeError, TypeError) as e:
                pass
    return list(db.indeed_db.find())


def extract():
    summaries = []
    removed = []
    cleaned = []
    for summary in db.indeed_db.find():
        summaries.append(",".join(summary["summaries"]))
    joined = ",".join(summaries)
    split_up = joined.split(" ")
    bad_words = ["the", "to", "and", "a", "an", "for", "with",
                 "of", "as", "can", "on", "will", "well", "have",
                 "so", "feel", "that", "or", "in", "is", "all", "may",
                 "possible", "from", "this", "they", "we", "our", "your",
                 "mine", "ours", "you'll", "it", "you", "it's", "its", "other"]
    regex = re.compile('[@_!#$%^&*()<>?/\|}{~:]')
    for word in split_up:
        if word not in bad_words and not regex.search(word):
            removed.append(word.lower())
    for key in collections.Counter(removed):
        cleaned.append({
            "word": key,
            "count": collections.Counter(removed)[key]
        })
    return cleaned, split_up, joined
