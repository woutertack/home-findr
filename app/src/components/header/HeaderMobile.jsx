import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 
  faRightFromBracket,
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const HeaderMobile = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  

  // Simulating user login/logout
  useEffect(() => {
    // Replace this with your actual login/logout logic
    const user = true;
    setLoggedIn(user);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={style.header}>
      <div className={style.container}>
       

        {/* Toggle Button */}
        <div className={style.toggle} onClick={toggleMenu}>
          {showMenu ? (
            <FontAwesomeIcon icon={faTimes} className={style.toggleClose} />
          ) : (
            <FontAwesomeIcon icon={faBars} className={style.toggleIcon} />
          )}
        </div>

            
        {/* Menu mobile*/}
        {showMenu && (
          <>
         
          
          <div className={style.overlay} onClick={toggleMenu}>
           
            <ul className={style.navMobile}>
              <FontAwesomeIcon icon={faTimes} className={style.toggleClose} />
              {/* Home */}
              <li className={style.navItemMobile}>
                <Link to="/" className={style.navLinkMobile}>
                  Home
                </Link>
              </li>
              {/* Rent */}
              <li className={style.navItemMobile}>
                <Link to="/rent" className={style.navLinkMobile}>
                  Rent
                </Link>
              </li>
              {/* Buy */}
              <li className={style.navItemMobile}>
                <Link to="/buy" className={style.navLinkMobile}>
                  Buy
                </Link>
              </li>
              {/* Contact */}
              <li className={style.navItemMobile}>
                <Link to="/contact" className={style.navLinkMobile}>
                  Contact
                </Link>
              </li>
              {/* Login/Sign Up */}
              {!loggedIn && (
                <>
                  <li className={style.navItemMobile}>
                    <Link to="/login" className={style.navLinkMobile}>
                      Login
                    </Link>
                  </li>
                  <li className={style.navItemMobile}>
                    <Link to="/signup" className={style.navLinkMobile}>
                      <button className={style.btnSignupMobile}>Sign Up</button>
                    </Link>
                  </li>
                </>
              )}

              {/* if Logged in */}
              {loggedIn && (
                <>
                  {/* Messages */}
                  <li className={style.navItemMobile}>
                    <Link to="/messages" className={style.navLinkMobile}>
                      Messages
                    </Link>
                  </li>
                  {/* Favorites */}
                  <li className={style.navItemMobile}>
                    <Link to="/favorites" className={style.navLinkMobile}>
                      Favorites
                    </Link>
                  </li>
                  {/* Profile */}
                  <li className={style.navItemMobile}>
                    <Link to="/profile" className={style.navLinkMobile}>
                      Profile
                    </Link>
                  </li>
                  {/* Logout */}
                  <li className={style.navItemMobile}>
                    <Link to="/logout" className={style.navLinkMobile}>
                      <FontAwesomeIcon
                        icon={faRightFromBracket}
                        className={style.iconLogoutMobile}
                      />
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          </>
        )}
      </div>
      
    </header>
  );
};

export default HeaderMobile;
