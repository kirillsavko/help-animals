const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());

const animals = [
  {
    id: 1,
    name: 'Bear',
    desc: 'Bear description',
    image: 'assets/img/animals/bear.jpg',
  },
  {
    id: 2,
    name: 'Elephant',
    desc: 'Elephant description',
    image: 'assets/img/animals/elephant.jpg',
  },
  {
    id: 3,
    name: 'Giraffe',
    desc: 'Giraffe description',
    image: 'assets/img/animals/giraffe.jpg',
  },
  {
    id: 4,
    name: 'Monkey',
    desc: 'Monkey description',
    image: 'assets/img/animals/monkey.jpg',
  },
  {
    id: 5,
    name: 'Panda',
    desc: 'Panda description',
    image: 'assets/img/animals/panda.jpg',
  },
  {
    id: 6,
    name: 'Rabbit',
    desc: 'Rabbit description',
    image: 'assets/img/animals/rabbit.jpg',
  },
];

const root = {
  getAllAnimals: () => {
    return animals;
  },
  getAnimal: ({ id }) => {
    return animals.find((animal) => animal.id == id);
  },
  createAnumal: ({ input }) => {
    const animal = {
      id: Date.now(),
      ...input,
    };

    animals.push(animal);

    return animal;
  }
};

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema,
  rootValue: root,
}));

app.listen(PORT, (err) => {
  err ? console.log(error) : console.log('server started');
})
