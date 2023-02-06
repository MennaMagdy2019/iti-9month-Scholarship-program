function getData(){
    fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    let table = document.querySelector("table");
    let data1 = Object.keys(data[0]);
    generateTableHead(table, data1);
    generateTable(table, data);
     table.style.backgroundColor ="gray"
     table.style.margin ="20px"
  }
  );

}
function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        if(key == 'address' || key == 'company'){}
        else{
            let th = document.createElement("th");
            let text = document.createTextNode(key);
            th.appendChild(text);
            row.appendChild(th);
        }
    
    }
  }
  
  function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        
        if(key == 'address' || key == 'company'){}
        else{
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
       
      }
    }
  }

  getData()