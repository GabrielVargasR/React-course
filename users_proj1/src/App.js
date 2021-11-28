import { useState } from "react";
import InputForm from "./components/UserInput/InputForm";
import UserList from "./components/Users/UserList";

const DUMMY_USERS = [
  {
    name: 'Gabriel',
    age: 22
  }, 
  {
    name: 'Esteban',
    age: 20
  }
];

function App() {
  const [users, setUsers] = useState(DUMMY_USERS);

  const userHandler = (newUser) => {
    setUsers((prevUsers) => [newUser, ...prevUsers]);
  };

  return (
    <div>
      <InputForm userHandler={userHandler}/>
      <UserList users={users}/>
    </div>
  );
}

export default App;
