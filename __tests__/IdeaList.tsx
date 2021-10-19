import IdeaList from '../src/components/IdeaList'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

const mockStore = configureStore([])

const ideas: IIdea[] = [
  {
    title: 'testTitle1',
    description: 'testDescription1',
    tags: ['test_tag_1'],
    _id: '1'
  },
  {
    title: 'testTitle2',
    description: 'testDescription2',
    tags: ['test_tag_2'],
    _id: '2'
  },
]

const MockedComponent = () => {
  return (
    <Provider store={mockStore({ ideas })}>
      <IdeaList />
    </Provider>
  )
}

describe('Header', () => {
  it('renders two titles when number of ideas is 2', () => {
    render(<MockedComponent />)

    const heading = screen.getAllByRole('heading', {
        name: /testTitle/i
    })

    expect(heading.length).toBe(2)
  })
})
