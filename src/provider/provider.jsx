import React, {useState, useEffect} from 'react'
import UseCart from '../lib/useCart'
import Client from 'shopify-buy'

const client = Client.buildClient({
    domain: process.env.GATSBY_SHOPIFY_STORE_URL,
    storefrontAccessToken: process.env.GATSBY_STOREFRONT_ACCESS_TOKEN
});

const ctxDefaults = {
    cartOpen: false,
    cart: [],
    toggleCart:() => {},
    addVariantToCart: () => {},
    removeLineItem: () => {},
    updateLineItem: () => {},
    client,
    checkout: {
      lineItems: [],
    },
}
const CartContext = React.createContext(ctxDefaults)

const isBrowser = typeof window !== `undefined`
const localStorageKey = `shopify_checkout_id`

export const CartProvider = ({children}) => {
    const [cartOpen, toggleCart] = UseCart()
    const [checkout, setCheckout] = useState(ctxDefaults.checkout)
    const [loading, setLoading] = useState(false)
    const [didJustAddToCart, setDidJustAddToCart] = useState(false)

    const setCheckoutItem = (checkout) => {
        if (isBrowser) {
          localStorage.setItem(localStorageKey, checkout.id)
        }
        setCheckout(checkout)
      }

      useEffect(() => {
        const initializeCheckout = async () => {
          const existingCheckoutID = isBrowser
            ? localStorage.getItem(localStorageKey)
            : null
    
          if (existingCheckoutID && existingCheckoutID !== `null`) {
            try {
              const existingCheckout = await client.checkout.fetch(
                existingCheckoutID
              )
              if (!existingCheckout.completedAt) {
                setCheckoutItem(existingCheckout)
                return
              }
            } catch (e) {
              localStorage.setItem(localStorageKey, null)
            }
          }
    
          const newCheckout = await client.checkout.create()
          setCheckoutItem(newCheckout)
        }
    
        initializeCheckout()
      }, [])

      const addVariantToCart = (variantId, quantity) => {
        setLoading(true)
        const checkoutID = checkout.id
        const lineItemsToUpdate = [
          {
            variantId,
            quantity: parseInt(quantity, 10),
          },
        ]
    
        return client.checkout
          .addLineItems(checkoutID, lineItemsToUpdate)
          .then((res) => {
            setCheckout(res)
            setLoading(false)
            setDidJustAddToCart(true)
            setTimeout(() => setDidJustAddToCart(false), 3000)
          })
      }

      const removeLineItem = (checkoutID, lineItemID) => {
        setLoading(true)
    
        return client.checkout
          .removeLineItems(checkoutID, [lineItemID])
          .then((res) => {
            setCheckout(res)
            setLoading(false)
          })
      }

      const updateLineItem = (checkoutID, lineItemID, quantity) => {
        setLoading(true)
    
        const lineItemsToUpdate = [
          { id: lineItemID, quantity: parseInt(quantity, 10) },
        ]
    
        return client.checkout
          .updateLineItems(checkoutID, lineItemsToUpdate)
          .then((res) => {
            setCheckout(res)
            setLoading(false)
          })
      }

    return (
        <CartContext.Provider value={{
            ...ctxDefaults,
            addVariantToCart,
            removeLineItem,
            updateLineItem,
            checkout,
            loading,
            didJustAddToCart,
            cartOpen,
            toggleCart
        }}>
            {children}
        </CartContext.Provider> 
    )
}

export default CartContext;