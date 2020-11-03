import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../actions/userActions';

const Input = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUser(username));
  };

  const handleChange = ({ target }) => {
    setUsername(target.value);
    console.log(target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="GitHub Username" onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default Input;
