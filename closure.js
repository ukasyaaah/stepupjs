function init() {
  let nama = "Hani";

  // ini closure
  return function () {
    console.log(nama);
  };
}

panggil = init();
panggil();

/// Contoh lain
function salam(waktu) {
  // ini closure funct
  return function (nama) {
    console.log(`Halo ${nama}, selamat ${waktu}`);
  };
}

// Factory Funct
// -> kita bikin funct sesuai dgn funct yg lain
const selamatPagi = salam("pagi");
const selamatSiang = salam("siang");
const selamatMalam = salam("malam");
selamatPagi("Hani");


// contoh lain
let add = (function () {
  let counter = 0;

  // closure funct
  return function () {
    console.log(++counter);
  };
})();

counter = 100;
// let adda = add();
add();
add();
add();
