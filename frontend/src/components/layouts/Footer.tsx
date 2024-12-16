import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AccordionItem, ColumnItems } from "../ui";
import { ACCORDION_ITEMS, SOCIAL_MEDIA_ICONS } from "../../utils/ui-data";

export default function Footer() {
    return (
        <footer>
            <div className="max-width-content margin-auto">
                <div className="accordion-container">
                    {ACCORDION_ITEMS.map(item => <AccordionItem key={item.btnTitle} btnTitle={item.btnTitle} links={item.links} />)}
                </div>

                <div className="columns-container">
                    {ACCORDION_ITEMS.map(item => <ColumnItems key={item.btnTitle} btnTitle={item.btnTitle} links={item.links} />)}
                </div>

                <hr />

                <div className="social-media-icons">
                    <ul className="flex">
                        {SOCIAL_MEDIA_ICONS.map(icon => (
                            <li key={icon.label}>
                                <a href="#" className="relative all-center" aria-label={icon.label}>
                                    <div className="bg-icon relative w-full h-full">
                                        <FontAwesomeIcon icon={icon.icon} className="w-full h-full inline-block" style={{height: '100%'}} />
                                    </div>

                                    <div className="circle-hover"></div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <ul className="politics inline-block">
                    <li>
                        <a href="#">Privacy Notice</a>
                    </li>
                    <li>
                        <a href="#">Consumer Health Privacy Notice</a>
                    </li>
                    <li>
                        <a href="#">Terms of Use</a>
                    </li>
                    <li>
                        <a href="#">Do Not Share My Personal Information</a>
                    </li>
                    <li>
                        <a href="#">CA Supply Chain Act</a>
                    </li>
                    <li>
                        <a href="#">Accesibility</a>
                    </li>
                    <li>
                        <a href="#">Cookie Preferences</a>
                    </li>
                </ul>

                <span className="block">© {new Date().getFullYear()} Created by RubDeveloper</span>
            </div>
        </footer>
    )
}
