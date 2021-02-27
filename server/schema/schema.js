const { buildSchema } = require('graphql');

const schema = buildSchema(`

  type Animal {
    id: ID
    name: String
    desc: String
    image: String
  }

  input AnimalInput {
    id: ID!
    name: String!
    desc: String!
    image: String!
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
