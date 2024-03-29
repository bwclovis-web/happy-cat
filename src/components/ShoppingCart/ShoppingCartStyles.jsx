import styled from 'styled-components'

const StyledShoppingCart = styled.div`
    .overlay {
        background: rgba(0,0,0,0.7);
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: fixed;
        z-index: 4;
    }

    .cart {
        position: fixed;
        top: 0;
        height: 100%;
        background-color: var(--coral);
        width: 100%;
        right: 0;
        z-index: 6;
        transition: all .2s ease-in-out;
        transform: ${props => props.open ? 'translateX(0)' : 'translateX(100%)'};

        @media(min-width: 786px) {
            width: 40%;
        }

        @media(min-width: 1200px) {
            width: 30%;
        }
    }
    

    .cart-heading {
        background-color: rgba(244,244,244,0.5);
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
            padding-bottom: 0;
        }
    }

    ul {
        display: flex;
        justify-content: start;
        flex-direction: column;
        padding: 1.6rem;

        li {
            display: flex;
            align-items: start;
            width: 100%;
            margin-bottom: 1rem;
        }

        img {
            border-radius: var(--radius);
        }

        .card-content {
            background-color: rgba(255,255,255,0.3);
            width: 100%;
            height: 100%;
            text-align: left;
            padding: 2rem;
        }
    }
`

export default StyledShoppingCart;