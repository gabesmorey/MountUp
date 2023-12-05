// Navigation.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../css/Navigation.css';
import HomeIcon from '../icons/general/hcac.svg'; // Import the image
import Baseball from './sports/mens/Baseball';

function Navigation() {
  const [showSportsTable, setShowSportsTable] = useState(false);

  const sportsTable = (
    <div className="sports-table">
      <table>
        <thead>
          <tr>
            <th>Men's Sports</th>
            <th>Women's Sports</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to="/sports/baseball">Baseball</Link>
            </td>
            <td>
              <Link to="/sports/womens-basketball">Basketball</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/sports/mens-basketball">Basketball</Link>
            </td>
            <td>
              <Link to="/sports/womens-cc">Cross Country</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/sports/mens-cc">Cross Country</Link>
            </td>
            <td>
              <Link to="/sports/womens-golf">Golf</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/sports/football">Football</Link>
            </td>
            <td>
              <Link to="/sports/womens-soccer">Soccer</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/sports/mens-golf">Golf</Link>
            </td>
            <td>
              <Link to="/sports/softball">Softball</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/sports/mens-soccer">Soccer</Link>
            </td>
            <td>
              <Link to="/sports/womens-swim-dive">Swimming & Diving</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/sports/mens-swim-dive">Swimming & Diving</Link>
            </td>
            <td>
              <Link to="/sports/womens-tennis">Tennis</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/sports/mens-tennis">Tennis</Link>
            </td>
            <td>
              <Link to="/sports/womens-tf">Track & Field</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/sports/mens-tf">Track & Field</Link>
            </td>
            <td>
              <Link to="/sports/volleyball">Volleyball</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li
            className="dropdown"
            onMouseEnter={() => setShowSportsTable(true)}
            onMouseLeave={() => setShowSportsTable(false)}
          >
            <span>Sports +</span>
            {showSportsTable && sportsTable}
          </li>
          <li className="dropdown">
            <span>Teams +</span>
            <ul className="dropdown-content">
              <li>
                <Link to="https://athletics.anderson.edu/landing/index">Anderson</Link>
              </li>
              <li>
                <Link to="https://blufftonbeavers.com/landing/index">Bluffton</Link>
              </li>
              <li>
                <Link to="https://www.defianceathletics.com/landing/index">Defiance</Link>
              </li>
              <li>
                <Link to="https://goearlham.com/">Earlham</Link>
              </li>
              <li>
                <Link to="https://franklingrizzlies.com/">Franklin</Link>
              </li>
              <li>
                <Link to="https://athletics.hanover.edu/">Hanover</Link>
              </li>
              <li>
                <Link to="https://msjlions.com">Mount St. Joseph</Link>
              </li>
              <li>
                <Link to="https://muspartans.com/">Manchester</Link>
              </li>
              <li>
                <Link to="https://athletics.rose-hulman.edu/">Rose-Hulman</Link>
              </li>
              <li>
                <Link to="https://transysports.com/">Transylvania</Link>
              </li>
              {/* Add links for other teams here */}
            </ul>
          </li>
          <li className="home-icon">
            <Link to="/">
              <img src={HomeIcon} alt="Home" />
            </Link>
          </li>
        </ul>
      </nav>
  );
}

export default Navigation;
