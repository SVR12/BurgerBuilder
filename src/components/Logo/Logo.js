import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
  <div className={classes.Logo} >
    {/* <img src={require('../../assets/images/burger-logo.png')} /> */}
    <img src={burgerLogo} alt="Sandy's Burger" />
  </div>
);

export default logo;