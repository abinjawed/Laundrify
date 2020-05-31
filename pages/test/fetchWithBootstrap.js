// FETCH DATA
fetch('fetch.php').then((res) => res.json())
.then(response => {
  console.log(response);
  let output = '';
  for(let i in response){
    output += `<tr>
        <td>${response[i].id}</td>
        <td>${response[i].customername}</td>
        <td>${response[i].phonenumber}</td>
        <td>${response[i].homeaddress}</td>
        <td>${response[i].emailaddress}</td>
        <td>${response[i].delivery}</td>
    </tr>`;
  }

  document.querySelector('.tbody').innerHTML = output;
}).catch(error => console.log(error));

// DATA TABLES
$(document).ready(function(){
$('.table').DataTable();
})
