
const getDatalokasitemuan = () => {
    fetch('https://sbc-sebatcabut.herokuapp.com/lokasitemuans')
        .then(response => response.json())
        .then(data => {
            displayDatalokasitemuan(data.data.data);
        })
        .catch(error => console.log(error));
        
}

const displayDatalokasitemuan = (data) => {
    // document.getElementById("data-id").value = data.id;
    
    var id = data.length
    document.getElementById("lokasitemuan-id").innerHTML = id;
    // let id = document.getElementById("data-id").value;
}

// var Jml_data = API_ENDPOINT.length;
// document.write(Jml_data);

