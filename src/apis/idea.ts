import axios from 'axios'

export function getIdeasList() {
  return axios.request({
    method: 'get',
    url: `/api/ideas`,
  })
}

export function getIdea(ideaId: string) {
  return axios.request({
    method: 'get',
    url: `/api/ideas/${ideaId}`,
  })
}

export function addIdea(idea: IIdea) {
  return axios.request({
    method: 'post',
    url: `/api/ideas`,
    data: idea,
  })
}

export function vote(ideaId: string, isUpVote: boolean) {
  return axios.request({
    method: 'patch',
    url: `/api/ideas/${ideaId}/vote?isUpvote=${isUpVote}`,
  })
}
