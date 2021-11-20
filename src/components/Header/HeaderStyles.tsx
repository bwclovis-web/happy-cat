import styled from 'styled-components'

const NavStyles = styled.header `
    background-color: rgba(9, 13, 13, 0.9);
    position: relative;
    z-index: 2;
    text-align: center;

    @media(min-width: 786px) {
        nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-top: 3.2rem;
            padding-bottom: 3.2rem;
        }
    }

    .h1 {
        padding-bottom: 0;
        color: var(--coral);
        letter-spacing: clamp(.1rem, 3vw, .34rem);
        font-size: clamp(5.6rem, 6vw, 7.8rem);
    }

    ul {
        display: flex;
        list-style: none;
        justify-content:center;
        margin-top: 2rem;

        @media(min-width: 786px) {
            margin-top: 0;
        }

        li {
            &:not(:last-child) {
                border-right: 1px solid var(--coral);
            }
        }
    }

    a {
        color: var(--coral);
        text-transform: uppercase;
        letter-spacing: .1rem;

        &:not(.h1) {
            padding: 1rem 1.4rem;
        }
    }
`

export default NavStyles