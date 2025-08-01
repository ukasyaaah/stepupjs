const siswas = [
  {
    jurusan: "Tambang",
    color: "hitam",
    things: "mac",
    letterBoxFav: ["Ari Aster", "The Godfather", "Journey of Hope"],
  },
  {
    jurusan: "insinyur",
    color: "coklat",
  },
  {
    jurusan: "ekonomi",
    color: "sawo",
  },
];

const html = `<div class="mhs">
${siswas
  .map(
    (e) =>
      `<ul>
<li>Jurusan : ${e.jurusan} </li>
<li>Warna : ${e.color} </li>
${e.things ? `<li>Things : ${e.things} </li>` : ""}
${
  e.letterBoxFav
    ? 
    `
    <h4>Top LetterBoxd</h4>
    ${e.letterBoxFav.map(
        (e) =>
            
          `
          
          <ul>
    <li>${e}</li>
    </ul>
    
    `
      ).join('')}`
    : ""
}


    </ul>`
  )
  .join("")}
</div>`;

document.body.innerHTML = html;
