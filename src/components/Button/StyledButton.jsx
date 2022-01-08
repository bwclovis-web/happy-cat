import styled from "styled-components"

const ButtonStyles = styled.button`
    font-size: 2.4rem;
    letter-spacing: .14rem;
    font-weight: 500;
    background-color: ${props => props.config === "default" && `rgba(255,255,255, 0.15)`};
    border: ${props => props.config === 'default' && `4px solid rgba(0,0,0,0.2)`};
    padding: ${props => props.size === 'lg' && `2rem 2.6rem`};
    color: ${props => props?.submitStatus?.submitting ? '' : 'var(--black)'};
    display: ${props => props.position === 'center' && 'block'};
    margin: ${props => props.position === 'center' ? '0 auto' : 
        props.size === 'lg' && '0 0 2rem'};
    transition: all .1s ease-in;
    border-radius: ${props => props?.submitStatus?.submitting ? '50%' : '0'};

    &:focus,
    &:hover {
        background-color: ${props => props?.submitStatus?.succeeded ? 'var(--success)': 
        props.config === "default" && 'var(--peacock)'};
        color: white;
    }
`

export default ButtonStyles