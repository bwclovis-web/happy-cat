import styled from 'styled-components'

const NavStyles = styled.header `
    background-color: rgba(9, 13, 13, 0.9);
    position: relative;
    z-index: 2;

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 3.2rem;
        padding-bottom: 3.2rem;
    }

    .h1 {
        padding-bottom: 0;
        color: var(--coral);
        letter-spacing: .34rem;
        font-size: clamp(3.6rem, 5vw, 6.8rem);
    }

    ul {
        display: flex;
        list-style: none;

        li {
            padding-left: 1rem;

            &:not(:last-child) {
                border-right: 1px solid var(--coral);
            }
        }
    }

    a {
        color: var(--coral);
        padding-right: 1rem;
        text-transform: uppercase;
        letter-spacing: .1rem;
    }
`

export default NavStyles