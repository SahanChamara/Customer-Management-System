loadCustomer();

// Add Customer
function addCustomer() {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    name: document.getElementById("name").value,
    address: document.getElementById("address").value,
    salary: document.getElementById("salary").value,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:8080/customer/add", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      loadCustomer();
    })
    .catch((error) => console.error(error));

  
}

// Search Customer
function searchCustomers() {
  let customerId = document.getElementById("searchInput").value;
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(`http://localhost:8080/customer/search/${customerId}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {      
      let tBody = document.getElementById("customerTableBody");
      let body = "";

      if(result!=null){
        body += `<tr>                
                <td>${result.id}</td>
                <td>${result.name}</td>
                <td>${result.address}</td>
                <td>${result.salary}</td>
                <td><button type="button" id="submitBtn" onclick="updateCustomer(${result.id})" style="background-color:green;">Update Customer</button></td>
                <td><button type="button" id="submitBtn" onclick="deleteCustomer(${result.id})" style="background-color:red;">Delete Customer</button></td>
              </tr>`;

      tBody.innerHTML = body;
      }else{
        document.getElementById("searchInput").value = "No customer Found";
      }
    });
}

//Update Customer
function updateCustomer(customerId) {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(`http://localhost:8080/customer/search/${customerId}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      if (result != null) {
        document.getElementById("id").value = result.id;
        document.getElementById("name").value = result.name;
        document.getElementById("address").value = result.address;
        document.getElementById("salary").value = result.salary;
      }
    })
    .catch((error) => console.error(error));
}

// Delete Customer
function  deleteCustomer(customerId){
  const requestOptions = {
    method: "DELETE",
    redirect: "follow"
  };
  
  fetch(`http://localhost:8080/customer/delete/${customerId}`, requestOptions)
    .then((response) => response.text())
    .then((result) => {loadCustomer();})
    .catch((error) => console.error(error));    
}

function resetForm() {
  document.getElementById("id").value = "";
  document.getElementById("name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("salary").value = "";
}

// View Customer
function loadCustomer() {
  let tbBody = document.getElementById("customerTableBody");
  let body = "";

  fetch("http://localhost:8080/customer/getAll")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((customer) => {
        body += `<tr>                
                <td>${customer.id}</td>
                <td>${customer.name}</td>
                <td>${customer.address}</td>
                <td>${customer.salary}</td>
                <td><button type="button" id="submitBtn" onclick="updateCustomer(${customer.id})" style="background-color:green;">Update Customer</button></td>
                <td><button type="button" id="submitBtn" onclick="deleteCustomer(${customer.id})" style="background-color:red;">Delete Customer</button></td>
              </tr>`;
      });

      tbBody.innerHTML = body;
    });
}

function reloadTable(){
  loadCustomer();
}
