import React from "react";
import "./serchbox.style.scss";

const SearchBar = ({ input, handleChange }: any) => {
  return (
    <div className="search-item">
      <input
        type="search"
        value={input}
        placeholder={"Search StudentName"}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
