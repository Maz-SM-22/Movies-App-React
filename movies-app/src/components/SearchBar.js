import React, { useState } from 'react';

export default function SearchBar() {
    const [searchInput, setSearchInput] = useState("");
    const [results, setResults] = useState({});

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    }

    async function search() {
        const response = await fetch(`http://localhost:2295/search?title=${searchInput}`)
        const data = await response.json();
        setResults(data.movies);
        console.log(results)
    }

    return (
        <div>
            <input type="text" placeholder="Search for movies by title..." onChange={handleSearchInputChange} />
        </div>
    )
}