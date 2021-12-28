import * as React from "react"
import GlobalStyles from "../../styles/Globals"
import Typography from "../../styles/Typeography"
import Header from "../Header/Header"
import {CartProvider} from '../../provider/provider'

const LayoutWrapper = ({children}) => (
    <CartProvider>
        <GlobalStyles />
        <Typography />
        <div className="overlay"/>
        <Header />
        <main>
            {children}
        </main>
    </CartProvider>
)

export default LayoutWrapper