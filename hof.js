// Higher Order Function
// funct yg menjadi argumen / return value funct lain

// repeat disebut Higher Order Funct
// action disebut callback
function repeat(n, action) {
  for (i = 0; i <= n; i++) {
    action(i);
  }
}

// sapa disebut Higher Order Funct
// action disebut callback
function sapa(nama, action) {
  action(`Hello, saya ${nama}`);
}

repeat(20, console.log);
sapa("hani", console.log);
