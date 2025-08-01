// Rest Parameter -> sisa

function bilangan(a, b, ...sisanya) {
  console.log(a, b, sisanya);
}

/// map
function sum(...sisa) {
  let hasil = 0;
  sisa.map((e) => (hasil += e));
  return hasil;
}

/// reduce
function tambah(...sisa) {
  return sisa.reduce((acc, val) => acc + val);
}

/// for of
function jumlah(...angka) {
  let hasil = 0;
  for (const a of angka) {
    hasil += a;
  }
  return hasil;
}

console.log(bilangan(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3, 4, 5));
console.log(tambah(1, 2, 3, 4, 5));
console.log(jumlah(1, 2, 3, 4, 5));

/// Pada Array Destructuring
const circle = ["ari", "andi", "irawan", "yoga", "nana"];

const [ketua, wakil, ...anggota] = circle;
console.log(anggota);

/// Pada Object Destructuring
const negara = {
  mentor: "Bg Miko",
  ketua: "Ya'qub",
  bendahara: "Nazmi",
  sekertaris: "Taufiq",
};

const { mentor, ...sesepuh } = negara;
console.log(sesepuh);

/// Filtering
function filterBy(tipe, ...args) {
  return args.filter((e) => typeof e === tipe);
}

console.log(filterBy(
    "string",
     1, 4, 
     false, 
     "kentang", 
     true, 
     undefined
    ));
