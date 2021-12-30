import styled from 'styled-components'

const StyledShoppingCart = styled.section`
    position: fixed;
    top: 0;
    padding: 2rem;
    height: 100%;
    background-color: var(--coral);
    width: 30%;
    right: 0;
    z-index: 20;

    ul {
        display: flex;
        justify-content: start;

        li {
            display: flex;
            align-items: start;
            width: 100%;
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