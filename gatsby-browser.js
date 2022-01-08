import React from 'react'
import Layout from './src/components/Layout/Layout'
import {CartProvider} from './src/provider/provider'
export const wrapPageElement = ({ element, props }) => (
  <CartProvider>
    <Layout {...props}>{element}</Layout>
  </CartProvider>
)