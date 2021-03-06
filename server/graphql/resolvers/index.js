require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var ObjectID = require('mongodb').ObjectID;

const User = require('../../models/user');
const Game = require('../../models/game');

module.exports = {
  login: ({ email, password }) => {
    let newUser;
    return User.findOne({ email: email })
      .then(user => {
        if (!user) {
          throw new Error('User does not exist');
        }
        newUser = user;
        return user.password;
      })
      .then(pass => {
        return bcrypt.compare(password, pass).then(res => res);
      })
      .then(isMatch => {
        if (isMatch) {
          const token = jwt.sign({ userId: newUser.id, email: newUser.email }, process.env.JWT_SECRET_KEY, { expiresIn: '24h' });
          return { userId: newUser.id, token, tokenExpiration: 1 }
        } else {
          return null;
        }
      })
      .catch(e => { throw e })
  },
  createUser: (args) => {
    return User.findOne({ email: args.userInput.email })
      .then(user => {
        if (user) {
          throw new Error('User exists already!');
        }
        return bcrypt.hash(args.userInput.password, 12)
      })
      .then(hashedPassword => {
        const user = new User({
          firstName: args.userInput.firstName,
          lastName: args.userInput.lastName,
          email: args.userInput.email,
          password: hashedPassword
        });
        return user.save();
      })
      .then(result => {
        console.log(result);
        const token = jwt.sign({ userId: result.id, email: result.email }, process.env.JWT_SECRET_KEY, { expiresIn: '24h' });
        return { userId: result.id, token, tokenExpiration: 24 };
      })
      .catch(err => { throw err });
  },
  createGame: (args) => {
    args = JSON.parse(JSON.stringify(args));
    const newGame = async () => {
      const user = await User.findById(new ObjectID(args.gameInput.userId));
      if (!user) {
        throw new Error('User does not exist!');
      }
      const game = new Game({
        date: new Date(),
        user: user._id,
        frames: args.gameInput.frames
      });
      const saveState = await game.save();
      if (saveState) {
        user.games.push(game.id);
        user.save();
      }
      return { ...saveState._doc, _id: saveState.id };
    }
    return newGame();
  }
}