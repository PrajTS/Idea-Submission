import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NextRouter } from 'next/router'
import { sortIdeas } from '../../services/ideas'
import type { RootState } from '../store'

// Define a type for the slice state
export type IdeasState = IIdea[] | []

// Define the initial state using that type
const initialState: IdeasState = []

export const getIdeasList = createAction('getIdeasList')
export const addIdea =
  createAction<{ idea: IIdea; router: NextRouter }>('createIdea')
export const upVote =
  createAction<{ ideaId: string; isUpvote: boolean }>('upVote')

export const ideasSlice = createSlice({
  name: 'ideas',
  initialState,
  reducers: {
    getIdeasListSuccess: (state, action: PayloadAction<IdeasState>) => {
      const ideas = action.payload
      const dateSortedIdeas = sortIdeas(ideas)
      return dateSortedIdeas
    },
    getIdeasListFailure: (state, action: PayloadAction<any>) => {
      return []
    },
    addIdeaSuccess: (state, action: PayloadAction<IIdea>) => {
      const idea = action.payload
      const ideas = [idea, ...JSON.parse(JSON.stringify(state))]
      return sortIdeas(ideas)
    },
    upVoteSuccess: (state, action: PayloadAction<string>) => {
      const ideaId = action.payload
      return state.map((idea) => {
        if (idea._id === ideaId) {
          return {
            ...idea,
            hasVoted: !idea.hasVoted,
            votes: !idea.hasVoted
              ? (idea.votes as number) + 1
              : (idea?.votes as number) - 1,
          }
        }
        return idea
      })
    },
    sort: (
      state,
      action: PayloadAction<{ sortField: string; isIncreasingOrder: boolean }>,
    ) => {
      const { sortField, isIncreasingOrder } = action.payload
      const sortedIdeas = sortIdeas(state, sortField, isIncreasingOrder)
      return sortedIdeas
    },
  },
})

export const {
  getIdeasListSuccess,
  getIdeasListFailure,
  addIdeaSuccess,
  upVoteSuccess,
  sort,
} = ideasSlice.actions

export const ideas = (state: RootState) => state.ideas

export default ideasSlice.reducer
