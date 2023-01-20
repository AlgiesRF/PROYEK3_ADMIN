
const getDatavertebrata = () => {
    fetch('https://sbc-sebatcabut.herokuapp.com/invertebratas')
        .then(response => response.json())
        .then(data => {
            displayDatavertebrata(data.data.data);
        })
        .catch(error => console.log(error));
        
}

const displayDatavertebrata = (data) => {
    // document.getElementById("data-id").value = data.id;
    
    var id = data.length
    document.getElementById("vertebrata-id").innerHTML = id;
    // let id = document.getElementById("data-id").value;
}

// var Jml_data = API_ENDPOINT.length;
// document.write(Jml_data);

