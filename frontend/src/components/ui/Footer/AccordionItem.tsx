import { useState, useRef, useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import type { AccordionItemProps } from "../../../types/components-props";

export default function AccordionItem({btnTitle, links}: AccordionItemProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [maxHeight, setMaxHeight] = useState('0px');

    const contentRef = useRef<HTMLUListElement>(null);

    const toggleItem = () => setIsOpen(!isOpen);

    useEffect(() => {
        if(contentRef) setMaxHeight(isOpen ? `${contentRef.current?.scrollHeight}px` : '0px');
    }, [isOpen]);

    return (
        <div className="item-container">
            <button className='w-full cursor-pointer center-between' onClick={toggleItem}>{btnTitle} <FontAwesomeIcon icon={faAngleDown} className={`icon ${isOpen && 'show'}`} /></button>

            <ul ref={contentRef} style={{maxHeight}} className="inline-block">
                {links.map(link => (
                    <li key={link.title}>
                        <a href={link.href} className="block">{link.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
