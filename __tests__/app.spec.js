import React from 'react';
import axiosMock from 'axios';
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library';
import { requestJokesList } from '../src/api';
import App from '../src/app';
import Header from '../src/components/containers/header';
import Joke from '../src/components/presentations/joke';

beforeAll(() => {
  axiosMock.get.mockImplementation(() =>
    Promise.resolve({
      data: { results: [] }
    })
  );
});
// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

test('App Snapshot matching Smoke Test ', () => {
  // Arrange
  const { asFragment, container } = render(
    <App  />,
  );
  // Assert
  expect(asFragment()).toMatchSnapshot();
  expect(container.firstChild).toMatchSnapshot()
});

test('App should Request 10 random Jokes from Api',async () => {
    // Arrange
    const url = 'http://api.icndb.com/jokes/random/10';
    const response = await requestJokesList(10);

    expect(response.data.results).toEqual([]);
    expect(axiosMock.get).toHaveBeenCalledTimes(2);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
});

test('Time Button Should Toggle it\'s text',async () => {
  // Arrange
  const onAction = jest.fn(() => {});
  
  const { getByTestId } = render(
    <Header  onAction={onAction}/>,
  );
  
  const testID = getByTestId('timer-text');

  expect(testID.textContent).toEqual('Start Timer');
  fireEvent.click(testID);

  expect(onAction).toHaveBeenCalledTimes(1);
  expect(testID.textContent).toEqual('Stop Timer');
});

test('Joke Component Should render the correct text',() => {
  // Arrange
  const onAction = jest.fn(() => {});
  const jokeText = 'chuck nurris counted until infity twice';
  
  const { getByTestId } = render(
    <Joke text={jokeText} type="main" onAction={onAction}/>,
  );
  
  const jokeTestId = getByTestId('joke-text');
  const buttonTestId = getByTestId('joke-action');

  expect(jokeTestId.textContent).toEqual(jokeText);
  expect(buttonTestId.textContent).toEqual('Favorite');
  fireEvent.click(buttonTestId);

  expect(onAction).toHaveBeenCalledTimes(1)
});
