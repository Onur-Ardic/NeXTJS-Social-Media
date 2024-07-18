import mongoose from 'mongoose'

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
  },
  content: {
    type: String,
    required: [true, 'Please provide content'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema)