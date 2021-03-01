const { buildSchema } = require('graphql');

const schema = buildSchema(`

  type Animal {
    id: ID
    name: String
    desc: String
    img: String
  }

  input AnimalInput {
    name: String!
    desc: String!
    img: String
  }

  type Query {
    getAllAnimals: [Animal]
    getAnimal(id: ID): Animal
  }

  type Mutation {
    createAnimal(input: AnimalInput): Animal
  }

`);

module.exports = schema;
