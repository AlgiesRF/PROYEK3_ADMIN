const API_ENDPOINT = 'https://sbc-sebatcabut.herokuapp.com';

const getData = () => {
    fetch(API_ENDPOINT + '/invertebratas')
        .then(response => response.json())
        .then(data => {
            displayData(data.data.data);
        })
        .catch(error => console.log(error));
}
// Menampilkan data
getData();

const getDataById = (id) => {
    fetch(API_ENDPOINT + '/invertebrata/' + id)
        .then(response => response.json())
        .then(data => {
            displayDataById(data.data);
        })
        .catch(error => console.log(error));
}

const displayDataById = (data) => {
    document.getElementById("id").value = data.id;
    document.getElementById("nama").value = data.nama;
    document.getElementById("lokasi_ditemukan").value = data.lokasi_ditemukan;
    document.getElementById("waktu_ditemukan").value = data.waktu_ditemukan;
}

const deleteData = (id) => {
    fetch(API_ENDPOINT + '/invertebrata/' + id, {
        method: 'DELETE'
    })
    let msg = "Apakah anda yakin ingin mengahapus data tersebut?"
    agree = confirm(msg)
     if (agree){
       return true;
     }else{
       return  e.preventDefault();
     };
    // let konfirmasi = confirm("Apakah anda yakin ingin mengahapus data tersebut?");
    // alert( msg );
}

const displayData = (dataArray) => {
    let output = "";
    dataArray.forEach(function(object, index) {
        output += `
        <tr>
        <td>${index+1}</td>
        <td>${object.nama}</td>
        <td>${object.lokasi_ditemukan}</td>
        <td>${object.waktu_ditemukan}</td>
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
            window.location.href = '/update/updateinvertebrata.html?id=' + id;
            let dataObject = dataArray.find(function (object) {
                return object.id === id;
            });
            document.getElementById("update-id").value = dataObject.id;
            document.getElementById("update-nama").value = dataObject.nama;
            document.getElementById("update-lokasi_ditemukan").value = dataObject.lokasi_ditemukan;
            document.getElementById("update-waktu_ditemukan").value = dataObject.waktu_ditemukan;
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
        fetch(API_ENDPOINT + '/invertebrata', {
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
        const nama = document.getElementById("nama").value;
        const lokasi = document.getElementById("lokasi").value;
        const waktu = document.getElementById("waktu").value;
    
        // Memanggil fungsi postData dengan nilai yang diambil dari form
        postData({ nama: nama, lokasi_ditemukan: lokasi, waktu_ditemukan: waktu });
    });
    getData();

