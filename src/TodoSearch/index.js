import React from 'react';
import './TodoSearch.css'

/*With event.target.value.  Permit access to a user input */
function TodoSearch({searchValue, setSearchValue}){
    
    const onSearchValueChange = (event) => {
       console.log(event.target.value);
       setSearchValue(event.target.value);
    };
    return [
        <input 
        className="TodoSearch" 
        placeholder="Search Task" 
        value = {searchValue}
        onChange={onSearchValueChange}
        />,
        <p>{searchValue}</p>
    ];
}

export {TodoSearch};