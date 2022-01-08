import styled from 'styled-components'

const NavStyles = styled.header `
    background-color: rgba(9, 13, 13, 0.9);
    position: relative;
    z-index: 2;
    text-align: center;

    .top-nav {
        background-color: var(--peacock);

        &-container {
            display: flex;
            max-width: 1600px;
            margin: 0 auto;
            justify-content: flex-end;
            padding-left: clamp(1rem, 3vw, 2rem);
            padding-right: clamp(1rem, 3vw, 2rem);
        }
    }

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
            &:not(:first-child) {
                border-left: 1px solid var(--coral);
            }
        }
    }

    a {
        color: var(--coral);
        text-transform: uppercase;
        letter-spacing: .1rem;

        &:not(.h1) {
            padding: 1rem;
        }
    }

    .cart-button {
        padding: 1rem;
    }

    svg {
        fill: var(--marino);
    }
`

export default NavStyles