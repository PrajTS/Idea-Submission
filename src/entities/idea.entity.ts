import mongoose from 'mongoose'

export type Document = mongoose.Document & IIdea

const Schema = new mongoose.Schema(
  {
    title: String,
    description: String,
    tags: [String],
    votes: {
      default: 0,
      type: Number,
    },
  },
  {
    timestamps: true,
  },
)

const Idea = mongoose.models.Idea || mongoose.model<Document>('Idea', Schema)

export default Idea
