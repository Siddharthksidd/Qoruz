import React, { useState } from 'react'
import "../Component-CSS/Accordian.css"

const Accordian = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
  return (
    <div className='accordion' onClick={toggleAccordion}>
            <h3 className="accordion-title"> {props.title} <img src="/images/icons/down.webp" alt="down" /></h3>
            {isOpen &&
            props.menu.map(item => {
            const { id, link } = item;
            return(
            <div className="accordion-content" key={id}>
                <p>{link}</p>
            </div>)})}
    </div>
  )
}

export default Accordian