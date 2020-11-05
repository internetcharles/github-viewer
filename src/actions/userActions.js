const { getInfo } = require('../services/github-api');

export const SET_USER = 'SET_USER';
export const setUser = user => ({
  type: SET_USER,
  payload: user
});

export const SET_SEARCH = 'SET_SEARCH';
export const setSearch = search => ({
  type: SET_SEARCH,
  payload: search
});

export const SET_LOADING = 'SET_LOADING';
export const setLoading = loading => ({
  type: SET_LOADING,
  payload: loading
});

export const fetchUser = (user) => dispatch => {
  getInfo(user)
    .then(profile => {
      dispatch(setUser(profile));
    })
    .finally(() => dispatch(setLoading(false)));
};
