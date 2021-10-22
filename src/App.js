import React, { useState, useEffect } from 'react';
import './style.css';
import Search from './components/Search';
import { BrowserRouter as Router } from 'react-router-dom';
export default function App() {
  const [users, setUsers] = useState([]);
  const listitem = [{ name: 'abc' }, { name: 'xyz' }, { name: 'a' }];
  const urlJson = 'https://jsonplaceholder.typicode.com/users';
  return (
    <Router>
      <div>
        <Search listitem={listitem} />
      </div>
    </Router>
  );
}
