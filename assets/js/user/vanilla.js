const API_ENDPOINT = 'https://sbc-sebatcabut.herokuapp.com';

const getData = () => {
    fetch(API_ENDPOINT + '/users')
        .then(response => response.json())
        .then(data => {
            displayData(data.data.data);
        })
        .catch(error => console.log(error));
}
// Menampilkan data
getData();

const getDataById = (id) => {
    fetch(API_ENDPOINT + '/user/' + id)
        .then(response => response.json())
        .then(data => {
            displayDataById(data.data);
        })
        .catch(error => console.log(error));
}

const displayDataById = (data) => {
    document.getElementById("id").value = data.id;
    document.getElementById("name").value = data.name;
    document.getElementById("location").value = data.location;
    document.getElementById("title").value = data.title;
}

const deleteData = (id) => {
    fetch(API_ENDPOINT + '/user/' + id, {
        method: 'DELETE'
    })
}

const displayData = (dataArray, index) => {
    let output = "";
    dataArray.forEach(function(object) {
        output += `
        <tr>
        <td>${index+1}</td>
        <td>${object.name}</td>
        <td>${object.location}</td>
        <td>${object.title}</td>
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
            window.location.href = '/update/updateuser.html?id=' + id;
            let dataObject = dataArray.find(function (object) {
                return object.id === id;
            });
            document.getElementById("update-id").value = dataObject.id;
            document.getElementById("update-name").value = dataObject.name;
            document.getElementById("update-location").value = dataObject.location;
            document.getElementById("update-title").value = dataObject.title;
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
    fetch(API_ENDPOINT + '/user', {
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
    const name = document.getElementById("name").value;
    const location = document.getElementById("location").value;
    const title = document.getElementById("title").value;

    // Memanggil fungsi postData dengan nilai yang diambil dari form
    postData({ name: name, location: location, title: title });
});
getData();

