
const getDatafosil = () => {
    fetch('https://sbc-sebatcabut.herokuapp.com/fosils')
        .then(response => response.json())
        .then(data => {
            displayDatafosil(data.data.data);
        })
        .catch(error => console.log(error));
        
}

const displayDatafosil = (data) => {
    // document.getElementById("data-id").value = data.id;
    
    var id = data.length
    document.getElementById("fosil-id").innerHTML = id;
    // let id = document.getElementById("data-id").value;
}

// var Jml_data = API_ENDPOINT.length;
// document.write(Jml_data);

