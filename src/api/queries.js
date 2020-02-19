import { gql } from 'apollo-boost';

export const ADD_USER = gql`
 mutation createUser ($userInput: UserInput){
  createUser(userInput: $userInput) {
    userId
    token
    tokenExpiration
  }
}
`

export const LOGIN = gql`
query Login ($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    _id
    firstName
    lastName
    email
  }
}
`

export const CREATE_GAME = gql`
mutation CreateGame ($gameInput: GameInput) {
  createGame(gameInput: $gameInput) {
    _id
    frames {
      shots {
        pins
      }
    }
  }
} 
`