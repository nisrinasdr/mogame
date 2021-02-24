var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise 
let i = 1;
function execute(time, book){
 readBooksPromise(time,book).then(function(time){
    if (time !== 0  && i < books.length){
      execute(time,books[i++])
    }
  }).catch(function(err){
    console.log(err)
  })
}

execute(10000, books[0])