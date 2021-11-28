import { useState } from "react";
import Card from "../UI/Card";
import Popup from '../UI/Popup'
import styles from "./InputForm.module.css";

const InputForm = (props) => {
  const [error, setError] = useState();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const submitHandler = (event) => {
    event.preventDefault(); // disable reset

    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({title: 'Missing values', message: 'Please enter a name and an age'});
      return;
    }

    if (name.match(/^\D+$/g) === null) {
      setError({title: 'Invalid name', message: 'Please enter a name using valid characters'});
      return;
    }

    if (+age < 1) {
      setError({title: 'Invalid age', message: 'Please enter a valid age'});
      return;
    }

    const user = {
      name: name,
      age: +age,
    };

    props.userHandler(user);
    setName("");
    setAge("");
  };

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && <Popup title={error.title} errorMessage={error.message} onConfirm={errorHandler}></Popup>}
      <Card className={styles.container}>
        <form onSubmit={submitHandler} className={styles.input}>
          <div>
            <div>
              <label>Name</label>
              <input type="text" value={name} onChange={nameHandler} />
            </div>
            <div>
              <label>Age (Years)</label>
              <input type="number" value={age} onChange={ageHandler} />
            </div>
          </div>
          <div>
            <button type="submit" className={styles.button}>
              Add User
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default InputForm;
