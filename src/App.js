import { useEffect, useState } from 'react';
import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';

const getLocalItems = () => {
  let list = JSON.parse(localStorage.getItem('usersList'));
  console.log(list);
  if (list) {
    return list;
  } else {
    return [];
  }
};
function App() {
  const [usersList, setUserList] = useState(getLocalItems());

  useEffect(() => {
    localStorage.setItem('usersList', JSON.stringify(usersList));
  }, [usersList]);

  const addUserHanlder = (userName, userAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHanlder} />
      {usersList.length > 0 && <UserList users={usersList} />}
    </div>
  );
}

export default App;
