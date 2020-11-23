import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Duo Crew
      </Link>
      <div className="right menu">
        <Link to="/users/register" className="item">
          Register
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
