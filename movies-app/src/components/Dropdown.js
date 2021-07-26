import React from 'react';

function Dropdown({ options = [], value = "" }) {

    const handleChange = (event) => {
        console.log(event.target.value);        // Call onChange callback here need to pass value up two levels to app and then use this as a filter
    };

    return (
        <select className="categories-list" onChange={handleChange} value={value}>
            {options.map((option, index) => (<option key={index} value={option}>{option}</option>))}
        </select>
    );
}

export default Dropdown;