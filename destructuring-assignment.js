///1. ARRAY
const angka = ["satu", "dua", "tiga"];

// Sebelum
console.log(angka[0]);

// const [a, b, c] = angka;

// bisa skip item dgn tidak menghilangkan koma
const [a, , c] = angka;

// console.log(a); // satu
// console.log(b); // dua
// console.log(c); // tiga

///2. SWAP ITEM -> menukar isi dari array
let con = 1;
let toh = 2;

[con, toh] = [toh, con];
console.log(con); // 2
console.log(toh); //1

///3. Sbg Return value pd Funct
function bongkar() {
  return [4, 5, 6];
}

const [x, y, z] = bongkar();
console.log(x); // 4
console.log(y); // 5
console.log(z); //6

///4. Rest Parameter
// Misal mau bongkar array yg elemennya byk
// atau malah gatau jumlah elemennya
const [one, ...sisa] = [1, 2, 3, 4, 5];
console.log(one); // 1
console.log(sisa); // [2,3,4,5]

//5. OBJECT

const uwong = {
  jeneng: "Mila",
  alamat: "Inggres",
};

// sebelum
const namaa = uwong.nama;

// setelah
const { jeneng: j, alamat: al, email: e = "default value" } = uwong;
console.log(j);

/// Tanpa deklarasi object
({
  name: n,
  age: ag,
  email = "default",
} = {
  name: "Mioh",
  age: 16,
});

console.log(ag); // 16

/// Rest Parameter
const Hewan = {
  kaki: 4,
  warna: "coklat",
  bunyi: "rawr",
};

const { warna, ...lainnya } = Hewan;
console.log(warna);
console.log(lainnya); // { kaki: 4, bunyi: 'rawr' }

/// Ambil field pada Obj
const data = {
  id: 3,
  warna: "biru",
};

function getWarna({ warna }) {
  console.log(warna);
}

getWarna(data);
