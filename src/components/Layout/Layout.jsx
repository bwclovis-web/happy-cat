import * as React from "react"
import "@fontsource/chicle";
import "@fontsource/libre-franklin"
import GlobalStyles from "../../styles/Globals"
import Typography from "../../styles/Typeography"
import Header from "../Header/Header"

const LayoutWrapper = ({children}) => (
    <>
        <GlobalStyles />
        <Typography />
        <div className="overlay"/>
        <Header />
        <main>
            {children}
        </main>
    </>
)

export default LayoutWrapper