import React, {useState} from 'react';
import {TextField, Button,Box} from '@mui/material';

const Search = ({ searchUsers}) => {
    const[query, setQuery] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        searchUsers(query);

    };

    return (
        <Box component="from" onSubmit={onSubmit} sx = {{display: 'flex', justifyContent: 'center', marginButton: 2}}>
            <TextField 
            label="Search Github Users"
            variant = "outlined"
            value ={query}
            onChange={(e) => setQuery(e.target.value)}
            sx={{ marginRight: 1}}
            />
            <Button type="submit" variant="contained" color="primary">
                Search
            </Button>
        </Box>
        
    );
};

export default Search;

