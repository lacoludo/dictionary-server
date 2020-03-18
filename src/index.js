import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose'
import 'dotenv/config'

import typeDefs from './typedefs'
import resolvers from './resolvers'

mongoose
  .connect(process.env.MONGODB, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Atlas connected'))
  .catch(err => console.error(err))

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server
  .listen({
    port: process.env.PORT || 4000
  })
  .then(({ url }) => console.log(`Apollo Server listening on ${url}`))
  .catch(err => console.error(err))
