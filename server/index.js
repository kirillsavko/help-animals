const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());

const users = [
  {
    id: 1,
    username: 'Vasya',
    age: 25,
  },
];

const root = {
  getAllUsers: () => {
    return users;
  },
  getUser: ({ id }) => {
    return users.find((user) => user.id == id);
  },
  createUser: ({ input }) => {
    const user = {
      id: Date.now(),
      ...input,
    };

    users.push(user);

    return user;
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
