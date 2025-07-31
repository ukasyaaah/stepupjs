// Gabisa bikin constructor funct pake arrow
class Wong {
  constructor(jeneng) {
    this.jeneng = jeneng;
    this.sapa = () => {
      console.log(`Hello ${this.jeneng}`);
    };
  }
}

const org = new Wong("laik");
org.sapa();


const orang2 = {
  nama: "Nabila",
  sayHello: function()  {
    console.log(`Halo, saya ${this.nama}`);
  },
};

orang2.sayHello();
