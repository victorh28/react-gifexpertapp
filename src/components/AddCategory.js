import React, { useState } from 'react'
import { PropTypes  } from "prop-types";


export const AddCategory = ({setCategoria}) => {

    const [inputValue, setInputValue] = useState('');

    const handledInputChange = (e) =>{
        setInputValue(e.target.value);
    }

    const handledSubmit = (e) =>{
        e.preventDefault();

        if(inputValue.trim()){
            setCategoria(cat => [inputValue,...cat]);
        }
    }


    return (
        <form onSubmit={handledSubmit}>
            <input 
                type="text" 
                value={inputValue} 
                onChange={handledInputChange}/>
        </form>
    )
}


AddCategory.propTypes = {
    setCategoria: PropTypes.func.isRequired
}