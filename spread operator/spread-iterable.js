// Spread iterable
// mecah iterable jadi single element
const mhs = ["Ari", "Adit", "Denis"];
const guru = ["mia", "lesti", "Andi"];
console.log(...mhs[0]);

// gabung array dgb concat
const gabungConcat = mhs.concat(guru);
console.log(gabungConcat);

// gabung array dgb spread
const gabungSpread = [...mhs, ...guru];
console.log(gabungSpread);

// menduplikat, isinya benar2 di copy
const mhs1 = [...mhs];
console.log(mhs1);

const h1 = document.querySelector(".nama");
const nama = [...h1.innerHTML].map((e) => `<span>${e}</span>`).join("");
h1.innerHTML = nama;
