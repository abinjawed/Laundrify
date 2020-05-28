
// The total of each bill type in its own increment of either 1,5,10,20,50 or 100
function findTotal() {
  oninput="qty.value=parseInt(a.value)*parseInt(b.value)";
}

// The total of all bill types
function myFunction() {
  document.getElementById("findTotal()").value = "total";
}

function findTotal(){
var arr = document.getElementsByName('qty');
var tot=0;
for(var i=0;i<arr.length;i++){
    if(parseInt(arr[i].value))
        tot += parseInt(arr[i].value);
}
document.getElementById('total').value = tot;
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");

  }
}
