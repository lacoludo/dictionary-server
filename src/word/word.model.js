import { model, Schema } from 'mongoose'

export default model(
  'Word',
  new Schema({
    name: String
  })
)
