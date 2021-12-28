import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import NavStyles from './HeaderStyles'
import ShoppingCartButton from '../ShoppingCartButton/ShoppingCartButton'

const Header = () => (
  <NavStyles>
    <nav className="container">
      <Link to="/" className="h1">
        <span>Happy Cat Tie Dye</span>
      </Link>
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
    </nav>
  </NavStyles>
)

export default Header