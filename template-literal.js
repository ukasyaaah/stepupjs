console.log("st1\nst2");
console.log(`st1
    st2`);

// embed expression
let nama = "miaw";
console.log(`hello ${nama}`);

// bisa manggil function
// console.log(`${alert("hallo")}`);

console.log(`${(nama = "hani" ? "Admin" : `Hey ${nama}`)}`);

// HTML Fragments
const meaw = {
  color: "black & white",
  foots: 4,
};

const el = `<h2>Meaw</h2>
 <div class="meaw">
 <span class="foots">${meaw.foots}</span>
 <span class="color">${meaw.color} </span>
 </div>
`;

