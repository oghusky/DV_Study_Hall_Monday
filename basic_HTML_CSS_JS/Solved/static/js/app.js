// selecting div with id of "show-projects"
var showProjects = document.querySelector('#show-projects');
// console.log(showProjects)
// making a list/array of objects/dictionaries
var projects = [
  {
    name: "Python",
    language_type: "Python",
    description: "Plotting information pulled in from  API",
    url: "http://google.com"
  },
  {
    name: "SQL",
    language_type: "SQL",
    description: "Building and joining tables using POSTGRESQL",
    url: "http://google.com"
  },
  {
    name: "Mongo",
    language_type: "MongoDB",
    description: "Plotting weather information pulled in from openweather API",
    url: "http://google.com"
  },
  {
    name: "Web",
    language_type: "HTML, CSS, JS",
    description: "Visualizing data using HTML, CSS, and JS",
    url: "http://google.com"
  },
  {
    name: "R",
    language_type: "R",
    description: "Displaying data using RStudio",
    url: "http://google.com"
  },
  {
    name: "Big Data",
    language_type: "Mixture",
    description: "Advanced Visualizations",
    url: "http://google.com"
  },
];

// loop through list/array of dictionaries/objects
projects.map(function (project) {
  // print projects to console
  // console.log(project);
  // create a div for each project in array/list
  var projectDiv = document.createElement("div");
  // add css class to each div created
  projectDiv.classList.add("col-lg-3", "card");
  // text to show inside each div
  projectDiv.innerHTML = `
  <h3 class="text-center card-header">${project.name} Homework</h3>
  <div class="card-body">
  <p class="text-center card-title">${project.language_type}</p>
  <p class="text-center card-text mb-4">${project.description}</p>
  <p class="text-center learn-project"><a class="btn btn-primary" href="${project.url}">Learn More</a></p>
  </div>
  `;
  // append each div created to show-projects div in HTML
  showProjects.appendChild(projectDiv);
});
