import React, { useRef } from "react";

const Search = (props) => {
  const searchInput = useRef();
  return (
    <div className="flex shadow-5xl">
      <input
        type="search"
        value={props.searchData}
        className="border border-black w-full p-5 text-2xl"
        onChange={() => props.eventHandler(searchInput.current.value)}
        ref={searchInput}
      />
      <button onClick={props.searchWeather} className="p-7 border-2-blue bg-gradient-to-r from-cyan-500 to-blue-500 text-white ">Search</button>
    </div>
  );
};

export default Search;
