import styled from 'styled-components'

const NavStyles = styled.header `
    background-color: rgba(9, 13, 13, 0.9);
    position: relative;
    z-index: 2;

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2rem 0 3.2rem;
    }

    .h1 {
        padding-bottom: 0;
        color: var(--coral);
        letter-spacing: .14rem;
    }

    ul {
        display: flex;
        list-style: none;
    }
`

export default NavStyles