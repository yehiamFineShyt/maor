// 2
const mongoose = require('mongoose');
const {secretList} = require('../config/secret.js');
main().catch(err => console.log(err));

async function main() {
  // mongoose.set('strictQuery' , false);

  await mongoose.connect(`mongodb+srv://${secretList.USERNAME}:${secretList.PASSWORD}@cluster0.eyhd9.mongodb.net/maor-jan24`);
  console.log("mongo connect started");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}