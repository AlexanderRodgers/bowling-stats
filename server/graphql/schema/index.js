const { buildSchema } = require('graphql');

module.exports = buildSchema(`

    type Throw {
      throw: Int!
      pins: [Int]!
    }

    type Frame {
      frame: Int!
      shots: [Throw]!
    }

    type Game {
      _id: ID!
      frames: [Frame]!
    }

    type AuthData {
      userId: ID!
      token: String!
      tokenExpiration: Int!
    }

    type User {
      _id: ID!
      firstName: String!
      lastName: String!
      email: String!
      password: String
      games: [Game]
    }

    type RootQuery {
      login(email: String!, password: String!): AuthData!
    }

    input UserInput {
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    }

    input FrameInput {
      frame: Int!
      shots: [ThrowInput!]!
    }

    input ThrowInput {
      throw: Int!
      pins: [Int]
    }

    input GameInput {
      userId: String!
      frames: [FrameInput!]!
    }

    type RootMutation {
      createUser(userInput: UserInput): User
      createGame(gameInput: GameInput): Game
    }

    schema {
      query: RootQuery
      mutation: RootMutation
    }
  `);