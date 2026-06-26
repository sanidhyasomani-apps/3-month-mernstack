import React from 'react'

function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      value={search}
      placeholder="Search product..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
export default SearchBar