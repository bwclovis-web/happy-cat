import styled from 'styled-components'

const StyledDataGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: clamp(2rem, 3vw, 4rem);
`

export default StyledDataGrid