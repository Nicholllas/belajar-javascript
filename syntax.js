//cara membuat variable
// var a = 'a'; // Dont use this anymore artefak
let b = 'b';
const c = "c";

//variable bisa menampung tipe data string, integer, boolean, array dan object

let nama = "nicholas"
let umur = 22;
let apakahBenar = true;
let apakahSalah = false;
let uang = 5000.5;
let array = ['Pisang','Melon','Mangga','Jambu']

//operator aritmatika
let angka1 = 10;
let angka2 = 20;

console.log(angka1 + angka2);
console.log(angka1 - angka2);
console.log(angka1 * angka2);
console.log(angka1 / angka2);
console.log(angka1 % angka2);


//assignment variable
let penampungHasilOperatorAritmatika = angka1 + angka2;
console.log(penampungHasilOperatorAritmatika);

//string bisa ditambah namun tidak bisa di kurangi
let firstname = "Nicholas"
let lastname = "Christhofer"
let fullname = firstname + " "+ lastname;
console.log(fullname);

//alur pembacaan code
// untuk baca code harus baca dari kiri ke kanan dan atas kebawah

let number = 20;
console.log(number + 10) // hasil menjadi 30
number = 10;
console.log(number + 10); // hasil menjadi 20 karna number sudah di replace
number = false;
console.log(number + 10) // hasil menjadi 10 karena variabel di timpa dengan false karena true = 1 dan false = 0
number = true;
console.log(number + 10); // hasil menjadi 11 karena variabel di timpa dengan true yang bernilai 1

// contoh error
// const hewan = "jerapah";
// console.log(hewan);
// hewan = "buaya";


