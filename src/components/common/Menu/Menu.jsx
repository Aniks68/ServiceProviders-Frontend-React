import React, { forwardRef } from 'react';
import MenuItem from './MenuItem/MenuItem';
import classes from './Menu.module.css';

const Menu = forwardRef(({ list }, ref) => (
  <div className={classes.main} ref={ref}>
    {list.map((item) => (
      <MenuItem item={item} key={item.id} />
    ))}
  </div>
));

export default Menu;
