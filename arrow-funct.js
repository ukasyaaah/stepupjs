// Implisit return -> return gaperlu ditulis
let tampilPesan = (nama) => `Hello ${nama}`;

console.log(tampilPesan("Hani"));

const hello = () => "Hello World";

// Map Funct -> utk memetakan array pada funct
let hewans = ["kucing", "singa", "macan"];

let sapaHewan = hewans.map((hewan) => `Hello ${hewan}`);

// return obj
let objHewan = hewans.map((hewan) => ({ hewan }));

console.table(sapaHewan);
console.log(objHewan);
