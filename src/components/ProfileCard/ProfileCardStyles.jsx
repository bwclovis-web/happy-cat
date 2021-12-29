import styled from 'styled-components'

const StyledProfileCard = styled.section`
    text-align: center;

    h2 {
        border-bottom: 6px dotted var(--marino);
    }

    .social {
        display: flex;
        align-items: center;
        justify-content: start;
        padding: 1.6rem 1rem;
        color: var(--marino);
        font-size: 2.4rem;
        transition: all .2s ease-out;

        span {
            padding-left: 1.8rem;
        }

        &:hover,
        &:focus {
            color: var(--black);
        }
    }

    ul {
        padding: 2rem 0;
    }

    .content {
        margin-top: 2rem;
        border: 4px solid var(--marino);
        border-radius: var(--radius);
        padding: 2rem;

        span:first-child {
            margin-top: -13rem;
        }

        .gatsby-image-wrapper {
            border-radius: 50%;
            border: 6px solid var(--cayman);
            margin: -18rem 0 3rem;
            box-shadow: 0 0 1.6rem rgba(0,0,0, 0.42);
        }
    }

`

export default StyledProfileCard