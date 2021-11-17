import * as React from "react"
import GlobalStyles from "../../styles/Globals"
import Typography from "../../styles/Typeography"
import Header from "../Header/Header"

const LayoutWrapper = ({children}) => (
    <>
        <GlobalStyles />
        <Typography />
        <Header />
        <main>
            {children}
        </main>
    </>
)

export default LayoutWrapper