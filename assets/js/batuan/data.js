
const getDatabatuan = () => {
    fetch('https://sbc-sebatcabut.herokuapp.com/batuans')
        .then(response => response.json())
        .then(data => {
            displayDatabatuan(data.data.data);
        })
        .catch(error => console.log(error));
        
}

const displayDatabatuan = (data) => {
    // document.getElementById("data-id").value = data.id;
    
    var id = data.length
    document.getElementById("batuan-id").innerHTML = id;
    // let id = document.getElementById("data-id").value;
}

// var Jml_data = API_ENDPOINT.length;
// document.write(Jml_data);

