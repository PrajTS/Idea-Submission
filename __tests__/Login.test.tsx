import Login from '../src/components/Login'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { fireEvent } from '@testing-library/dom'

const mockStore = configureStore([])

const MockedComponent = () => {
  return (
    <Provider store={mockStore()}>
      <Login />
    </Provider>
  )
}

describe('Login', () => {
  it('renders a heading', () => {
    render(<MockedComponent />)

    const heading = screen.getByRole('heading', {
      name: /Enter Employee ID/i,
    })

    expect(heading).toBeInTheDocument()
  })

  it('input changes on typing into it', async () => {
    render(<MockedComponent />)

    const inputElem = screen.getByRole('textbox') as HTMLInputElement
    fireEvent.change(inputElem, { target: { value: 'emp-2000' } })
    expect(inputElem.value).toBe('emp-2000')
  })
})
