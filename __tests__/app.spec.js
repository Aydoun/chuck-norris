import React from 'react';
import axiosMock from 'axios';
import {render, fireEvent, cleanup} from 'react-testing-library';
import { requestJokesList } from '../src/api';
import App from '../src/app';

const { asFragment, container } = render(
    <App  />,
);
const url = 'http://api.icndb.com/jokes/random/10';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

test('App Snapshot matching Smoke Test ', () => {
  // Arrange
  // Assert
  expect(asFragment()).toMatchSnapshot();
  expect(container.firstChild).toMatchSnapshot()
});

test('App should Request 10 random Jokes from Api',async () => {
    // Arrange
    axiosMock.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: { results: [] }
      })
    );

    const response = await requestJokesList(10);

    expect(response.data.results).toEqual([]);
    expect(axiosMock.get).toHaveBeenCalledTimes(2);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
});
