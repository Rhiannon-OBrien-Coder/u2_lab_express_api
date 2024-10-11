//boilderplate
const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Movie } = require('./models')
const { Actor } = require('./models')
const { Review } = require('./models')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('This is root!')
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

// functions
app.get('/movies', async (req, res) => {
    const movies = await Movie.find({})
    res.json(movies)
  })

app.get('/movies/:id', async (req, res) => {
try {
    const { id } = req.params
    const movie = await Movie.findById(id)
    if (!movie) throw Error('Product not found')
    res.json(movie)
} catch (e) {
    console.log(e)
    res.send('Product not found!')
}
})

app.get('/actors', async (req, res) => {
const actors = await Actor.find({})
res.json(actors)
})

app.get('/actors/:id', async (req, res) => {
    try {
        const { id } = req.params
        const actor = await Actor.findById(id)
        if (!actor) throw Error('Product not found')
        res.json(actor)
    } catch (e) {
        console.log(e)
        res.send('Brand not found!')
    }
    })

app.get('/reviews', async (req, res) => {
    const reviews = await Review.find({})
    res.json(reviews)
    })
    
app.get('/reviews/:id', async (req, res) => {
    try {
        const { id } = req.params
        const review = await Review.findById(id)
        if (!review) throw Error('Product not found')
        res.json(review)
    } catch (e) {
        console.log(e)
        res.send('Brand not found!')
    }
    })

    app.get('/*', (req, res) => {
        res.send({
            error: "404 page not found"
        })
      })