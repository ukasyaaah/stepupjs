class Orang {
  /**
   *
   * @param {string} name
   * @param {string} address
   */
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  makan() {
    return `${this.name} sedang makan`;
  }

  nonton() {
    return `${this.name} lagi nonton`;
  }
}

let ari = new Orang("Ari", "Indonesia");

console.log(ari.nonton());
