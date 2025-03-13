import Link from 'next/link';
import React from 'react';
import text from '../utils/text';
import './navbar-style.css';
import { dmSerifText } from '../utils/fonts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className={dmSerifText.className + ' nav-title-large'}>
        <Link href="/">{text.myName}</Link>
      </div>
      <ul className="nav-links">
        <li className="nav-dropdown">
            <Link className="nav-dropdown-top" href="/">
              Case Studies
              <FontAwesomeIcon icon={faCaretDown} className="fa-fw caret" />
            </Link> 
            <div className="nav-dropdown-list">
                <Link href="lh-categories">LH Categories</Link>
                <Link href="lh-cart">LH Cart</Link>
            </div>
        </li>
        <li>
          <Link href="about">About Me </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
