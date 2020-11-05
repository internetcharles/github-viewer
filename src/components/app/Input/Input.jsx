import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, setUser } from '../../../actions/userActions';

const Input = () => {
  const dispatch = useDispatch();
  const username = useSelector(state => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchUser(username));
  };

  const handleChange = ({ target }) => {
    dispatch(setUser(target.value));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="GitHub Username" onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
};

export default Input;
