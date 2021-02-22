// Soal 1
console.log('---soal 1---');

// Luas lingkaran

const luasLingkaran = (r) => {
    console.log(Math.PI * r * r)
};

const kelilingLingkaran = (r) => {
    console.log(2 * Math.PI * r)
};

luasLingkaran(10);
kelilingLingkaran(10);

// Soal 2
console.log('---soal 2---');

let kalimat = "";
const buatKalimat = (str) => {
    return kalimat += ` ${str}`;
}

buatKalimat('saya');
buatKalimat('adalah');
buatKalimat('seorang');
buatKalimat('frontend');
buatKalimat('developer');

console.log(kalimat);


// Soal 3
console.log('---soal 3---');
const newFunction = (firstName, lastName) => {
    return {
      firstName,
      lastName,
      fullName(){
        console.log(`${firstName} ${lastName}`)
      }
    }
}
   
  //Driver Code 
  newFunction("William", "Imoh").fullName()

// Soal 4
console.log('---soal 4---');
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const {firstName, lastName, destination, occupation, spell} = newObject;

// Driver code
console.log(firstName, lastName, destination, occupation, spell);

// Soal 5
console.log('---soal 5---');
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east];
//Driver Code
console.log(combined)