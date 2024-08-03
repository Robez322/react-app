import React from 'react';

import commonStyles from '../../styles/common.module.css';
import styles from './UsersTable.module.css';

const UsersTable = ({ data, onPageChange, currentPage, totalPages }) => {
    return (
        <div className={commonStyles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.th}>Fullname</th>
                        <th className={styles.th}>Age</th>
                        <th className={styles.th}>Gender</th>
                        <th className={styles.th}>Phone</th>
                        <th className={styles.th}>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(user => (
                        <tr key={user.id} className={styles.tr}>
                            <td className={styles.td}>
                                {
                                    user.maidenName !== ''
                                        ?
                                        [user.firstName, user.maidenName, user.lastName].join(' ')
                                        :
                                        [user.firstName, user.lastName].join(' ')
                                }
                            </td>
                            <td className={styles.td}>
                                {user.age}
                            </td>
                            <td className={styles.td}>
                                {user.gender}
                            </td>
                            <td className={styles.td}>
                                {user.phone}
                            </td>
                            <td className={styles.td}>
                                {`${user.address.city}, ${user.address.address}`}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UsersTable;