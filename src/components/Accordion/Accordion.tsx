import * as React from "react"
import AccordionItem from "./AccordionItem";
import { AccordionI } from "./interfaces";

const Accordion: React.FC<AccordionI> = ({data}) => {
    return (
        <ul>
            {data.map((item: any) => {
                return (
                    <AccordionItem 
                        key={item.id} 
                        id={item.id} 
                        question={item.question} 
                        answer={item.answer}
                    />
                )
            })}
        </ul>
    )
}
export default Accordion