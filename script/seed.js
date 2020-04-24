'use strict'

const db = require('../server/db')
const {User, Streams} = require('../server/db/models')

const seedUser = [
  {
    id: 1,
    email: 'btrfan12@gmail.com',
    password: '123'
  },
  {
    id: 2,
    email: 'codey12@gmail.com',
    password: '123'
  },
  {
    id: 3,
    email: 'funSun123@gmail.com',
    password: '123'
  },
  {
    id: 4,
    email: 'meshTogether@gmail.com',
    password: '123'
  }
]

const seedStream = [
  {
    title: 'Cool',
    description: 'This a song. You can see how to be so cool',
    userId: 1
  },
  {
    title: 'Sun',
    description: 'This a song. You can see how to be so cool',
    userId: 2
  },
  {
    title: 'Love Bug',
    description: 'This a song. You can see how to be so cool',
    userId: 3
  },
  {
    title: 'Life is Good',
    description: 'this is about a bugs life the movie that came out in 2003',
    userId: 4
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')
  try {
    console.log('Seeding the database ...')
    await User.bulkCreate(seedUser)
    await Streams.bulkCreate(seedStream)
    db.close()
    console.log('Database was successfully seeded!!!')
  } catch (error) {
    console.error(error)
  }
  // const users = await Promise.all([
  //   User.create({email: 'cody@email.com', password: '123'}),
  //   User.create({email: 'murphy@email.com', password: '123'})
  // ])

  // const streams = await Promise.all([
  //   Streams.create({
  //     title: 'Book',
  //     description: 'this is the coolest book you will ever see',
  //     userId: 1
  //   })
  // ])

  //console.log(`seeded ${users.length} users`)
  //console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
