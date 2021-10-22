import React, { useState, useEffect } from 'react';
import './style.css';
import Search from './components/Search';
import { BrowserRouter as Router } from 'react-router-dom';
export default function App() {
  const [users, setUsers] = useState([]);
  return (
    <Router>
      <div>
        <Search />
      </div>
    </Router>
  );
}
