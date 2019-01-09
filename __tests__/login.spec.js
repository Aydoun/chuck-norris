import React from 'react'
import {render, fireEvent, cleanup} from 'react-testing-library';
import Login from '../src/components/containers/login';

// class CostInput extends React.Component {
//   state = {
//     value: '',
//   }

//   removeDollarSign = value => (value[0] === '$' ? value.slice(1) : value)
//   getReturnValue = value => (value === '' ? '' : `$${value}`)
//   handleChange = ev => {
//     ev.preventDefault()
//     const inputtedValue = ev.currentTarget.value
//     const noDollarSign = this.removeDollarSign(inputtedValue)
//     if (isNaN(noDollarSign)) return
//     this.setState({value: this.getReturnValue(noDollarSign)})
//   }

//   render() {
//     return (
//       <input
//         value={this.state.value}
//         aria-label="cost-input"
//         onChange={this.handleChange}
//       />
//     )
//   }
// }

// const setup = () => {
//   const utils = render(<CostInput />)
//   const input = utils.getByLabelText('cost-input')
//   return {
//     input,
//     ...utils,
//   }
// }

afterEach(cleanup);

test('It should not allow letters to be inputted', () => {
  const { getByLabelText } = render(<Login />)
  const usernameInput = getByLabelText('username-input');
  const passwordInput = getByLabelText('password-input');

  fireEvent.change(usernameInput, {target: {value: 'jack'}});
  fireEvent.change(passwordInput, {target: {value: 'aass'}});

  console.log(container.state, 'state');

  expect(usernameInput.value).toBe('jack');
  expect(passwordInput.value).toBe('aass');
})
