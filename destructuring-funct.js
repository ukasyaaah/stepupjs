// Destructuring Return Value
// Return Array
// Urutan harus benar
function math(a, b) {
  return [a + b, a - b];
}

const [tambah, kurang] = math(2, 2);
console.log(tambah);
console.log(kurang);

function itung(c, d) {
  return {
    kali: c * d,
    bagi: c / d,
  };
}

const { bagi, kali } = itung(8, 8);
console.log(bagi);
console.log(kali);

// Destructuring function arguments
const mhs1 = {
  nama: "Andi",
  jurusan: "TI",
  nilai: {
    tugas: 80,
    uas: 90,
  },
};

function cetakMhs({ nama, jurusan, nilai: { uas } }) {
  console.log(
    `Mahasiswa atas nama ${nama}, 
    dari jurusan ${jurusan} 
    lulus dengan nilai ${uas}`
  );
}

cetakMhs(mhs1);
