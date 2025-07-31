//1. Obj Literal
let mahasiswa = {
  nama: "Ari",
  nim: "20202",
  jurusan: "RPL",

  sapa() {
    return `Hello, Selamat Datang ${this.nama}!`;
  },
};

console.log(mahasiswa);
console.log(mahasiswa.sapa());

let objMhs = {
  sapa: function () {
    return `Hai ${this.nama}`;
  },
};

//2. Function Declaration
function Mahasiswa(nama, jurusan) {
  // Object Create
  let mahasiswa = Object.create(objMhs);
  mahasiswa.jurusan = jurusan;
  mahasiswa.nama = nama;

  // Functional Dec. harus return objeknya
  return mahasiswa;
}
let mhs = Mahasiswa("leni", "ternak", );
console.log(mhs.sapa());

//3. Constructor Funct. -> key new
// gaperlu return
class Mahas {
  constructor(nama, jurusan) {
    this.nama = nama;
    this.jurusan = jurusan;

    this.sapa = function () {
      return `Halo Mahas ${this.nama}`;
    };
  }
}
let mahas = new Mahas("eri", "tambang");
console.log(mahas.sapa());

