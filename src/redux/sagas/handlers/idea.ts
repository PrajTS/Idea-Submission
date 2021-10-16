import {
  addIdeaSuccess,
  getIdeasListFailure,
  getIdeasListSuccess,
  upVoteSuccess,
} from '@redux/slices/ideasSlice'
import { PayloadAction } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { NextRouter } from 'next/router'
import { call, CallEffect, put, PutEffect } from 'redux-saga/effects'
import { addIdea, getIdeasList, vote } from 'src/apis/idea'

export function* handleGetIdeas(
  action: PayloadAction<string>,
): Generator<
  CallEffect<AxiosResponse<any>> | PutEffect<PayloadAction<any>>,
  void,
  any
> {
  try {
    const response = yield call(getIdeasList)
    const { data } = response
    yield put(getIdeasListSuccess(data?.data || []))
  } catch (error) {
    yield put(getIdeasListFailure(error))
  }
}

export function* handleUpvote(
  action: PayloadAction<{ ideaId: string; isUpvote: boolean }>,
): Generator<
  CallEffect<AxiosResponse<any>> | PutEffect<PayloadAction<any>>,
  void,
  any
> {
  try {
    const { ideaId, isUpvote } = action.payload
    yield call(() => vote(ideaId, isUpvote))
    yield put(upVoteSuccess(ideaId))
  } catch (error) {}
}

export function* handleAddIdea(
  action: PayloadAction<{ idea: IIdea; router: NextRouter }>,
): Generator<
  CallEffect<AxiosResponse<any>> | PutEffect<PayloadAction<any>>,
  void,
  any
> {
  try {
    const { idea, router } = action.payload
    const { data } = yield call(() => addIdea(idea))
    yield put(addIdeaSuccess(data.data))
    router.push(`/ideas/${data?.data?._id}`)
  } catch (error) {}
}
