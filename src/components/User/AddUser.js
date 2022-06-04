import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Plase enter name and age (non-epmpty values).',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Plase enter  age (age>0).',
      });

      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge('');
    setEnteredUsername('');
  };

  const usernameChangeHanlder = (e) => {
    setEnteredUsername(e.target.value);
  };
  const ageChangeHanlder = (e) => {
    setEnteredAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>username</label>
          <input
            value={enteredUsername}
            id='username'
            type='text'
            onChange={usernameChangeHanlder}
          />
          <label htmlFor='age'>age(Years)</label>
          <input
            value={enteredAge}
            id='age'
            type='number'
            onChange={ageChangeHanlder}
          />
          <Button type='submit'>Add user</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
