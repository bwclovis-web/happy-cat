import React from 'react'
import Layout from './src/components/Layout/Layout'
import {CartProvider} from './src/provider/provider'

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)