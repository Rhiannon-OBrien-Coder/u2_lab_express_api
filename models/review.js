const { Schema } = require('mongoose')

const reviewSchema = new Schema(
  {
    stars: { type: Number, required: true },
    movie: { type: Schema.Types.ObjectId, ref: 'movie_id' }
  },
  { timestamps: true }
)

module.exports = reviewSchema