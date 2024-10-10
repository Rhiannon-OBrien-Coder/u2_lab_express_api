const { Schema } = require('mongoose')

const actorSchema = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    age: { type: Number, required: true },
    statusAlive: { type: Boolean, required: true},
    movies: { type: Schema.Types.ObjectId, ref: 'movie_id' }
  },
  { timestamps: true }
)

module.exports = actorSchema