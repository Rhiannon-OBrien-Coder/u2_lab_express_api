const db = require('../db')
const { Movie, Review } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const movie1 = await new Movie({
    title: 'Shrek',
    runtime: 90,
    rating: 'PG',
    yearReleased: 2001,
    description: "Once upon a time, in a far away swamp, there lived an ogre named Shrek (Mike Myers) whose precious solitude is suddenly shattered by an invasion of annoying fairy tale characters. They were all banished from their kingdom by the evil Lord Farquaad (John Lithgow). Determined to save their home -- not to mention his -- Shrek cuts a deal with Farquaad and sets out to rescue Princess Fiona (Cameron Diaz) to be Farquaad's bride. Rescuing the Princess may be small compared to her deep, dark secret.",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQg_Lj-AwA3TKS-FSwZ8c8V0zDIA4cnGrMGz0tGfAzakmcYhWr6ndm6EXpSrYYXCprXW9d6"
  })
  movie1.save()

  const movie2 = await new Movie({
    title: 'The Little Mermaid',
    runtime: 83,
    rating: 'PG',
    yearReleased: 1989,
    description: "In Disney's beguiling animated romp, rebellious 16-year-old mermaid Ariel (Ron Clements) is fascinated with life on land. On one of her visits to the surface, which are forbidden by her controlling father, King Triton, she falls for a human prince.",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT47lZDisscep5HPvnVxi684cl0oYqB6fyM2xFLNtNpUjxGltcpHDhag2oCEnoH4qNOQcZ2iQ"
  })
  movie2.save()

  const movie3 = await new Movie({
    title: "Encanto",
    runtime: 102,
    rating: 'PG',
    yearReleased: 2021,
    description: "The Madrigals are an extraordinary family who live hidden in the mountains of Colombia in a charmed place called the Encanto. The magic of the Encanto has blessed every child in the family with a unique gift -- every child except Mirabel. However, she soon may be the Madrigals last hope when she discovers that the magic surrounding the Encanto is now in danger.",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSwD590LpN9qMX0BfH1BZC7dtvkszzrQORwtKBPgNSVTfk1b2tHp9duudQjMsGti8Sd49Vr"
  })
  movie3.save()

  const movie4 = await new Movie({
    title: "Zootopia",
    runtime: 108,
    rating: 'PG',
    yearReleased: 2016,
    description: "From the largest elephant to the smallest shrew, the city of Zootopia is a mammal metropolis where various animals live and thrive. When Judy Hopps (Ginnifer Goodwin) becomes the first rabbit to join the police force, she quickly learns how tough it is to enforce the law. Determined to prove herself, Judy jumps at the opportunity to solve a mysterious case. Unfortunately, that means working with Nick Wilde (Jason Bateman), a wily fox who makes her job even harder.",
    image: "https://m.media-amazon.com/images/M/MV5BOTMyMjEyNzIzMV5BMl5BanBnXkFtZTgwNzIyNjU0NzE@._V1_.jpg"
  })
  movie4.save()

  const movie5 = await new Movie({
    title: "Atlantis: The Lost Empire",
    runtime: 96,
    rating: 'PG',
    yearReleased: 2001,
    description: "An inexperienced young adventurer becomes the key to unraveling an ancient mystery when he joins up with a group of daredevil explorers to find the legendary lost empire of Atlantis. A naive-but-determined museum cartographer Milo Thatch (Michael J. Fox), dreams of completing the quest begun by his late grandfather, a famous explorer. When a journal surfaces, an eccentric billionaire funds an expedition and the action shifts to high gear.",
    image: "https://lumiere-a.akamaihd.net/v1/images/p_atlantis_19870_4a082829.jpeg?region=0%2C0%2C540%2C810"
  })
  movie5.save()

  const reviews = [
    {
        stars: 4,
        movie: movie1._id
    },
    {
        stars: 5,
        movie: movie2._id
    },
    {
        stars: 5,
        movie: movie3._id
    },
    {
        stars: 4,
        movie: movie4._id
    },
    {
        stars: 3,
        movie: movie5._id
    },
  ]
  await Review.insertMany(reviews)
  console.log('Created movies with actors!')
}

const run = async () => {
  await main()
  db.close()
}

run()