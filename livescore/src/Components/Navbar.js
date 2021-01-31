import { AppBar,Toolbar,IconButton,Typography,Button } from '@material-ui/core';
import MenuIcon  from '@material-ui/core/Menu';
import React from 'react';
const Navbar=()=>{
return(
    <AppBar color="secondary"position="static">
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu">
      <MenuIcon/>
      </IconButton>
      <Typography variant="h6">
        Live Score
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
)
};
export default Navbar;