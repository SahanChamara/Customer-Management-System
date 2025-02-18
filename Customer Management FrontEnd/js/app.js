loadCustomer();

function loadCustomer() {
  let tbBody = document.getElementById("customerTableBody");
  let body = "";

  fetch("http://localhost:8080/customer/getAll")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      data.forEach((customer) => {
        body += `<tr>                
                <td>${customer.id}</td>
                <td>${customer.name}</td>
                <td>${customer.address}</td>
                <td>${customer.salary}</td>
              </tr>`;
      });

      tbBody.innerHTML = body;
    });
}

function addCustomer() {    
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    name: document.getElementById("name").value,
    address: document.getElementById("address").value,
    salary: document.getElementById("salary").value,
  });

  loadCustomer();

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:8080/customer/add", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));    
}

function searchCustomers(){
    let customerId = document.getElementById("searchInput").value;
    let name="";
    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
      fetch(`http://localhost:8080/customer/search/${customerId}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            console.log(result)
            name = result.name
            console.log(name);


            document.getElementById("name").innerHTML = name;
            document.getElementById("address").oninput = name;
            //document.getElementById("name").innerHTML = result.name,
            // document.getElementById("address").value,
            // document.getElementById("salary").value,
        })
        
        
        // .catch((error) => console.error(error));
}

