import React from 'react';
import './CreateTodoButton.css'


function CreateTodoButton (props){

    const onClickButton = (msg) => {
        alert(msg);
        };

    return(
            <button 
            className = "CreateTodoButton"
            onCLick={() => onClickButton('Here is the modal')}
            >           
            +
            </button>
            
            );
}

export {CreateTodoButton};