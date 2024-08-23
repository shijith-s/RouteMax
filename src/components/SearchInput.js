import React from "react";
import "styles/searchInput.css";

function SearchInput({ value, onChange }) {
  return (
    <div className="searchInput_container">
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
