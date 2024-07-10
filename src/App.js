import React, { useState} from 'react';
import axios from 'axios';
import Search from './componenets/search';
import User from './componenets/user';
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
    <div>
      <Search searchUsers={searchUsers} />
      <User user = {user} />
    </div>
  );
};

export default App;
