// Soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

console.log(kataPertama + " " + kataKedua.charAt(0).toUpperCase() + 
kataKedua.substr(1) + " " + kataKetiga + " " + kataKeempat.toUpperCase());

// Soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

console.log(parseInt(kataPertama)+parseInt(kataKedua)+parseInt(kataKetiga)+parseInt(kataKeempat));

// Soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25, 31);

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

// Soal 4
var nilai = 99;

if(nilai >= 80) {
    console.log("A");
} else if (nilai >= 70 && nilai < 80) {
    console.log("B");
} else if (nilai >= 60 && nilai < 70) {
    console.log("C");
} else if (nilai >= 50 && nilai < 60) {
    console.log("D");
} else if (nilai < 50) {
    console.log("E");
}

// Soal 5
var tanggal = 14;
var bulan = 1;
var tahun = 1999;
var bulanString = "";

switch(bulan) {
    case 1: {
        bulanString = 'Januari';
        break;
    }
    case 2: {
        bulanString = 'Februari';
        break;
    }
    case 3: {
        bulanString = 'Maret';
        break;
    }
    case 4: {
        bulanString = 'April';
        break;
    }
    case 5: {
        bulanString = 'Mei';
        break;
    }
    case 6: {
        bulanString = 'Juni';
        break;
    }
    case 7: {
        bulanString = 'Juli';
        break;
    }
    case 8: {
        bulanString = 'Agustus';
        break;
    }
    case 9: {
        bulanString = 'September';
        break;
    }
    case 10: {
        bulanString = 'Oktober';
        break;
    }
    case 11: {
        bulanString = 'November';
        break;
    }
    case 12: {
        bulanString = 'Desember';
        break;
    }
}

console.log(tanggal + " " + bulanString + " " + tahun);