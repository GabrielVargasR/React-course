import Card from "./Card";
import styles from './Popup.module.css';

const Popup = (props) => {
    return (
        <div>
            {/* This div acts as an overlay. Gives it the 'popped up' look + prevents interaction with the elements in the background */}
            <div className={styles.backdrop} onClick={props.onConfirm}/>
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.errorMessage}</p>
                </div>
                <footer className={styles.actions}>
                    <button onClick={props.onConfirm} className={styles.button}>Ok</button>
                </footer>
            </Card>
        </div>
    );
};

export default Popup;