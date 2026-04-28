import { useState } from "react";

function SearchBar({ data, setFiltered }) {
  const [search, setSearch] = useState("");

  const handleSearch = (value) => {
    setSearch(value);

    const result = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setFiltered(result);
  };

  return (
    <div className="search-box glass">
      <input
        type="text"
        placeholder="Search destinations..."
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;