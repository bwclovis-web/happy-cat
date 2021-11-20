import * as React from "react"
import ButtonStyles from "./StyledButton";

const Button = ({children, config, onClick, pos, submitStatus}) => (
    <ButtonStyles
        onClick={onClick}
        position={pos}
        submitStatus={submitStatus}
    >
        {children}
    </ButtonStyles>
)

export default Button;