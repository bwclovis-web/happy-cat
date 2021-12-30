import styled from "styled-components";
import { AccordionStylesI } from "./interfaces";

const StyledAccordionItem = styled.li<AccordionStylesI>`
    border-bottom: .3rem dashed var(--coral);

    &:first-child {
        margin-top: 2.4rem;
        border-top: .3rem dashed var(--coral);
    }

    button {
        position: relative;
        z-index: 6;
        display: block;
        text-align: left;
        padding: 2rem 0;
        margin-bottom: 1rem;
        display: flex;
        width: 100%;
        align-items: center;
        
    }

    .bottom {
        opacity: ${props => props.active ? '1' : '0'};
        transform: ${props => props.active ? 'translateY(0)' : 'translateY(-100%)'};
        position: relative;
        z-index: 2;
        max-height: ${props => props.active ? '100%' : '0'};
        padding: ${props => props.active ? '1rem 1rem 2rem' : '0 1rem'};
        transition: all .2s ease-in-out;
    }

    .active-icon {
        background-color: ${props => props.active ? 'var(--peacock)' : 'var(--black)'};
        min-width: 4rem;
        height: 4rem;
        display: block;
        text-align: center;
        padding ${props => props.active ? '0.4rem 0 0' : '0.3rem 0 0'};
        border-radius: 50%;
        margin-right: 2rem;
        color: ${props => props.active ? 'var(--black)' : '#fff'};
        font-size: 3rem;
        font-weight: 700;
        line-height: 1;
        border: 1px solid var(--black);
    }
`
export default StyledAccordionItem