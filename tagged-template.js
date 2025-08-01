const nama = "Hani";
const asal = "Majapahit";

function highlight(kata, ...values) {
  console.log("values:", values);

  return kata.reduce(
    (hasil, str, index) => `${hasil}${str}${values[index] || ""}`,
    ""
  );
}

const str = highlight`Halo nama saya ${nama}, saya dari ${asal}`;
console.log(str);

const film = "Lilo & Stich";
const rating = 3;

function review(string, ...values) {
  console.log(string);
  console.log(values);

  return string.reduce((hasil, kata, i) => {
    return `${hasil}${kata}${values[i] || ""}`;
  }, "");
}

const aku = review`aku habis nonton film ${film}, dan ratinnya ${rating}/5`;
console.log(aku);
