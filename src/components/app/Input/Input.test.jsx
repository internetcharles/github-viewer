import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Input from './Input';
import { Provider } from 'react-redux';
import store from '../../../store';

describe('Input component', () => {
  afterEach(() => cleanup());
  it('renders Input', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Input />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
