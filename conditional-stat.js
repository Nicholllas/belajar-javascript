let nilai = 50;

if (nilai > 70) {
    console.log("lulus")
} else if (nilai >=50) {
    console.log("Remedial")
} else {
    console.log("Kagak Lulus");
}

let nilaiUjian = 100

if (nilaiUjian >=81 && nilaiUjian <=100) {
    nilaiUjian='A'
} else if (nilaiUjian >=71 && nilaiUjian <=80) {
    nilaiUjian='B'
} else if (nilaiUjian >=51 && nilaiUjian <=70) {
    nilaiUjian='C'
} else if (nilaiUjian >=41 && nilaiUjian <=50) {
    nilaiUjian='D'
} else {
    nilaiUjian='E'
}

console.log(nilaiUjian);

const angka = 40;
//&& semua kondisi harus dipenuhi
let banding = angka >= 80 && angka <=100;
console.log(banding);

//or salah satu kondisi harus di penuhi 
let banding2 = angka >=60 || angka <=79;
console.log(banding2);

// not akan menghasilkan true jika terpenuhi
let banding3 = angka !=50;
console.log(banding3);

//perbedaan == dan ===
let x = 50;
let y = "50"

let banding4 = x == y; // akan mengghasilkan true karna == hanya mengecek value saja
let banding5 = x === y; // akan menghasilkan false karna === mengecek tidak hanya value namun sampai ke tipe datanya

//nested loop
let number = 1;
if(number > 5) {
    if(number % 2 === 0) {
        console.log("Bilangan lebih besar dari 5 dan genap")
    } else {
        console.log("Bilangan lebih besar dari 5 dan ganjil")
    }
}   else {
    if (number % 2 ===0) {
        console.log("Bilangan lebih kecil dari 5 dan genap");
    } else {
        console.log("Bilangan lebih kecil dari 5 dan ganjil")
    }
}
