const listVideo = Array.from(document.querySelectorAll("ul li"));
const totalDurasi = document.getElementsByClassName("total-durasi")[0];
const jmlVideo = document.querySelector(".jumlah-video");

let filtered = listVideo
  .filter((vid) => vid.textContent.includes("JAVASCRIPT LANJUTAN"))
  .map((item) => item.dataset.duration)
  .map((waktu) => {
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  .reduce((acc, val) => acc + val);

const jam = Math.floor(filtered / 3600);
filtered = filtered - jam * 3600;

const menit = Math.floor(filtered / 60);
const detik = filtered - menit * 60;
totalDurasi.innerHTML = `${jam} jam ${menit} menit ${detik} detik`;

const jmlVid = listVideo.filter((vid) =>
  vid.textContent.includes("JAVASCRIPT LANJUTAN")
).length;

jmlVideo.innerHTML = `${jmlVid} video`;
