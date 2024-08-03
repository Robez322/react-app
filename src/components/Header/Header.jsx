import React from 'react';

import commonStyles from '../../styles/common.module.css';
import styles from './Header.module.css';

const Header = ({ title }) => {
    return (
        <header className={styles.wrapper}>
            <div className={commonStyles.container}>
                <h1 className={styles.title}>{title}</h1>
            </div>
        </header>
    );
}

export default Header;
