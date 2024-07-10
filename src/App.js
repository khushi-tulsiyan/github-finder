import React, { useState} from 'react';
import axios from 'axios';
import Search from './components/search';
import User from './components/user';
import { Container, Typography } from '@mui/material';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const searchUsers = async(query) =>{
    try {
      const response = await axios.get(`https://api.github.com/users/${query}`);
      setUser(response.data);
    }
    catch(error){
      setUser(null);
    }
  };
  return (
    <Container sx={{textAlign:"center", padding: 3}}>
      <Typography variant="h4" component="h1" gutterBottom>
        Github Finder
      </Typography>
      <Search searchUsers={searchUsers} />
      <User user={user} />
    </Container>
  );
};

export default App;
