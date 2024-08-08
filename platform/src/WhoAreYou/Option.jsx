import React from 'react';
import styles from './WhoAreYou.module.css';
import OptionButton from './OptionButton';

const Option = ({ imageSrc, buttonText }) => {
    return (
        <>
            <div className={styles.optionContent}>
                <img loading="lazy" src={imageSrc} alt={`${buttonText} option`} className={styles.optionImage} />
                <OptionButton>{buttonText}</OptionButton>
            </div>
        </>

    );
};

export default Option;