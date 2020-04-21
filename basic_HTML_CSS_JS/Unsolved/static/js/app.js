var showProjects = document.querySelector("#show-projects");

var projects = [
  {
    name: "Python",
    language_type: "Python",
    description: "Plotting info pulled from api",
    url: "github.com/yourrepo/python"
  },
  {
    name: "SQL",
    language_type: "SQL",
    description: "Joining table",
    url: "github.com/yourrepo/sql"
  },
  {
    name: "MongoDB",
    language_type: "MongoDB",
    description: "working with documents instead of tables",
    url: "github.com/yourrepo/mongo"
  }
]

// for project in projects:
// run this code

projects.map(function (project) {
  // console.log(project);
  // print(f'string literal/formatted string {variable}')
  var projectDiv = document.createElement("div");
  projectDiv.classList.add("col-lg-4", "card")
  projectDiv.innerHTML = `
  <h3>${project.name}</h3>
  <div>
  <p>${project.language_type}</p>
  <p>${project.description}</p>
  <a href="${project.url}">Learn more</a>
  </div>
  `;
  showProjects.appendChild(projectDiv);
});
// revealonscroll
// animate-on-scroll