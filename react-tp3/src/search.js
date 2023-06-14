import React from "react";

function Search(props) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = (event) => {
    props.onSearch(event); 
  };
  
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
}
export default Search;
