function cek() {
  return new Promise((resolve, reject) => {
    const waktu = 3000;
    if (waktu < 2500) {
      setTimeout(() => {
        resolve("Proses Selesai");
      }, waktu);
    } else {
      reject("Kelamaan!!");
    }
  });
}

async function cobaAsync() {
  try {
    const cekAsync = await cek();
    console.log(cekAsync);
  } catch (error) {
    console.log(error);
  }
}

cobaAsync();
