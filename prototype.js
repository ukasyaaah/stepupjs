/**
 * 
 * @param {string} nama 
 * @param {string} kamar 
 */


function Santri(nama, kamar) {
  this.nama = nama;
  this.kamar = kamar;
}

// Dalam bahasa lain, konsep prototype adalah 
// class yg memiliki pewarisan / inheritance
Santri.prototype.makan = function () {
  return `Santri atas nama ${this.nama} sedang makan`;
};

Santri.prototype.tidur = function () {
  return `Santri ${this.nama} sedang tidur`;
};

let lakso = new Santri("Laksono", "A3");
console.log(lakso);
console.log(lakso.makan());
console.log(lakso.tidur());