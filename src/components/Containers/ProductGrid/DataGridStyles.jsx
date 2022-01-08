import styled from 'styled-components'

const StyledDataGrid = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: ${props => props.display === '3'  ? 
        `clamp(2rem, 3vw, 4rem)` :
        `clamp(1rem, 3vw, 2rem)`
    };

    @media(min-width: 786px) {
        flex-direction: row;
    }
`

export default StyledDataGrid