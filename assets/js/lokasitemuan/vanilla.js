const API_ENDPOINT = 'https://sbc-sebatcabut.herokuapp.com';

const getData = () => {
    fetch(API_ENDPOINT + '/lokasitemuans')
        .then(response => response.json())
        .then(data => {
            displayData(data.data.data);
        })
        .catch(error => console.log(error));
}
// Menampilkan data
getData();

const getDataById = (id) => {
    fetch(API_ENDPOINT + '/lokasitemuan/' + id)
        .then(response => response.json())
        .then(data => {
            displayDataById(data.data);
        })
        .catch(error => console.log(error));
}

const displayDataById = (data) => {
    document.getElementById("id").value = data.id;
    document.getElementById("lokasi").value = data.lokasi;
    document.getElementById("kelurahan").value = data.kelurahan;
    document.getElementById("kecamatan").value = data.kecamatan;
    document.getElementById("kota").value = data.kota;
    document.getElementById("provinsi").value = data.provinsi;
}

const deleteData = (id) => {
    fetch(API_ENDPOINT + '/lokasitemuan/' + id, {
        method: 'DELETE'
    })
    let msg = "Apakah anda yakin ingin mengahapus data tersebut?"
    agree = confirm(msg)
     if (agree){
       return true;
     }else{
       return  e.preventDefault();
     };
}

const displayData = (dataArray) => {
    let output = "";
    dataArray.forEach(function(object, index) {
        output += `
        <tr>
        <td>${index+1}</td>
        <td>${object.lokasi}</td>
        <td>${object.kelurahan}</td>
        <td>${object.kecamatan}</td>
        <td>${object.kota}</td>
        <td>${object.provinsi}</td>
        <td>
        <button class="update btn btn-warning" data-id="${object.id}">Update</button>
        <button class="delete btn btn-danger" data-id="${object.id}">Delete</button>
        </td>
        </tr>
        `;
    });
    document.getElementById("result").innerHTML = output;

    // Event listener untuk button update
    let updateButtons = document.querySelectorAll('.update');
    updateButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            let id = this.getAttribute('data-id');
            getDataById(id);
            window.location.href = '/update/updatelokasitemuan.html?id=' + id;
            let dataObject = dataArray.find(function (object) {
                return object.id === id;
            });
            document.getElementById("update-id").value = dataObject.id;
            document.getElementById("update-lokasi").value = dataObject.lokasi;
            document.getElementById("update-kelurahan").value = dataObject.kelurahan;
            document.getElementById("update-kecamatan").value = dataObject.kecamatan;
            document.getElementById("update-kota").value = dataObject.kota;
            document.getElementById("update-provinsi").value = dataObject.provinsi;
        });
    });
    
    let deleteButtons = document.querySelectorAll('.delete');
    deleteButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            let id = this.getAttribute('data-id');
            deleteData(id);
            let row = this.parentNode.parentNode;
            row.parentNode.removeChild(row);
        });
    });

}
    const postData = (data) => {
        fetch(API_ENDPOINT + '/lokasitemuan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => console.log(error));
    }
    
    getData();
    // Mengambil elemen form
    const form = document.getElementById("form");
    
    // Menambahkan event listener untuk form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    
        // Mengambil nilai dari input
        const lokasi = document.getElementById("lokasi").value;
        const kelurahan = document.getElementById("kelurahan").value;
        const kecamatan = document.getElementById("kecamatan").value;
        const kota = document.getElementById("kota").value;
        const provinsi = document.getElementById("provinsi").value;
    
        // Memanggil fungsi postData dengan nilai yang diambil dari form
        postData({ lokasi: lokasi, kelurahan: kelurahan, kecamatan: kecamatan, kota: kota, provinsi: provinsi,});
    });
    getData();

