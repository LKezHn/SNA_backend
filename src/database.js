const mongoose = require('mongoose');

const password = process.env.PASSWORD

const connection = mongoose.connect(`mongodb+srv://lkezhn:${password}@cluster0.zkome.mongodb.net/simplenotesapp?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(res => console.log('Connected to DB'));

module.exports = connection;

