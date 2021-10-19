import { grey, pink } from '@mui/material/colors'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import IdeaCard from '../src/components/IdeaCard'

const mockStore = configureStore([])

const MockedComponent = (props: any) => {
  return (
    <Provider store={mockStore()}>
      <IdeaCard {...props} />
    </Provider>
  )
}

describe('IdeaCard', () => {
  it('renders a heading', () => {
    render(
      <MockedComponent
        title="Title"
        desciption="Description"
        tags={['tag_1, tag_2']}
        votes={10}
        hasVoted={true}
        createdAt={new Date()}
      />,
    )

    const heading = screen.getByText(/Title/i)
    expect(heading).toBeInTheDocument()
  })
})

describe('IdeaCard', () => {
  it('renders grey upvote button when not selected', () => {
    render(
      <MockedComponent
        title="Title"
        desciption="Description"
        tags={['tag_1, tag_2']}
        votes={10}
        hasVoted={false}
        createdAt={new Date()}
      />,
    )

    const heading = screen.getByText(/Title/i)
    const upVoteBtn = screen.getByTestId('FavoriteIcon')
    expect(upVoteBtn).toHaveStyle(`color: ${grey[400]}`)

    expect(heading).toBeInTheDocument()
  })
})

describe('IdeaCard', () => {
  it('renders ping upvote button when selected', () => {
    render(
      <MockedComponent
        title="Title"
        desciption="Description"
        tags={['tag_1, tag_2']}
        votes={10}
        hasVoted={true}
        createdAt={new Date()}
      />,
    )

    const heading = screen.getByText(/Title/i)
    const upVoteBtn = screen.getByTestId('FavoriteIcon')
    expect(upVoteBtn).toHaveStyle(`color: ${pink[500]}`)

    expect(heading).toBeInTheDocument()
  })
})
