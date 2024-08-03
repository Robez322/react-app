import React from 'react';

import { getPagesArray } from '../../utils/pagination';

import commonStyles from '../../styles/common.module.css';
import styles from './Pagination.module.css';

const Pagination = ({ totalPages, page, changePage }) => {
    let pagesArray = getPagesArray(totalPages);
    return (
        <div className={commonStyles.container}>
            <div className={styles.wrapperPage}>
                {pagesArray.map(p =>
                    <span
                        onClick={() => changePage(p)}
                        key={p}
                        className={page === p ? `${styles.page} ${styles.currentPage}` : styles.page}
                    >
                        {p}
                    </span>
                )}
            </div>
        </div>
    );
}

export default Pagination;
