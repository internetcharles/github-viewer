import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Home from './Home';
import { Provider } from 'react-redux';
import store from '../store';

describe('home component', () => {
  afterEach(() => cleanup());
  it('renders Home', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot;
  });
});
