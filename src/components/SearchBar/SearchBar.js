import React from 'react';
import Button from '../UI/Button/Button'

const SearchBar = (props) => {
    return (
        <div className="search-box">
        <input  type="text"
         className="search-bar"
          placeholder="Search..."
          onChange={props.change} />
          <div>
        <Button  clicked={props.click}   />
        </div>
      </div>
    );
}

export default SearchBar;
