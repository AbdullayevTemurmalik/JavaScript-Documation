////////////////////////////////////////////// Klasslar (Classes) //////////////////////////////////////////////////////////////
// Sintaksis:
// class Myclass {
//   constructor(){

//   }
//   method1(){}
//   method2(){}
//   method3(){}
// }
// Va biz undan quyidagicha foydalanamiz:
// new Myclass

// Constructor — bu klasslar uchun initsializator bo'lib, barcha qiymatlar u yerda yaratiladi va parametrlar ham aynan constructor qismiga uzatiladi
// class Multiply {
//   constructor(a,b){
//    this.a = a
//    this.b = b
//   }
//   mult(){
//    console.log(`${this.a} * ${this.b} uchun javob: ${this.a*this.b}`)
//   }
// }
// const cl = new Multiply(10,20)
// cl.mult() // 200

// Shuningdek, biz ba'zi mantiqiy shartlarni ham kiritishimiz mumkin
class Multiply {
  constructor(a, b) {
    if (a > 10 || b > 10) {
      throw new Error("Juda katta son, hisoblay olmayman");
    }
    this.a = a;
    this.b = b;
  }
  mult() {
    console.log(`${this.a} * ${this.b} uchun javob: ${this.a * this.b}`);
  }
}
const cl = new Multiply(9, 9);
cl.mult();

// Klass shunchaki "shirin sintaksis" emas, garchi biz klasslarni funksiyalar yordamida qayta yozishimiz mumkin bo'lsa ham:
function multiply(a, b) {
  if (a > 10 || b > 10) {
    throw new Error("Juda katta son, hisoblay olmayman");
  }
  this.a = a;
  this.b = b;
}

multiply.prototype.mult = function () {
  console.log(this.a * this.b);
};
let smth = new multiply(2, 3);
smth.mult();

// Biroq klasslar uchun JS'da maxsus [[IsClassConstructor]]: true xususiyati mavjud, shu sababli klasslarni "new"siz chaqirib bo'lmaydi
// Klasslar har doim "use strict" (qat'iy) rejimida ishlaydi

// Class expressions (Klass ifodalari)
// Klasslar ham ifoda ko'rinishida bo'lishi mumkin:
const saveClass = class {
  constructor(a, b) {
    if (a > 10 || b > 10) {
      throw new Error("Juda katta son, hisoblay olmayman");
    }
    this.a = a;
    this.b = b;
  }
  mult() {
    console.log(`${this.a} * ${this.b} uchun javob: ${this.a * this.b}`);
  }
};
const wow = new saveClass(9, 9);
wow.mult();

// Va shuningdek NFE (nomlangan funksiya ifodasi) bo'lishi ham mumkin
// const hello = class Hello{}

// Getters va Setters (Oluvchilar va O'rnatuvchilar)
// Getters va setters asosan ma'lumotlarni nazorat qilish yoki tekshirish (validatsiya) uchun ishlatiladi
class ProtectedClass {
  constructor(name, word) {
    this._name = name;
    this.word = word;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length <= 2) {
      console.log("Ism juda qisqa");
      return;
    }
    this._name = value;
  }

  say() {
    console.log(this.word, this.name);
  }
}

const user = new ProtectedClass("samir", "salom");
user.say();
