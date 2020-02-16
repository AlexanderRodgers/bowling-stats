const mongooose = require('mongoose');

const Schema = mongooose.Schema;

const gameSchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  frames: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Frame'
    }
  ]
});

module.exports = mongooose.model('Game', gameSchema);