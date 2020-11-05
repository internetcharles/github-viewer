import reducer from './userReducer';
import { setUser } from '../actions/userActions';

describe('user reducer', () => {
  it('handles the SET_USER action', () => {
    const state = {
      user: '',
      loading: true,
      error: null,
      repos: [],
      search: ''
    };

    const action = setUser({
      username: 'charlie',
      following: '0',
      followers: '2',
      url: 'charlie.com'
    },
    { repos: undefined,
      search: '', });

    const newState = reducer(state, action);

    expect(newState).toEqual({
      user: {
        username: 'charlie',
        following: '0',
        followers: '2',
        url: 'charlie.com',
      },
      error: null,
      loading: true,
      repos: undefined,
      search: '',
      // eslint-disable-next-line no-dupe-keys
      user: undefined });
  });
});
