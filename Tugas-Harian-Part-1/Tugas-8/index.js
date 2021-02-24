var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

readBooks(10000, books[0], function(lamanya) {
    readBooks(lamanya, books[1], function(lamanya) {
        readBooks(lamanya, books[2], function(lamanya) {
            readBooks(lamanya, books[3], function(lamanya) {
                return lamanya;
            })
        })
    })
})




