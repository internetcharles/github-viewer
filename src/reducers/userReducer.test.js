import reducer from './userReducer';
import { setUser } from '../actions/userActions';

describe('user reducer', () => {
  it('handles the SET_USER action', () => {
    const state = {
      user: '',
      loading: true,
      error: null
    };

    const action = setUser({
      username: 'charlie',
      following: '0',
      followers: '2',
      url: 'charlie.com'
    });

    const newState = reducer(state, action);

    expect(newState).toEqual({
      user: {
        username: 'charlie',
        following: '0',
        followers: '2',
        url: 'charlie.com'
      },
      loading: true,
      error: null 
    });
  });
});
