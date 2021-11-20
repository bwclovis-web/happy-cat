import styled from "styled-components"

const StyledSixty = styled.div`

    section:first-child {
        padding-bottom: 4rem;
    }

    @media(min-width: 769px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: clamp(2rem, 4vw, 6rem);

        section:first-child {
            width: ${props => props.inverted ? '33%' : '60%'};
        }

        section:last-child {
            width: ${props => props.inverted ? '60%' : '33%'};
        }
    }
`

export default StyledSixty;