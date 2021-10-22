import React from 'react';
import './style.css';
import Search from './components/Search';
import { BrowserRouter as Router } from 'react-router-dom';
export default function App() {
  const listitem = [{ name: 'abc' }, { name: 'xyz' }];
  return (
    <Router>
      <div>
        <Search listitem={listitem} />
      </div>
    </Router>
  );
}
