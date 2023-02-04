const API_ENDPOINT = 'https://sbc-sebatcabut.herokuapp.com';

const getData = () => {
    fetch(API_ENDPOINT + '/batuans')
        .then(response => response.json())
        .then(data => {
            displayData(data.data.data);
        })
        .catch(error => console.log(error));
}
// Menampilkan data
getData();

const getDataById = (id) => {
    fetch(API_ENDPOINT + '/batuan/' + id)
        .then(response => response.json())
        .then(data => {
            displayDataById(data.data);
        })
        .catch(error => console.log(error));
}

const displayDataById = (data) => {
    document.getElementById("id").value = data.id;
    document.getElementById("no_register").value = data.no_register;
    document.getElementById("no_inventaris").value = data.no_inventaris;
    document.getElementById("kode_bmn").value = data.kode_bmn;
    document.getElementById("nup_bmn").value = data.nup_bmn;
    document.getElementById("merk_bmn").value = data.merk_bmn;
    document.getElementById("satuan").value = data.satuan;
    document.getElementById("kelompok_koleksi").value = data.kelompok_koleksi;
    document.getElementById("jenis_koleksi").value = data.jenis_koleksi;
    document.getElementById("sub_jenis_koleksi").value = data.sub_jenis_koleksi;
    document.getElementById("kode_jenis_koleksi").value = data.kode_jenis_koleksi;
    document.getElementById("ruang_simpan").value = data.ruang_simpan;
    document.getElementById("lokasi_simpan").value = data.lokasi_simpan;
    document.getElementById("kondisi").value = data.kondisi;
    document.getElementById("nama_koleksi").value = data.nama_koleksi;
    document.getElementById("keterangan").value = data.keterangan;
    document.getElementById("nama_formasi").value = data.nama_formasi;
    document.getElementById("lokasi_temuan").value = data.lokasi_temuan;
    document.getElementById("koordinat").value = data.koordinat;
    document.getElementById("pulau").value = data.pulau;
    document.getElementById("peta").value = data.peta;
    document.getElementById("lembar_peta").value = data.lembar_peta;
    document.getElementById("skala").value = data.skala;
    document.getElementById("cara_perolehan").value = data.cara_perolehan;
    document.getElementById("tahun_perolehan").value = data.tahun_perolehan;
    document.getElementById("kolektor").value = data.kolektor;
    document.getElementById("kepemilikan").value = data.kepemilikan;
    document.getElementById("operator").value = data.operator;
    document.getElementById("tanggal_dicatat").value = data.tanggal_dicatat;
    document.getElementById("nilai_perolehan").value = data.nilai_perolehan;
    document.getElementById("nilai_buku").value = data.nilai_buku;
    document.getElementById("foto").value = data.foto;
    document.getElementById("foto_2").value = data.foto_2;
    document.getElementById("foto_3").value = data.foto_3;
}

const deleteData = (id) => {
    fetch(API_ENDPOINT + '/batuan/' + id, {
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
        <td>${object.no_inventaris}</td>
        <td>${object.kode_bmn}</td>
        <td>${object.nup_bmn}</td>
        <td>${object.merk_bmn}</td>
        <td>${object.satuan}</td>
        <td>${object.kelompok_koleksi}</td>
        <td>${object.jenis_koleksi}</td>
        <td>${object.sub_jenis_koleksi}</td>
        <td>${object.kode_jenis_koleksi}</td>
        <td>${object.ruang_simpan}</td>
        <td>${object.lokasi_simpan}</td>
        <td>${object.kondisi}</td>
        <td>${object.nama_koleksi}</td>
        <td>${object.keterangan}</td>
        <td>${object.nama_formasi}</td>
        <td>${object.lokasi_temuan}</td>
        <td>${object.koordinat}</td>
        <td>${object.pulau}</td>
        <td>${object.peta}</td>
        <td>${object.lembar_peta}</td>
        <td>${object.skala}</td>
        <td>${object.cara_perolehan}</td>
        <td>${object.tahun_perolehan}</td>
        <td>${object.kolektor}</td>
        <td>${object.kepemilikan}</td>
        <td>${object.operator}</td>
        <td>${object.tanggal_dicatat}</td>
        <td>${object.nilai_perolehan}</td>
        <td>${object.nilai_buku}</td>
        <td>${object.foto}</td>
        <td>${object.foto_2}</td>
        <td>${object.foto_3}</td>
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
            window.location.href = '/update/updatebatuan.html?id=' + id;
            let dataObject = dataArray.find(function (object) {
                return object.id === id;
            });
            document.getElementById("update-id").value = dataObject.id;
            document.getElementById("update-no_register").value = dataObject.no_register;
            document.getElementById("update-no_inventaris").value = dataObject.no_inventaris;
            document.getElementById("update-kode_bmn").value = dataObject.kode_bmn;
            document.getElementById("update-nup_bmn").value = dataObject.nup_bmn;
            document.getElementById("update-merk_bmn").value = dataObject.merk_bmn;
            document.getElementById("update-satuan").value = dataObject.satuan;
            document.getElementById("update-kelompok_koleksi").value = dataObject.kelompok_koleksi;
            document.getElementById("update-jenis_koleksi").value = dataObject.jenis_koleksi;
            document.getElementById("update-sub_jenis_koleksi").value = dataObject.sub_jenis_koleksi;
            document.getElementById("update-kode_jenis_koleksi").value = dataObject.kode_jenis_koleksi;
            document.getElementById("update-ruang_simpan").value = dataObject.ruang_simpan;
            document.getElementById("update-lokasi_simpan").value = dataObject.lokasi_simpan;
            document.getElementById("update-kondisi").value = dataObject.kondisi;
            document.getElementById("update-nama_koleksi").value = dataObject.nama_koleksi;
            document.getElementById("update-keterangan").value = dataObject.keterangan;
            document.getElementById("update-nama_formasi").value = dataObject.nama_formasi;
            document.getElementById("update-lokasi_temuan").value = dataObject.lokasi_temuan;
            document.getElementById("update-koordinat").value = dataObject.koordinat;
            document.getElementById("update-pulau").value = dataObject.pulau;
            document.getElementById("update-peta").value = dataObject.peta;
            document.getElementById("update-lembar_peta").value = dataObject.lembar_peta;
            document.getElementById("update-skala").value = dataObject.skala;
            document.getElementById("update-cara_perolehan").value = dataObject.cara_perolehan;
            document.getElementById("update-tahun_perolehan").value = dataObject.tahun_perolehan;
            document.getElementById("update-kolektor").value = dataObject.kolektor;
            document.getElementById("update-kepemilikan").value = dataObject.kepemilikan;
            document.getElementById("update-operator").value = dataObject.operator;
            document.getElementById("update-tanggal_dicatat").value = dataObject.tanggal_dicatat;
            document.getElementById("update-nilai_perolehan").value = dataObject.nilai_perolehan;
            document.getElementById("update-nilai_buku").value = dataObject.nilai_buku;
            document.getElementById("update-foto").value = dataObject.foto;
            document.getElementById("update-foto_2").value = dataObject.foto_2;
            document.getElementById("update-foto_3").value = dataObject.foto_3;
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
        fetch(API_ENDPOINT + '/batuan', {
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
    
    
    getData();
    // Mengambil elemen form
    const form = document.getElementById("form");
    
    // Menambahkan event listener untuk form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    
        // Mengambil nilai dari input
        const no_register = document.getElementById("no_register").value;
        const no_inventaris = document.getElementById("no_inventaris").value;
        const kode_bmn = document.getElementById("kode_bmn").value;
        const nup_bmn = document.getElementById("nup_bmn").value;
        const merk_bmn = document.getElementById("merk_bmn").value;
        const satuan = document.getElementById("satuan").value;
        const kelompok_koleksi = document.getElementById("kelompok_koleksi").value;
        const jenis_koleksi = document.getElementById("jenis_koleksi").value;
        const sub_jenis_koleksi = document.getElementById("sub_jenis_koleksi").value;
        const kode_jenis_koleksi = document.getElementById("kode_jenis_koleksi").value;
        const ruang_simpan = document.getElementById("ruang_simpan").value;
        const lokasi_simpan = document.getElementById("lokasi_simpan").value;
        const kondisi = document.getElementById("kondisi").value;
        const nama_koleksi = document.getElementById("nama_koleksi").value;
        const keterangan = document.getElementById("keterangan").value;
        const nama_formasi = document.getElementById("nama_formasi").value;
        const lokasi_temuan = document.getElementById("lokasi_temuan").value;
        const koordinat = document.getElementById("koordinat").value;
        const pulau = document.getElementById("pulau").value;
        const peta = document.getElementById("peta").value;
        const lembar_peta = document.getElementById("lembar_peta").value;
        const skala = document.getElementById("skala").value;
        const cara_perolehan = document.getElementById("cara_perolehan").value;
        const tahun_perolehan = document.getElementById("tahun_perolehan").value;
        const kolektor = document.getElementById("kolektor").value;
        const kepemilikan = document.getElementById("kepemilikan").value;
        const nilai_perolehan = document.getElementById("nilai_perolehan").value;
        const nilai_buku = document.getElementById("nilai_buku").value;
        const foto = document.getElementById("foto").value;
        const foto_2 = document.getElementById("foto_2").value;
        const foto_3 = document.getElementById("foto_3").value;
    
        // Memanggil fungsi postData dengan nilai yang diambil dari form
        postData({ no_register: no_register, no_inventaris: no_inventaris, kode_bmn: kode_bmn, nup_bmn: nup_bmn, merk_bmn: merk_bmn, satuan: satuan, kelompok_koleksi: kelompok_koleksi, jenis_koleksi: jenis_koleksi, sub_jenis_koleksi: sub_jenis_koleksi, kode_jenis_koleksi: kode_jenis_koleksi,ruang_simpan: ruang_simpan, lokasi_simpan: lokasi_simpan, kondisi: kondisi, nama_koleksi: nama_koleksi, keterangan: keterangan, nama_formasi: nama_formasi, lokasi_temuan: lokasi_temuan, koordinat: koordinat, pulau: pulau, peta: peta, lembar_peta: lembar_peta, skala: skala, cara_perolehan: cara_perolehan, tahun_perolehan: tahun_perolehan, kolektor: kolektor, kepemilikan: kepemilikan, operator: operator, tanggal_dicatat: tanggal_dicatat, nilai_perolehan: nilai_perolehan, nilai_buku: nilai_buku, foto: foto, foto_2: foto_2, foto_3: foto_3 });
    });
    getData();
}

