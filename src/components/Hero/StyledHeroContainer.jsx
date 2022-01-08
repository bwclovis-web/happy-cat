import styled from 'styled-components'

const StyledHeroContainer = styled.div`
    display: flex;
    backdrop-filter: blur(4px);
    padding:  4rem 2rem;
    background-color: rgba(0, 0, 0,0.8);
    color: var(--peacock);
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 100%;

    @media(min-width: 786px) {
        width: 60%;
        margin-top: -6rem;
        border-radius: 20px;
        height: auto;
        padding: 2rem;
        border: 2px solid var(--peacock);
    }

     h1 {
         font-size: clamp(9rem, 10vw, 18rem);
         color: var(--peacock);
         letter-spacing: clamp(0rem, 10vw, .6rem);
         text-align: center;
         padding-bottom: 0;
     }
`;

export default StyledHeroContainer;