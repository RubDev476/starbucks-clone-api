import type { AccordionItemProps } from "../../../types/components-props"

export default function ColumnItems({ btnTitle, links }: AccordionItemProps) {
    return (
        <div className="column-items-container">
            <p>{btnTitle}</p>

            <ul className="inline-block">
                {links.map((link) => (
                    <li key={link.title}>
                        <a href={link.href} className="block">{link.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
