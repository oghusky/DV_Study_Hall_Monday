# Chipotle Data

## How to start up a basic node server
- Download "nodejs" "https://nodejs.org"

- Here's link to help if assistance is needed "https://www.youtube.com/watch?v=qZQmCfkmbNA"

- To test, open a terminal type "node" hit "Enter" if you don't receive an error try "1+1" if you see "2" you've successfully installed node

- Create a working directory folder. In your directory create a "server.js" file

- After file is created run "npm init -y"

- This will create a file called "package.json" 

## Project utilites
-This app uses a csv file of chipotle locations. Currently it uses one route from the "server" for the api to return all data to front end.

-There's one front end route that returns an html page and uses javascript on the "client" side.

- Packages used are:
-- path "https://nodejs.org/api/path.html"
-- fs "https://nodejs.org/api/fs.html"
-- express "https://expressjs.com/"

- To install these packages run "npm i <package name>",in your working directory, then hit Enter. For example, "npm i path".

## Important Note:
- To run this project on your local system after cloning. Clone > Go to local directory in your terminal ("cd" to directory) > Run "npm i" in your terminal > Open browser to "localhost:5000".