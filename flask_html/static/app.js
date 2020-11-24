XMLHttpRequest

fetch("../static/app.json")
  .then(res => res.json())
  .then(data => console.log(data));

d3
  .json("/api")
  .then(res => {
    console.log(res)
    var ul = document.querySelector("ul");
    res.users.map(user => {
      ul.innerHTML += `
        <li>Name: ${user.name}, Age: ${user.age}</li>
      `
    })
  }
  )


document.querySelector("button").addEventListener("click", () => {
  $.ajax({
    url: "/upload",
    method: "POST",
    data: {
      image: document.querySelector("input[type='file']")
    }
  }).then(res => window.location.reload());
})

// GET: HTML in browser, a GET ROUTE on server, AND a select * from on DB
// POST: FORM action and method from browser, POST route on server, AND insert into query on DB
// PUT: FORM action and method with id from item on browser, PUT route on server, AND UPDATE SET WHERE on DB
// DELETE: FORM action and method with id from item on browser
