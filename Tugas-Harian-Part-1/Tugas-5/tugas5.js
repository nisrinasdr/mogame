// Soal 1
console.log('---soal 1---');
function halo() {
    return 'Halo Sanbers!';
}
console.log(halo());

// Soal 2
console.log('---soal 2---');
function kalikan(angka1, angka2) {
    return angka1 * angka2;
}

var num1 = 12
var num2 = 4
 
var hasilKali = kalikan(num1, num2);
console.log(hasilKali);

// Soal 3
console.log('---soal 3---');
function introduce(name, age, address, hobby) {
    return "Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + 
    address + ", dan saya punya hobby yaitu " + hobby+ "!";
}

var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";
 
var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);

// Soal 4
console.log('---soal 4---');
var arrayDaftarPeserta = {
                        nama: "Asep", 
                        jenisKelamin: "laki-laki", 
                        hobi: "baca buku",
                        tahunLahir: 1992}
console.log(arrayDaftarPeserta);

// Soal 5
console.log('---soal 5---');
var buah = [{nama: "strawberry", warna: "merah", adaBijinya: false, harga: 9000},
            {nama: "jeruk", warna: "oranye", adaBijinya: true, harga: 8000},
            {nama: "Semangka", warna: "Hijau & Merah", adaBijinya: true, harga: 10000},
            {nama: "Pisang", warna: "Kuning", adaBijinya: false, harga: 5000}]
console.log(buah[0]);

// Soal 6
console.log('---soal 6---');

var dataFilm = [];
function tambahFilm(namaFilm, durasiFilm , genreFilm, tahunFilm) {
    var film = {
        nama: namaFilm,
        durasi: durasiFilm,
        genre: genreFilm,
        tahun: tahunFilm
    }
    dataFilm.push(film);
}

tambahFilm("LOTR", "2 jam", "action", "1999");
tambahFilm("avenger", "2 jam", "action", "2019");
console.log(dataFilm);