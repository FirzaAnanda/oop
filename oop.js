// class Human {
//   constructor(name, address) {
//     this.name = name;
//     this.address = address;
//   }

//   introduce() {
//     console.log(`Hi, my name is ${this.name}`);
//   }

//   work() {
//     console.log("Work!");
//   }
// }





// // Buat child class dari class Human
// class Programmer extends Human {
//   constructor(name, address, programmingLanguage) {
//     // memanggil constructor  super / parent class
//     // dalam kasus ini Human.constructor
//     super(name, address);
//     this.programmingLanguage = programmingLanguage;
//   }

//   introduce() {
//     // memanggil instance method introduce dari super class
//     super.introduce();
//     console.log("I can write", this.programmingLanguage);
//   }

//   code() {
//     console.log("Code some", this.programmingLanguage[Math.floor(Math.random() * this.programmingLanguage.length)]);
//   }
// }

// let obama = new Programmer("Barrack Obama", "Washington DC","Javascript");
// console.log(obama.name)
// console.log(obama.introduce())
 
class Kampus{
  constructor(dosen, murid) {
    this.dosen = dosen;
    this.murid = murid;
  }
  

}
