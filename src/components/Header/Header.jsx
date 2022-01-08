import React from 'react'
import { Link } from 'gatsby'
import NavStyles from './HeaderStyles'
import ShoppingCartButton from '../ShoppingCartButton/ShoppingCartButton'

const Header = () => (
  <NavStyles>
    <nav className="container container-condensed">
      <Link to="/" className="h1">
        <span>Happy Cat Tie Dye</span>
      </Link>
      <div style={{display: 'flex', alignItems:'center'}}>
        <ul>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
  
        </ul>
        <ShoppingCartButton />
      </div>
    </nav>
  </NavStyles>
)

export default Header