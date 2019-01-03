// __tests__/fetch.js
import React from 'react'
import App from '../src/app';
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library'

// this adds custom jest matchers from jest-dom
import 'jest-dom/extend-expect'
const {getByText, getByTestId, container, asFragment} = render(
    <App  />,
);

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

test('App Snapshot matching Smoke Test ', () => {
  // Arrange
  expect(asFragment()).toMatchSnapshot()

  // Assert
//   expect(axiosMock.get).toHaveBeenCalledTimes(1)
//   expect(axiosMock.get).toHaveBeenCalledWith(url)
//   expect(getByTestId('greeting-text')).toHaveTextContent('hello there')
//   expect(getByTestId('ok-button')).toHaveAttribute('disabled')
//   // snapshots work great with regular DOM nodes!
//   expect(container.firstChild).toMatchSnapshot()
//   // you can also use get a `DocumentFragment`, which is useful if you want to compare nodes across render
//   expect(asFragment()).toMatchSnapshot()
});
