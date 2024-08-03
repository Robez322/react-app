import React, { useState, useEffect } from 'react';

import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import UsersTable from './components/UsersTable/UsersTable';
import { getPageCount } from './utils/pagination';
import Pagination from './components/Pagination/Pagination';

function App() {
  const [users, setUsers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [column, setColumn] = useState('');
  const [query, setQuery] = useState('');

  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(15);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    if (!isSearching) {
      fetch(`https://dummyjson.com/users?limit=${limit}&skip=${(page - 1) * limit}&select=firstName,maidenName,lastName,age,gender,phone,address`)
        .then(response => response.json())
        .then(data => {
          setUsers(data.users);
          setTotalUsers(data.total);
          setTotalPages(getPageCount(data.total, limit));
        });
    } else {
      fetch(`https://dummyjson.com/users/filter?limit=${limit}&skip=${(page - 1) * limit}&key=${column}&value=${query}`)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data.users);
          setTotalUsers(data.total);
          setTotalPages(getPageCount(data.total, limit));
        });
    }
  }, [page, limit, isSearching]);

  const changePage = (page) => {
    setPage(page);
  }

  const handleSearch = (query, column) => {
    setIsSearching(true);
    setColumn(column);
    setQuery(query);
  }

  const clearSearch = () => {
    setIsSearching(false);
    setSearchResults([]);
    setPage(1);
  }

  const displayedUsers = isSearching ? searchResults : users;

  return (
    <>
      <Header title='Users Table' />
      <SearchBar
        isSearching={isSearching}
        onSearch={handleSearch}
        clearSearch={clearSearch}
      />
      <UsersTable
        data={displayedUsers}
      />
      <Pagination
        page={page}
        changePage={changePage}
        totalPages={totalPages}
      />
    </>
  );
}

export default App;
