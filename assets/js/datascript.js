// FETCH DATA
var orderField="id";
var order=1;
var pageSize=5;
var currentPage=0;
function loadData()
{
	pageSizeEl=document.getElementById("recordsPerPage");
	if(pageSize!=pageSizeEl.options[pageSizeEl.selectedIndex].value)
	{
		pageSize=pageSizeEl.options[pageSizeEl.selectedIndex].value;
		currentPage=0;
	}
	
	//get number item on the page:
	var req="order="+orderField+"&orderType="+order+"&pageSize="+pageSize+"&page="+currentPage;	
	if(document.getElementById('id').value.length>0)
		req+="&id="+document.getElementById('id').value;
	if(document.getElementById('name').value.length>0)
		req+="&name="+document.getElementById('name').value;
	if(document.getElementById('phone').value.length>0)
		req+="&phone="+document.getElementById('phone').value;
	if(document.getElementById('address').value.length>0)
		req+="&address="+document.getElementById('address').value;
	if(document.getElementById('email').value.length>0)
		req+="&email="+document.getElementById('email').value;
	if(document.getElementById('delivery').value.length>0)
		req+="&delivery="+document.getElementById('delivery').value;
	
	
	fetch('fetch.php?'+req).then((res) => res.json())
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
}

function changeOrder(name,type){
	//change previous header to standard:
	var hrefItem=document.getElementById('td_'+orderField);
	var value=orderField;
	
	if(name==orderField)
	{
		if(order==1)
		{
			hrefItem.innerHTML = "&#8600;";
			hrefItem.onclick = function() {changeOrder(value,-1);};
		}
	    else{
		  hrefItem.innerHTML = "&#8599;";
		  hrefItem.onclick = function() {changeOrder(value,1);};
		}
		order=-order;
	}
    else
	{
		//reset old link:
		hrefItem.innerHTML = "&#8600;";
		hrefItem.onclick = function() {changeOrder(value,1);};
		var hrefItem=document.getElementById('td_'+name);
		hrefItem.innerHTML = "&#8599;";
		hrefItem.onclick = function() {changeOrder(name,-1);};
		orderField=name;
		order=1;
	}
	currentPage=0;
	loadData();
}

function changePage(changePage){
	currentPage+=changePage;
	if(currentPage<0)
		currentPage=0;
	loadData();
}


//set listener on press button "Enter" for each input:
var inputs = document.querySelectorAll('input[type=text]');
for (var i = 0; i < inputs.length; i++) {
    var self = inputs[i];

    self.onkeypress = function(e){
		if(e.key=='Enter')
		{
			currentPage=0;
			loadData();
		}
	};
}



loadData();