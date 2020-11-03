import { SET_USER, SET_LOADING } from '../actions/userActions';

const initialState = {
  user: '',
  loading: true,
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default: 
      return state;
  }
}
