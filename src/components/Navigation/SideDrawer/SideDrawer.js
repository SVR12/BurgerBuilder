import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import EmptyWrapper from '../../../hoc/EmptyWrapper/EmptyWrapper';

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <EmptyWrapper>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")} >
        <div className={classes.Logo} >
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </EmptyWrapper>
  );
};

export default sideDrawer;