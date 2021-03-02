const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const mongoose = require('mongoose');
const Animals = require('./models/animal');
const schema = require('./schema/schema');

const app = express();
const PORT = 4000;

app.use(cors());

const root = {
  getAllAnimals: () => {
    return Animals.find({});
  },
  getAnimal: ({ id }) => {
    return Animals.findById(id);
  },
  createAnimal: ({ input }) => {
    return Animals.create(input);
  }
};

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema,
  rootValue: root,
}));

const dbConnection = mongoose.connection;
dbConnection.on('error', (err) => console.log(`Connection error: ${err}`));

app.listen(PORT, (err) => {
  err ? console.log(error) : console.log('server started');
})
