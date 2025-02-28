import Link from 'next/link';
import React from 'react';
import text from '../utils/text';
import './navbar-style.css';
import { dmSerifText } from '../utils/fonts'

// TODO fix routing.
// Click case-studies, then sublink, then case-studies again. 
// url ends up as case-studies/case-studies

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className={dmSerifText.className + ' nav-title-large'}>
        <Link href="/">{text.myName}</Link>
      </div>
      <ul className="nav-links">
        <li className="nav-dropdown">
            <Link className="nav-dropdown-top" href="case-studies">Case Studies v</Link> 
            <div className="nav-dropdown-list">
                <Link href="case-studies/1">Link 1</Link>
                <Link href="case-studies/2">Link 2</Link>
                <Link href="case-studies/3">Link 3</Link>
            </div>
        </li>
        <li>
            <Link href="about">About Me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
