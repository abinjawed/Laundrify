
  let customers = [];
  // example {customername:musab awad, streetaddress:123 pretend st, phonenumber:720-123-4567, emailaddress:test@email.com, specialrequest:please be gentle,}
  const addCustomer = (ev)=>{
    ev.preventDefault(); //to cancel form submission
    let customer = {
      id: Date.now(),
      customername: document.getElementById ('customername').value,
      streetaddress: document.getElementById ('streetaddress').value,
      phonenumber: document.getElementById ('phonenumber').value,
      emailaddress: document.getElementById ('emailaddress').value,
      specialrequest: document.getElementById ('specialrequest').value
    }
    customers.push(customer);
    document.forms[0].reset(); //to clear the form for the next customer

    //for display purposes only
    console.warn('added' , {customers} );
    let pre = document.querySelector('#msg pre');

    //saving to localStorage
    localStorage.setItem('LaundryCustomers', JSON.stringify(customers) );


  }

  document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addCustomer);
  });
