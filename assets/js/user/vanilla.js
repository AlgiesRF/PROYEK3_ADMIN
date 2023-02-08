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
    document.getElementById("username").value = data.username;
    document.getElementById("password").value = data.password;
    document.getElementById("role").value = data.role;
    document.getElementById("token").value = data.token;
}

const deleteData = (id) => {
    fetch(API_ENDPOINT + '/user/' + id, {
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
        <td>${object.name}</td>
        <td>${object.username}</td>
        <td>${object.password}</td>
        <td>${object.role}</td>
        <td>${object.token}</td>
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
            document.getElementById("update-username").value = dataObject.username;
            document.getElementById("update-password").value = dataObject.password;
            document.getElementById("update-role").value = dataObject.role;
            document.getElementById("update-token").value = dataObject.token;
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
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const role = document.getElementById("role").value;
        const token = document.getElementById("token").value;
    
        // Memanggil fungsi postData dengan nilai yang diambil dari form
        postData({ name: name, username: username, password: password, role: role, token: token,});
    });
    getData();

}