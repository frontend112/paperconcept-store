import mongoose from 'mongoose'

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!)
    const connection = mongoose.connection
    connection.on('connected', () => {
      console.log('mongodb connected succesfully');
    })
    connection.on('error', (error) => {
      console.log(error, 'problem with connection to mongodb');
      process.exit();
    })
  } catch (error) {
    console.log(error)
  }
}