const { Schema } = require('mongoose')

const reviewSchema = new Schema(
  {
    stars: { type: Number, required: true, minimum: 0, maximum: 5 },
    movie: { type: Schema.Types.ObjectId, ref: 'movie_id' }
  },
  { timestamps: true }
)

module.exports = reviewSchema