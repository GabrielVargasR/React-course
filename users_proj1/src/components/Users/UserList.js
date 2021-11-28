import Card from '../UI/Card';
import User from './User';
import styles from './UserList.module.css'

const UserList = (props) => {
  return (
    <Card className={styles.user_list}>
      {props.users.map((user) => <User user={user} key={user.name}/>)}
    </Card>
  );
};

export default UserList;
