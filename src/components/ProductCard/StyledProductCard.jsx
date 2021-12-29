import styled from 'styled-components'
import * as React from "react"
import { Link } from "gatsby"

const StyledProductCard =  styled(props => <Link {...props} />)`
    text-align: center;

    .title {
        padding: 1rem 0 0;
        font-size: 2.4rem;
        letter-spacing: .3rem;
    }

    .price {
        font-weight: 300;
        font-size: 3rem;
        color: var(--marino);
    }

    img {
        transition: transform .3s ease-in-out;
    }

    &:hover {
        img {
            transition: transform .3s ease-in-out;
            border: 3px solid var(--black);
            transform: scale(120%);
        }
    }
`

export default StyledProductCard;