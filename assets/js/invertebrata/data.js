
const getDatainvertebrata = () => {
    fetch('https://sbc-sebatcabut.herokuapp.com/invertebratas')
        .then(response => response.json())
        .then(data => {
            displayDatainvertebrata(data.data.data);
        })
        .catch(error => console.log(error));
        
}

const displayDatainvertebrata = (data) => {
    // document.getElementById("data-id").value = data.id;
    
    var id = data.length
    document.getElementById("invertebrata-id").innerHTML = id;
    // let id = document.getElementById("data-id").value;
}

// var Jml_data = API_ENDPOINT.length;
// document.write(Jml_data);

