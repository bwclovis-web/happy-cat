import styled from 'styled-components'
import * as React from "react"
import { Link } from "gatsby"

const StyledProductCard =  styled(props => <Link {...props} />)`
    position: relative;
    box-shadow: 0 0 6px rgba(0,0,0,0.7);
    border: .2rem solid var(--coral);
    border-radius: var(--radius);
    overflow: hidden;
    width: 80%;
    margin: 0 auto;

    @media(min-width: 786px) {
        width: 20%;
        margin: 0;
    }

    &:first-of-type {
        border-top-left-radius: 10%;
    }

    &:last-of-type {
        border-bottom-right-radius: 10%;
    }

    .title {
        padding: 1rem 1rem 1rem 3rem;
        font-size: 2.4rem;
        letter-spacing: .2rem;
        font-size: 1.6rem;
        background-color: var(--coral);
        color: var(--black);
    }

    .overlay {
        max-height: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        transition: transform .6s cubic-bezier(.17,.67,.83,.67);
        overflow: hidden;
    }

    &:hover,
    &:focus {
        box-shadow: 0 0 14px rgba(0,0,0,0.85);
        border-color: var(--marino);

        .title {
            background-color: var(--marino);
            color: var(--white);
            transition: all .3s ease-in-out;
            position: relative;
            z-index: 100;
        }

        .overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: rgba(252, 146, 126, 0.7);
            max-height: 100%;
            z-index: 4;
        }

        img {
            transition: transform .6s cubic-bezier(.17,.67,.83,.67);
            transform: scale(110%);
        }
    }
`

export default StyledProductCard;