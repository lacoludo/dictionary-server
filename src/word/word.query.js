import Word from './word.model'

export default {
  words: async (parent, args, context, info) => {
    try {
      const result = await Word.find().sort({ createdAt: -1 })
      return result
    } catch (err) {
      throw new Error(err)
    }
  },

  word: async (parent, args, context, info) => {
    try {
      const result = await Word.findById(args.wordId)
      if (result) {
        return result
      } else {
        throw new Error('Word not found')
      }
    } catch (err) {
      throw new Error(err)
    }
  }
}
