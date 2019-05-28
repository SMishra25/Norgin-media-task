import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 const Header = () => (
     <div className="header fixOnTop">
        <span className="userIcon">
          <FontAwesomeIcon icon="user" size="2x" />
        </span>
        <span className="searchIcon">
          <FontAwesomeIcon icon="search" size="2x" />
        </span>
      </div>
 )
export default Header;