function getData() {
    //fetch('http://localhost:7002/profile.html')
    fetch('../serverSide/data.json')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })
}