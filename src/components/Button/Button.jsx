import * as React from "react"
import ButtonStyles from "./StyledButton";

const Button = ({children, config, onClick, pos, submitStatus, scHidden, size}) => (
    <ButtonStyles
        onClick={onClick}
        position={pos}
        submitStatus={submitStatus}
        aria-hidden={scHidden}
        tabIndex={scHidden ? '-1' : '0'}
        config={config}
        size={size}
    >
        {children}
    </ButtonStyles>
)

export default Button;