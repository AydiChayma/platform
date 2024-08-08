import React from 'react';
import styles from './WhoAreYou.module.css';

const OptionButton = ({ children }) => {
    return (
        <button className={styles.optionButton}>
            {children}
        </button>
    );
};

export default OptionButton;