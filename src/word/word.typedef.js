import { gql } from 'apollo-server'

export default gql`
  type Word {
    _id: ID
    name: String
  }

  type Query {
    words: [Word]
    word(wordId: ID!): Word
    searchWord(word: String!): [Word]
  }

  type Mutation {
    createWord(name: String!): Word
    updateWord(wordId: ID!, name: String!): Word
    deleteWord(wordId: ID!): Word
  }
`
