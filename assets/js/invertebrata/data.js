

const getDatainvertebrata = () => {
    fetch(API_ENDPOINT + '/invertebratas')
        .then(response => response.json())
        .then(data => {
            displayData(data.data.data);
        })
        .catch(error => console.log(error));
        
}

const displayData = (data) => {
    // document.getElementById("data-id").value = data.id;
    
    var id = data.length
    document.getElementById("invertebrata-id").innerHTML = id;
    document.getElementById("vertebrata-id").innerHTML = id;
    // let id = document.getElementById("data-id").value;
}

// var Jml_data = API_ENDPOINT.length;
// document.write(Jml_data);
