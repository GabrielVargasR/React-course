import styles from './User.module.css'

const User = (props) => {
    return (
        <ul className={styles.user}>
            <h5> {`${props.user.name} (${props.user.age} years old)`} </h5>
        </ul>
    );
};

export default User;