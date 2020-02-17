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
      frame: {
        type: Number,
        required: true
      },
      shots: [
        {
          bowl: {
            type: Number,
            required: true
          },
          pins: {
            type: [Number],
            required: true
          }
        }
      ],
    }
  ]
});

module.exports = mongooose.model('Game', gameSchema);