// fetch("http://www.omdbapi.com/?apikey=5a7a8f9a&s=avengers")
//   .then((respon) => respon.json())
//   .then((respon) => console.log(respon));

// Contoh 1
let ditepati = true;
const janji = new Promise((resolve, reject) => {
  if (ditepati) {
    resolve("Janji ditepati!");
  } else {
    reject("Ingkar janji!");
  }
});

// janji
//   .then((respon) => console.log(`Ok : ${respon}`))
//   .catch((respon) => console.log(`GAGAL : ${respon}`));

// contoh 2
const janji2 = new Promise((resolve, reject) => {
  if (ditepati) {
    setTimeout(() => {
      resolve("ditepati setelah 2 detik");
    }, 2000);
  } else {
    setTimeout(() => {
      resolve("Tidak ditepati setelah 2 detik");
    }, 2000);
  }
});

console.log("mulai");
janji2
  .finally(() => console.log("Selesai Menunggu!"))
  .then((respon) => console.log(`OK : ${respon}`))
  .catch((respon) => console.log(`Fail : ${respon}`));
console.log('Selesai');