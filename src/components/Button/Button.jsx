import * as React from "react"
import ButtonStyles from "./StyledButton";

const Button = ({children, config, onClick, pos, submitStatus, scHidden}) => (
    <ButtonStyles
        onClick={onClick}
        position={pos}
        submitStatus={submitStatus}
        aria-hidden={scHidden}
        tabIndex={scHidden ? '-1' : '0'}
    >
        {children}
    </ButtonStyles>
)

export default Button;