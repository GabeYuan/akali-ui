import Test from './Test'
import { render } from '@testing-library/vue'
import { test } from 'vitest'

test('it should work', () => {
  const { getByText } = render(Test, {
    props: {
      msg: 'hello'
    }
  })

  // assert output
  getByText('hello')
})
