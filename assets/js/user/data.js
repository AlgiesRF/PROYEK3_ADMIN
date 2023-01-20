
const getDatauser = () => {
    fetch('https://sbc-sebatcabut.herokuapp.com/users')
        .then(response => response.json())
        .then(data => {
            displayDatauser(data.data.data);
        })
        .catch(error => console.log(error));
        
}

const displayDatauser = (data) => {
    // document.getElementById("data-id").value = data.id;
    
    var id = data.length
    document.getElementById("user-id").innerHTML = id;
    // let id = document.getElementById("data-id").value;
}

// var Jml_data = API_ENDPOINT.length;
// document.write(Jml_data);

