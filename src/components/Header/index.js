import React from 'react'
import logo from 'assets/images/logo.png'
import useStyles from './styles';

const Header = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        <img src={logo} className={classes.logoImg} alt="logo" />
      </div>
    </div>
  )
}

export default Header
