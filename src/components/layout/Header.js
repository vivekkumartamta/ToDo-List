import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>TodoList</h1>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
    </header>
  )
}

export default Header;
