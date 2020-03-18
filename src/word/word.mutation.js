import Word from './word.model'

export default {
  createWord: async (parent, args, context, info) => {
    try {
      const word = await new Word(args).save()
      return word
    } catch (err) {
      throw new Error(err)
    }
  },

  updateWord: async (parent, args, context, info) => {
    try {
      const word = await Word.findOneAndUpdate(
        {
          _id: args.wordId
        },
        {
          name: args.name,
          updatedDate: new Date()
        },
        {
          new: true
        }
      )
      return word
    } catch (err) {
      throw new Error(err)
    }
  },

  deleteWord: async (parent, args, context, info) => {
    try {
      const word = await Word.findOneAndDelete({
        _id: args.wordId
      }).exec()
      return word
    } catch (err) {
      throw new Error(err)
    }
  }
}
