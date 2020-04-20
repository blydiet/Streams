const {User, Streams} = require('./db/models')
const db = require('./db')

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
  }
]

async function seed() {
  try {
    console.log('Seeding the database ...')
    await db.sync({force: true})
    await User.bulkCreate(seedUser)
    await Streams.bulkCreate(seedStream)
    db.close()
    console.log('Database was successfully seeded!!!')
  } catch (error) {
    console.error(error)
  }
}
seed()
