import React from 'react';
import { Link } from 'react-router-dom';

const NavBrand = function() {
  return (
    <Link to="/" className="navbar-brand" href="index.html">
      conduit
    </Link>
  )
}

export default NavBrand;
