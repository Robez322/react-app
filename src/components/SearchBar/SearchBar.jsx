import React, { useState } from 'react';

import commonStyles from '../../styles/common.module.css';
import styles from './SearchBar.module.css';

const SearchBar = ({ isSearching, onSearch, clearSearch }) => {
    const [query, setQuery] = useState('');
    const [column, setColumn] = useState('firstName');

    const handleSearch = () => {
        onSearch(query, column);
    };

    const columns = [
        { value: 'firstName', label: 'Firstname' },
        { value: 'maidenName', label: 'Middlename' },
        { value: 'lastName', label: 'Lastname' },
        { value: 'age', label: 'Age' },
        { value: 'gender', label: 'Gender' },
        { value: 'phone', label: 'Phone' },
        { value: 'address.city', label: 'City' },
        { value: 'address.address', label: 'Street' },
    ];

    return (
        <div className={commonStyles.container}>
            <div className={styles.optionsTitle}>Choose a key for search</div>
            <div className={styles.optionsContainer}>
                {columns.map((col) => (
                    <div
                        key={col.value}
                        className={`${styles.optionTile} ${column === col.value ? styles.selected : ''}`}
                        onClick={() => setColumn(col.value)}
                    >
                        {col.label}
                    </div>
                ))}
            </div>
            <div className={styles.searchContainer}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Write query..."
                    className={styles.searchInput}
                />
                <button onClick={handleSearch} className={styles.searchButton}>Search</button>
                {isSearching && (
                    <button onClick={clearSearch}>Clear Search</button>
                )}
            </div>
        </div>
    );
}

export default SearchBar;
