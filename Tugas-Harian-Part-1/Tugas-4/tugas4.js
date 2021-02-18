// Soal 1
var asc= 0;
var desc = 20;

console.log('LOOPING PERTAMA');
while(asc<20) {
    asc+=2;
    console.log(asc + ' - I love coding');
}

console.log('LOOPING KEDUA');
while(desc>0) {
    console.log(desc + ' - I will become a frontend developer');
    desc-=2;
}

// Soal 2

var status = "";

for(i=1; i<=20; i++) {;
    if(i%2===0) {
        status = 'Berkualitas';
    } else if(i%3===0 && i%2!==0){
        status = 'I Love Coding';
    } else if(i%2!==0) {
      status = 'Santai';
    }
    console.log(i + ' - ' + status);
}

// Soal 3
var hash = "";
for(j = 0; j < 7; j++){
    for(k = 0; k < 7; k++){
        if(j > k ||j === k){
            hash+='#';  
        }
    }
    console.log(hash);
    hash="";
}

// Soal 4
var kalimat = "saya sangat senang belajar javascript";
console.log(kalimat.split(" "));

// Soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
console.log((daftarBuah.sort()).join('\n'));


