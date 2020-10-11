d3
  .json("http://localhost:5000/students")
  .then(function (data) {
    // grab tbody element from html
    const tbody = document.querySelector('tbody');
    // logging students list from server route
    // console.log(data.students);
    // use filter function to grab all rows except the first one.
    // and filter by group B <<< did this to lessen results that render on page
    const filtered = data.students.filter((student, i )=> i !=0 && student.ethnicity === "group B")
    console.log(filtered);
    // mapping filtered data and displaying on page
    filtered.map(student=>{
      tbody.innerHTML+=`
      <tr>
      <td>${student.gender}</td>
      <td>${student.lunch}</td>
      <td>${student.test_prep}</td>
      </tr>
      `
    })
  })