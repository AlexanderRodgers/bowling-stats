const mongooose = require('mongoose');

const Schema = mongooose.Schema;

const frameSchema = new Schema({
  frame: {
    type: Number,
    required: true
  },
  shots: [
    {
      shot: {
        type: Number,
        required: true
      },
      pins: {
        type: [Number],
        required: true
      }
    }
  ],
  game: {
    type: Schema.Types.ObjectId,
    ref: 'Game'
  }
});

module.exports = mongooose.model('Frame', frameSchema);