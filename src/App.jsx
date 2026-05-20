import UserForm from './components/UserForm'
import UserList from './components/UserList'
import {useState} from 'react';

function App() {

  const [userList, setUserList] = useState([]);
  function addUser(user) {
    console.log('New user recieved in app: ', user);
    setUserList([...userList, user]);
  }

  return (
    <div className="App">
      <h1> User Management System </h1>
      <UserForm onAddUser={addUser} />
      <UserList userList={userList} />
    </div>
  );
}

export default App
