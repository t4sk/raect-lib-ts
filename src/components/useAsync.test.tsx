import { render } from '@testing-library/react'
import React from 'react'
import useAsync from './useAsync'

const mockAsync = jest.fn()

const props = {
  onData: jest.fn(),
  onError: jest.fn(),
}

beforeEach(() => {
  mockAsync.mockClear()
  props.onData.mockClear()
  props.onError.mockClear()
})

const TestComponent: React.FC<{ onData: Function; onError: Function }> = ({
  onData,
  onError,
}) => {
  const { call, error, pending, data } = useAsync(mockAsync)

  async function onClick() {
    const { error, data } = await call(null)

    if (error) {
      onError(error)
    } else if (data) {
      onData(data)
    }
  }

  if (pending) {
    return <>loading</>
  } else if (error) {
    return <>error</>
  } else if (data) {
    return <>data</>
  }

  return <button onClick={onClick}>click me </button>
}

test('it renders', () => {
  const { container } = render(<TestComponent {...props} />)

  expect(container).toMatchSnapshot()
})
