import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { StyledToolbar } from './Header.styled';


const Header = () => {
  return (
      <AppBar position="static">
        <StyledToolbar>
          <Button color="primary" variant="contained">
            LabeEddit
          </Button>
          <Button color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>
  );
}

export default Header;
