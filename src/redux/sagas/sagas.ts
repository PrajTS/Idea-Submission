import { addIdea, getIdeasList, upVote } from '@redux/slices/ideasSlice'
import { takeLatest } from 'redux-saga/effects'
import { handleAddIdea, handleGetIdeas, handleUpvote } from './handlers/idea'

export function* watcherSaga() {
  yield takeLatest(getIdeasList.type, handleGetIdeas)
  yield takeLatest(upVote.type, handleUpvote)
  yield takeLatest(addIdea, handleAddIdea)
}
