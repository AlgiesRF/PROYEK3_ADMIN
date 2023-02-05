const API_ENDPOINT = 'https://sbc-sebatcabut.herokuapp.com';

const getData = () => {
    fetch(API_ENDPOINT + '/allbmn')
        .then(response => response.json())
        .then(data => {
            displayData(data.data.data);
        })
        .catch(error => console.log(error));
}

const getDataById = (_id) => {
    fetch(API_ENDPOINT + '/bmn/' + _id)
        .then(response => response.json())
        .then(data => {
            displayDataById(data.data);
        })
        .catch(error => console.log(error));
}

const displayDataById = (data) => {
    document.getElementById("_id").value = data._id;
    document.getElementById("no_register").value = data.no_register;
    document.getElementById("kategori_bmn").value = data.kategori_bmn;
    document.getElementById("tipe_bmn").value = data.tipe_bmn;
    document.getElementById("nilai_perolehan").value = data.nilai_perolehan;
    document.getElementById("nilai_buku").value = data.nilai_buku;
}

const deleteData = (_id) => {
    fetch(API_ENDPOINT + '/bmn/' + _id, {
        method: 'DELETE'
    })
}

const displayData = (dataArray) => {
    let output = "";
    dataArray.forEach(function(object, index) {
        output += `
        <tr>
        <td>${index+1}</td>
        <td>${object.no_register}</td>
        <td>${object.kategori_bmn}</td>
        <td>${object.tipe_bmn}</td>
        <td>${object.nilai_perolehan}</td>
        <td>${object.nilai_buku}</td>
        <td>
        <button class="update btn btn-warning" data-_id="${object._id}">Update</button>
        <button class="delete btn btn-danger" data-_id="${object._id}">Delete</button>
        </td>
        </tr>
        `;
    });
    document.getElementById("result").innerHTML = output;
    // Event listener untuk button update
    let updateButtons = document.querySelectorAll('.update');
    updateButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            let _id = this.getAttribute('data-_id');
            getDataById(_id);
            window.location.href = '/update/updatebmn.html?_id=' + _id;
            let dataObject = dataArray.find(function (object) {
                return object._id === _id;
            });
            document.getElementById("update-_id").value = dataObject._id;
            document.getElementById("update-no_register").value = dataObject.no_register;
            document.getElementById("update-kategori_bmn").value = dataObject.kategori_bmn;
            document.getElementById("update-tipe_bmn").value = dataObject.tipe_bmn;
            document.getElementById("update-nilai_perolehan").value = dataObject.nilai_perolehan;
            document.getElementById("update-nilai_buku").value = dataObject.nilai_buku;
        });
    });
    
    let deleteButtons = document.querySelectorAll('.delete');
    deleteButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            let _id = this.getAttribute('data-_id');
            deleteData(_id);
            let row = this.parentNode.parentNode;
            row.parentNode.removeChild(row);
        });
    });

}

const postData = (data) => {
    fetch(API_ENDPOINT + '/bmn', {
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
    const no_register = document.getElementById("no_register").value;
    const kategori_bmn = document.getElementById("kategori_bmn").value;
    const tipe_bmn = document.getElementById("tipe_bmn").value;
    const nilai_perolehan = document.getElementById("nilai_perolehan").value;
    const nilai_buku = document.getElementById("nilai_buku").value;

    // Memanggil fungsi postData dengan nilai yang diambil dari form
    postData({ no_register: no_register, kategori_bmn: kategori_bmn, tipe_bmn: tipe_bmn, nilai_perolehan: nilai_perolehan, nilai_buku: nilai_buku });
});
getData();

