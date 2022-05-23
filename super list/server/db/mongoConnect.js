const mongoose = require('mongoose');

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://MichaelGabay:12345@cluster0.p5nuc.mongodb.net/missions');
  console.log("mongo connect")
}