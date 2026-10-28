const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://walidblila8_db_user:s1rhmdbigLRXNMBv@cluster0.almheiv.mongodb.net/weatherapp';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
