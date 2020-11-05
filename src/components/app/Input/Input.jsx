import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, setSearch } from '../../../actions/userActions';

const Input = () => {
  const dispatch = useDispatch();
  const username = useSelector(state => state.search);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchUser(username));
  };

  const handleChange = ({ target }) => {
    dispatch(setSearch(target.value));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="GitHub Username" onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
};

export default Input;
