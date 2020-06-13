<?php
//create connection to customers database
$conn = mysqli_connect('localhost', 'root', '', 'customers');


//fetch data from information table
if(isset($_REQUEST['page']))
  $idPage=$_REQUEST['page'];

$order='';
if(isset($_REQUEST['order']))
{
	$strOrder=$_REQUEST['order'];
	
	if(strcmp($strOrder,"id")==0)
		$order='id';
	if(strcmp($strOrder,"name")==0)
		$order='customername';
	if(strcmp($strOrder,"phone")==0)
		$order='phonenumber';
	if(strcmp($strOrder,"address")==0)
		$order='homeaddress';
	if(strcmp($strOrder,"email")==0)
		$order='emailaddress';
	if(strcmp($strOrder,"delivery")==0)
		$order='delivery';	
	
	if($_REQUEST['orderType']==1)
		$order.=' ASC';
	else
		$order.=' DESC';
	$order=' ORDER BY '.$order;
}

$search=' WHERE (1=1) ';
if(isset($_REQUEST['id']))
	$search.='AND (id LIKE "%'.$_REQUEST['id'].'%") ';
if(isset($_REQUEST['name']))
	$search.='AND (customername LIKE "%'.$_REQUEST['name'].'%") ';
if(isset($_REQUEST['phone']))
	$search.='AND (phonenumber LIKE "%'.$_REQUEST['phone'].'%")';
if(isset($_REQUEST['address']))
	$search.='AND (homeaddress LIKE "%'.$_REQUEST['address'].'%") ';
if(isset($_REQUEST['email']))
	$search.='AND (emailaddress LIKE "%'.$_REQUEST['email'].'%") ';
if(isset($_REQUEST['delivery']))
	$search.='AND (delivery LIKE "%'.$_REQUEST['delivery'].'%") ';
$offset=$_REQUEST['page']*$_REQUEST['pageSize'];
$limit=' LIMIT '.$offset.','.$_REQUEST['pageSize'];

$sql = mysqli_query($conn, "SELECT * FROM information ".$search.$order.$limit);

//store data in result VARIABLE
$result = mysqli_fetch_all($sql, MYSQLI_ASSOC);

exit(json_encode($result));
