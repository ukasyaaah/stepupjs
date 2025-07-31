const angka = [1, 2, 3, 4, -1, 9, 5, 7, -2, 10]; // 27, 21, 30

// filter angka
const filteredAngka = angka.filter((angka) => angka >= 3);
console.log(filteredAngka);

// Map -> memetakan tiap2 element pd array menggunakan funct yg baru
const doubledAngka = angka.map((tiapAngka) => tiapAngka * 2);
console.log(doubledAngka);

// reduce -> melakukan sesuatu pada seluruh elemen yg ada di array
// misal : jumlah semua elemen pada array
// accumulator : hasil dari proses
// currentValue : element yg sdg di looping
// nilai awal : default 0
const nilaiAwal = 2;
const sumAllAngka = angka.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  nilaiAwal
);
console.log(sumAllAngka);

// Chaining -> menggabungkan fungsi2 pd hof dlm 1x eksekusi tanpa masukin ke variable
const hasil = angka
  .filter((angka) => angka > 5)
  .map((element) => element * 3)
  .reduce((acc, value) => acc + value, 0);

console.log(hasil);
