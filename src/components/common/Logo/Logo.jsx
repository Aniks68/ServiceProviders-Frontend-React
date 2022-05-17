import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import classes from './Logo.module.css';

const Logo = () => (
  <Link to='/' className={classes['header-content_logo']}>
    <div>
      <img src={logo} alt='logo' />
      <span>
        <b>KC Kitchen</b>
      </span>
    </div>
    <p>
      <b>Meals & Takeouts</b>
    </p>
  </Link>
);

export default Logo;
