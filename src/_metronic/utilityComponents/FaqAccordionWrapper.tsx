import Accordion from 'react-bootstrap/Accordion';
import './styles/FaqAccordionWrapper.css'
import React from 'react';

interface dataObjItem {
    label: string,
    content: string
}

interface FaqAccordionWrapperProps {
    dataObj: dataObjItem[]
}

const FaqAccordionWrapper: React.FC<FaqAccordionWrapperProps> = ({ dataObj }) => {
    return (
        <div className='faqContainer'>
            <p className='marginZero paddingZero faqText'>Frequently Asked Questions</p>
            <Accordion className='container faqWrapper'>
                {dataObj.map((item, index) => (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header className='accordionItemHeader paddingZero'>{item.label}</Accordion.Header>
                        <Accordion.Body className='accordionContent'>
                            {item.content}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    );
}

export { FaqAccordionWrapper }