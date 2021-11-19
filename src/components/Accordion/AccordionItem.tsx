import * as React from "react"
import { useState } from "react";
import StyledAccordionItem from "./AccordionStyles"
import { AccordionItemI } from "./interfaces";

const AccordionItem: React.FC<AccordionItemI> = ({id, question, answer}) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <StyledAccordionItem key={id} active={isActive}>
            <button 
                aria-expanded={isActive} 
                aria-controls={id}
                id={`q-${id}`}
                onClick={() => setIsActive(!isActive)}
            >
                <span className="active-icon"> {isActive ? '-' : '+'} </span>
                <span className="h3">{question}</span>
            </button>
            <div className="bottom" id={id} role="region" aria-hidden={!isActive} aria-labelledby={`q-${id}`}>
                <span>{answer}</span>
            </div>
    </StyledAccordionItem>
    )
}

export default AccordionItem