const mongoose = require('mongoose');





mongoose.connect('mongodb+srv://rasool78604:PCz3nqoeijYZHfZB@cluster0.drv0trh.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;