const mongoose = require('mongoose');

main().then(() => console.log("DB connected successfully...!!!"))
     .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://salmanali:salman303@cluster0.7b7f2ni.mongodb.net/chatbes_server');
}
