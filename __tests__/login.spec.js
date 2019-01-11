import React from 'react'
import {render, fireEvent, cleanup, wait } from 'react-testing-library';
import Login from '../src/components/containers/login';

afterEach(cleanup);

test('It should allow letters to be inputted', async () => {
  const { getByLabelText, container, rerender } = render(<Login />)
  const usernameInput = getByLabelText('username-input');
  const passwordInput = getByLabelText('password-input');

  fireEvent.change(usernameInput, {target: {value: 'jack'}}); 
  fireEvent.change(passwordInput, {target: {value: 'aass'}});

  expect(usernameInput.value).toBe('jack');
  expect(passwordInput.value).toBe('aass');
});
