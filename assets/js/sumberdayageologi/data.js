
const getDatasumberdayageologi = () => {
    fetch('https://sbc-sebatcabut.herokuapp.com/sumberdayageologis')
        .then(response => response.json())
        .then(data => {
            displayDatasumberdayageologi(data.data.data);
        })
        .catch(error => console.log(error));
        
}

const displayDatasumberdayageologi = (data) => {
    // document.getElementById("data-id").value = data.id;
    
    var id = data.length
    document.getElementById("sumberdayageologi-id").innerHTML = id;
    // let id = document.getElementById("data-id").value;
}

// var Jml_data = API_ENDPOINT.length;
// document.write(Jml_data);

