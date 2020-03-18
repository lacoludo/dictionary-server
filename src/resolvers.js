import wordQuery from './word/word.query'
import wordMutation from './word/word.mutation'

export default {
  Query: {
    ...wordQuery
  },
  Mutation: {
    ...wordMutation
  }
}
