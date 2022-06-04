import React from 'react';

import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users &&
          props.users.map((e) => {
            return (
              <li key={e.id}>
                {e.name} ({e.age} years old)
              </li>
            );
          })}
      </ul>
    </Card>
  );
};

export default UserList;
