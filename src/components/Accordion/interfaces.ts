export interface AccordionI {
    data: [{
        id: string
        question: string
        answer: string
    }]
}

export interface AccordionItemI {
    id: string
    question: string
    answer: string
}

export interface AccordionStylesI {
    active: boolean
}