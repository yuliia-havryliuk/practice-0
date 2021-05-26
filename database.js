const mongoose = require('mongoose');

const MONGOURI = 'mongodb+srv://jinny36:test1234@cluster0.vlaft.mongodb.net/Cluster0?retryWrites=true&w=majority\n';

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
    });
    console.log('Connected to DB !!');
  } catch (e) {
    console.log(e);
    throw e;
  }
};
module.exports = InitiateMongoServer;

