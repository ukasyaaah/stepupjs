// Synchronous Callback
// function tampilPesan(funct) {
//   let nama = prompt("Masukkan Nama : ");
//   return funct(nama);
// }

// tampilPesan(function (nama) {
//   alert(`Hallo ${nama}`);
// });

// Asynchronous Callback -> AJAX Vanilla JS
// function getDataOrang(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       }
//     } else if (xhr.status === 404) {
//       error();
//     }
//   };

//   xhr.open("get", url);
//   xhr.send();
// }

console.log("mulai");

// getDataOrang(
//   "orang.json",
//   (hasil) => {
//     const mhs = JSON.parse(hasil);
//     mhs.forEach((e) => console.log(e.nama));
//   },
//   () => {}
// );

// JQuery
$.ajax({
  url: "orang.json",
  success: (hasil) => hasil.forEach((o) => console.log(o.nama)),
  error: (e) => console.log(e.responseText),
});

console.log("selesai");
