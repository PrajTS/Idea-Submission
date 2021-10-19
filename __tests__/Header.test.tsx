import Header from '../src/components/Header'
import { fireEvent } from '@testing-library/dom'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

const mockStore = configureStore([])

const MockedComponent = () => {
  return (
    <Provider store={mockStore({ user: 'test_user' })}>
      <Header />
    </Provider>
  )
}

describe('Header', () => {
  it('renders a heading', () => {
    render(<MockedComponent />)

    const heading = screen.getByText(/Ideas Portal/i)

    expect(heading).toBeInTheDocument()
  })
})

describe('Header', () => {
  it('renders Logout button as user is logged in', () => {
    render(<MockedComponent />)

    const logoutBtn = screen.getByText(/Logout/i)

    expect(logoutBtn).toBeInTheDocument()
  })
})

describe('Header', () => {

    const MockedComponent = () => {
        return (
          <Provider store={mockStore({ user: '' })}>
            <Header />
          </Provider>
        )
      }

    it('does not render Logout button as user is not logged in', () => {
      render(<MockedComponent />)
  
      const logoutBtn = screen.queryByText(/Logout/i)
  
      expect(logoutBtn).not.toBeInTheDocument()
    })
  })
