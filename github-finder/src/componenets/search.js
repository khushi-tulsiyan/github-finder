import React, {useState} from 'react';

const Search = {( searchUsers )} => {
    const[query, setQuery] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        searchUsers(query);

    };

    return (
        <div>
            <form onSubmit ={onSubmit}>
                <input 
                type = "text"
                value = {Query}
                onChange ={(e) => setQuery(e.target.value)}
                placeholder = "Search github Users..."
                />
            </form>

        </div> 
    );
};

export default Search;

