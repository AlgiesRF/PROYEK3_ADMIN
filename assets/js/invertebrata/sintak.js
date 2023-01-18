const loadData = async () => {
    try {
      const url = await fetch(urlbackend+path);
      data = await url.json();
      console.log(data)
      loadData(data);
    }catch (err) {
      console.log(err)
    }
  }
  
  const loadUserData = (data) => {
    let no = 1;
    const output = data.map((element) => {
      return `
      <tr>
      <td> ` + (nama ++) + `</td>
      <td>${lokasi_ditemukan}</td>
      <td>${waktu_ditemukan}</td>
      </tr>
      `
  
    }).join('')
    tbody.innerHTML = output
  }

  //========================================================================

  const urlbackend = "https://sbc-sebatcabut.herokuapp.com/"

function getandshowdatafrom(path){
  fetch(urlbackend+path)
  .then((response) => response.json())
  .then((invertebrata) => invertebrata.data.data)
  .catch(err => console.log(err))
  // .then( inv => showdatainvertebrata(inv[0]));
}

// function showdatainvertebrata(dt){
//   let output = ''
//   getandshowdatafrom.forEach(el => {
//     output += `
//     <tr>
//       <td>$(el.nama)</td>
//       <td>$(el.lokasi_ditemukan)</td>
//       <td>$(el.waktu_ditemukan)</td>
//     </tr>
//     `
//   });
//   document.getElementById('tdody').innerHTML = output;
// };

// function showdatainvertebrata(dt){
//   let html = html+"<li>"+dt.nama+"</li>";
//   html = html+"<li>"+dt.lokasi_ditemukan+"</li>";
//   html = html+"<li>"+dt.waktu_ditemukan+"</li>";
//   document.getElementById('invertebrata').innerHTML = html;
// };



  