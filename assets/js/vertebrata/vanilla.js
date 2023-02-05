const API_ENDPOINT = 'https://sbc-sebatcabut.herokuapp.com';

const getData = () => {
    fetch(API_ENDPOINT + '/vertebratas')
        .then(response => response.json())
        .then(data => {
            displayData(data.data.data);
        })
        .catch(error => console.log(error));
}
// Menampilkan data
getData();

const getDataById = (id) => {
    fetch(API_ENDPOINT + '/vertebrata/' + id)
        .then(response => response.json())
        .then(data => {
            displayDataById(data.data);
        })
        .catch(error => console.log(error));
}

const displayDataById = (data) => {
    document.getElementById("id").value = data.id;
    document.getElementById("no").value = data.no = (data2) =>{

    document.getElementById("registrasi").value = data2.registrasi;
    document.getElementById("inventarisasi").value = data2.inventarisasi;
    document.getElementById("laci").value = data2.laci;
    document.getElementById("kotak").value = data2.kotak;
    document.getElementById("koleksi_baru").value = data2.koleksi_baru;
    document.getElementById("koleksi_lama").value = data2.koleksi_lama;
    };

    document.getElementById("pulau").value = data.pulau;
    document.getElementById("spesies").value = data.spesies;
    document.getElementById("famili").value = data.famili;
    document.getElementById("jenis_koleksi").value = data.jenis_koleksi;
    document.getElementById("determinasi").value = data.determinasi;
    document.getElementById("spesimen").value = data.spesimen;
    document.getElementById("tipe_koleksi").value = data.tipe_koleksi;
    document.getElementById("jumlah_utuh").value = data.jumlah_utuh;
    document.getElementById("jumlah_pecahan").value = data.jumlah_pecahan;
    document.getElementById("jumlah_gabungan").value = data.jumlah_gabungan;
    document.getElementById("lokasi").value = data.lokasi;
    document.getElementById("koordinat_lokasi").value = data.koordinat_lokasi;
    document.getElementById("formasi").value = data.formasi;
    document.getElementById("cara_perolehan").value = data.cara_perolehan;
    document.getElementById("umur").value = data.umur;
    document.getElementById("referensi_publikasi").value = data.referensi_publikasi;
    document.getElementById("kolektor").value = data.kolektor;
    document.getElementById("tahun_penemuan").value = data.tahun_penemuan;
    document.getElementById("literatur").value = data.literatur;
    document.getElementById("extra").value = data.extra;
    document.getElementById("kondisi_benda").value = data.kondisi_benda;
    document.getElementById("keterangan").value = data.keterangan;
    document.getElementById("tanggal_pencatatan").value = data.tanggal_pencatatan;
    document.getElementById("foto").value = data.foto;
}

const deleteData = (id) => {
    fetch(API_ENDPOINT + '/vertebrata/' + id, {
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
        <td>${object.pulau}</td>
        <td>${object.spesies}</td>
        <td>${object.famili}</td>
        <td>${object.jenis_koleksi}</td>
        <td>${object.determinasi}</td>
        <td>${object.spesimen}</td>
        <td>${object.tipe_koleksi}</td>
        <td>${object.jumlah_utuh}</td>
        <td>${object.jumlah_pecahan}</td>
        <td>${object.jumlah_gabungan}</td>
        <td>${object.lokasi}</td>
        <td>${object.koordinat_lokasi}</td>
        <td>${object.formasi}</td>
        <td>${object.cara_perolehan}</td>
        <td>${object.umur}</td>
        <td>${object.referensi_publikasi}</td>
        <td>${object.kolektor}</td>
        <td>${object.tahun_penemuan}</td>
        <td>${object.literatur}</td>
        <td>${object.extra}</td>
        <td>${object.kondisi_benda}</td>
        <td>${object.keterangan}</td>
        <td>${object.tanggal_pencatatan}</td>
        <td>${object.foto}</td>
        <td>
        <button class="update btn btn-warning" data-id="${object.id}">Update</button>
        <button class="delete btn btn-danger" data-id="${object.id}">Delete</button>
        </td>
        </tr>
        `;
    });
    document.getElementById("result").innerHTML = output;


        // Event listener untuk button update
        let detailButtons = document.querySelectorAll('.detail');
        detailButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                let id = this.getAttribute('data-id');
                getDataById(id);
                window.location.href = '/detail/vertebrata.html?id=' + id;
                let dataObject = dataArray.find(function (object) {
                    return object.id === id;
                });
                    document.getElementById("detail-id").value = dataObject.id;
                    document.getElementById("detail-no").value = dataObject.no = (data2) =>{
                
                    document.getElementById("detail-registrasi").value = data2.registrasi;
                    document.getElementById("detail-inventarisasi").value = data2.inventarisasi;
                    document.getElementById("detail-laci").value = data2.laci;
                    document.getElementById("detail-kotak").value = data2.kotak;
                    document.getElementById("detail-koleksi_baru").value = data2.koleksi_baru;
                    document.getElementById("detail-koleksi_lama").value = data2.koleksi_lama;
                    };
                

            });
        });




    // Event listener untuk button update
    let updateButtons = document.querySelectorAll('.update');
    updateButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            let id = this.getAttribute('data-id');
            getDataById(id);
            window.location.href = '/update/updatevertebrata.html?id=' + id;
            let dataObject = dataArray.find(function (object) {
                return object.id === id;
            });
            document.getElementById("update-id").value = dataObject.id;
            document.getElementById("update-no").value = dataObject.no;

            document.getElementById("update-registrasi").value = dataObject.registrasi;
            document.getElementById("update-inventarisasi").value = dataObject.inventarisasi;
            document.getElementById("update-laci").value = dataObject.laci;
            document.getElementById("update-kotak").value = dataObject.kotak;
            document.getElementById("update-koleksi_baru").value = dataObject.koleksi_baru;
            document.getElementById("update-koleksi_lama").value = dataObject.koleksi_lama;

            document.getElementById("update-pulau").value = dataObject.pulau;
            document.getElementById("update-spesies").value = dataObject.spesies;
            document.getElementById("update-famili").value = dataObject.famili;
            document.getElementById("update-jenis_koleksi").value = dataObject.jenis_koleksi;
            document.getElementById("update-determinasi").value = dataObject.determinasi;
            document.getElementById("update-spesimen").value = dataObject.spesimen;
            document.getElementById("update-tipe_koleksi").value = dataObject.tipe_koleksi;
            document.getElementById("update-jumlah_utuh").value = dataObject.jumlah_utuh;
            document.getElementById("update-jumlah_pecahan").value = dataObject.jumlah_pecahan;
            document.getElementById("update-jumlah_gabungan").value = dataObject.jumlah_gabungan;
            document.getElementById("update-lokasi").value = dataObject.lokasi;
            document.getElementById("update-koordinat_lokasi").value = dataObject.koordinat_lokasi;
            document.getElementById("update-formasi").value = dataObject.formasi;
            document.getElementById("update-cara_perolehan").value = dataObject.cara_perolehan;
            document.getElementById("update-umur").value = dataObject.umur;
            document.getElementById("update-referensi_publikasi").value = dataObject.referensi_publikasi;
            document.getElementById("update-kolektor").value = dataObject.kolektor;
            document.getElementById("update-tahun_penemuan").value = dataObject.tahun_penemuan;
            document.getElementById("update-literatur").value = dataObject.literatur;
            document.getElementById("update-extra").value = dataObject.extra;
            document.getElementById("update-kondisi_benda").value = dataObject.kondisi_benda;
            document.getElementById("update-keterangan").value = dataObject.keterangan;
            document.getElementById("update-tanggal_pencatatan").value = dataObject.tanggal_pencatatan;
            document.getElementById("foto").value = dataObject.foto;
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
        fetch(API_ENDPOINT + '/vertebrata', {
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
        const no = document.getElementById("no").value;

        const registrasi = document.getElementById("registrasi").value;
        const inventarisasi = document.getElementById("inventarisasi").value;
        const laci = document.getElementById("laci").value;
        const kotak = document.getElementById("kotak").value;
        const koleksi_baru = document.getElementById("koleksi_baru").value;
        const koleksi_lama = document.getElementById("koleksi_lama").value;

        const pulau = document.getElementById("pulau").value;
        const spesies = document.getElementById("spesies").value;
        const famili = document.getElementById("famili").value;
        const jenis_koleksi = document.getElementById("jenis_koleksi").value;
        const determinasi = document.getElementById("determinasi").value;
        const spesimen = document.getElementById("spesimen").value;
        const tipe_koleksi = document.getElementById("tipe_koleksi").value;
        const jumlah_utuh = document.getElementById("jumlah_utuh").value;
        const jumlah_pecahan = document.getElementById("jumlah_pecahan").value;
        const jumlah_gabungan = document.getElementById("jumlah_gabungan").value;
        const lokasi = document.getElementById("lokasi").value;
        const koordinat_lokasi = document.getElementById("koordinat_lokasi").value;
        const formasi = document.getElementById("formasi").value;
        const cara_perolehan = document.getElementById("cara_perolehan").value;
        const umur = document.getElementById("umur").value;
        const referensi_publikasi = document.getElementById("referensi_publikasi").value;
        const kolektor = document.getElementById("kolektor").value;
        const tahun_penemuan = document.getElementById("tahun_penemuan").value;
        const literatur = document.getElementById("literatur").value;
        const extra = document.getElementById("extra").value;
        const kondisi_benda = document.getElementById("kondisi_benda").value;
        const keterangan = document.getElementById("keterangan").value;
        const tanggal_pencatatan = document.getElementById("tanggal_pencatatan").value;
        const foto = document.getElementById("foto").value;
    
        // Memanggil fungsi postData dengan nilai yang diambil dari form
        postData({ no: no, registrasi: registrasi, inventarisasi: inventarisasi, laci: laci, kotak: kotak, koleksi_baru: koleksi_baru, koleksi_lama: koleksi_lama, pulau: pulau, spesies: spesies, famili: famili, jenis_koleksi: jenis_koleksi, determinasi: determinasi, spesimen: spesimen, tipe_koleksi: tipe_koleksi, jumlah_utuh: jumlah_utuh, jumlah_pecahan: jumlah_pecahan, jumlah_gabungan: jumlah_gabungan, lokasi: lokasi, koordinat_lokasi: koordinat_lokasi, formasi: formasi, cara_perolehan: cara_perolehan, umur: umur, referensi_publikasi: referensi_publikasi, kolektor: kolektor, tahun_penemuan: tahun_penemuan, literatur: literatur, extra: extra, kondisi_benda: kondisi_benda, keterangan: keterangan, tanggal_pencatatan: tanggal_pencatatan, foto: foto,});
    });
    getData();

}