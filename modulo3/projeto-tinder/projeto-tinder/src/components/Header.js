import React from "react";
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
// import IconButton from '@mui/core-material/IconButton';

function Header() {
    return(
        <div className="header">
            
            <PersonIcon className="header__icon" fontSize="large"/>
            

            <img
                className="header__logo"
            src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png" 
            alt="tinder logo" />

            
            <ForumIcon className="header_icon" fontSize="large"/>
            

        </div>
    )
}

export default Header;