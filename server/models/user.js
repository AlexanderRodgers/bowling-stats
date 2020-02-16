const mongooose = require('mongoose');

const Schema = mongooose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  games: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Game'
    }
  ]
});

module.exports = mongooose.model('User', userSchema);