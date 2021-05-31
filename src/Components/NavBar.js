import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <div className="header">
      <div className="left">
        <Link to="/">
          <p>
            <a href="/">RED</a>
          </p>
        </Link>
      </div>
      <div className="right">
        <ul>
          <Link to="/about">
            <li>About</li>
          </Link>

          <Link to="/shop">
            <li>Store</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
