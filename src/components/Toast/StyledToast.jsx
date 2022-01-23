import styled from 'styled-components'

const StyledToast = styled.div`
    position: fixed;
    background: var(--peacock);
    z-index: 1000;
    bottom: 0;
    right: 0;
    padding: 2rem;
    transition: all .2s cubic-bezier(.17,.67,.83,.67);
    border-top-left-radius: 20px;
    opacity: ${props => props.display ? '1' : '0'};
    transform: ${props => props.display ? 'translateX(0)' : 'translateX(100%)'};
`

export default StyledToast;