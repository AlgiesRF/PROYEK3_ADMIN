
const getDatabmn = () => {
    fetch('https://sbc-sebatcabut.herokuapp.com/allbmn')
        .then(response => response.json())
        .then(data => {
            displayDatabmn(data.data.data);
        })
        .catch(error => console.log(error));
        
}

const displayDatabmn = (data) => {
    // document.getElementById("data-id").value = data.id;
    
    var _id = data.length
    document.getElementById("bmn-_id").innerHTML = _id;
    // let id = document.getElementById("data-id").value;
}

// var Jml_data = API_ENDPOINT.length;
// document.write(Jml_data);

