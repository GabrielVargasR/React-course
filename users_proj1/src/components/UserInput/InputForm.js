import { useState } from 'react';
import Card from '../UI/Card';
import styles from './InputForm.module.css'

const InputForm = (props) => {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const submitHandler = (event) => {
    event.preventDefault(); // disable reset

    const user = {
      name: name,
      age: +age
    }

    props.userHandler(user);
    setName('');
    setAge('');
  };

  const nameHandler = (event) => {
    setName(event.target.value);
  }

  const ageHandler = (event) => {
    setAge(event.target.value);
  }

  return (
    <Card className={styles.container}>
      <form onSubmit={submitHandler} className={styles.input}>
        <div>
          <div>
            <label>Name</label>
            <input
              type='text'
              value={name}
              onChange={nameHandler}
            />
          </div>
          <div>
            <label>Age (Years)</label>
            <input
              type='number'
              value={age}
              onChange={ageHandler}
            />
          </div>
        </div>
        <div>
          <button type='submit' className={styles.button}>Add User</button>
        </div>
      </form>
    </Card>
  );
};

export default InputForm;
