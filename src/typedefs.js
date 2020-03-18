import { mergeTypes } from 'merge-graphql-schemas'

import wordTypeDef from './word/word.typedef'

export default mergeTypes([wordTypeDef], {
  all: true
})
