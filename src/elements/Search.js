import React from "react";

const Search = ({ name, onChange }) => {
  return (
    <div>
      <input type="search" placeholder="Search..." onChange={onChange} />
    </div>
  );
};

export default Search;
