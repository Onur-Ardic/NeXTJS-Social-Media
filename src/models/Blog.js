import mongoose from 'mongoose'

const BlogSchema = new mongoose.Schema({
  user: {
    type: String,
    required: false,
  },

  title: {
    type: String,
    required: [true, 'Please provide a title'],
  },

  content: {
    type: String,
    required: [true, 'Please provide content'],
  },

  image: {
    type: String,
    required: false,
  },

  date: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.blogs || mongoose.model('blogs', BlogSchema)
