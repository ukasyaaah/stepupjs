// For of
const listNama = ["fadil", "rafi", "ari"];
const Nama = ["fadil", "rafi", "ari"];

// dgn forEach
listNama.forEach((e) => console.log(e));

// dgn for..of
for (const nama of listNama) {
  console.log(nama);
}

// for of utk string
const nameh = "Hani";
for (const n of nameh) {
  console.log(n);
}

// arguments
function tambah() {
  let hasil = 0;
  for (let bil of arguments) {
    hasil += bil;
  }
  return hasil;
}

console.log(tambah(1, 2, 3, 4, 5));
