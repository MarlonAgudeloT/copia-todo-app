import React from 'react';
import './TodoSearch.css'

/*With event.target.value.  Permit access to a user input */
function TodoSearch(){
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
    };
    return(
        <input 
        className="TodoSearch" 
        placeholder="Search Task" 
        onChange = {onSearchValueChange}
        />
    );
}

export {TodoSearch};