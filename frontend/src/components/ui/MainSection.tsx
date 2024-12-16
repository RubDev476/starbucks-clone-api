import type { MainSectionProps } from "../../types/components-props";

export default function MainSection({urlImg, title, alt, description, btnAction, typeSection, reverse}: MainSectionProps) {
    return (
        <section className={`${typeSection} max-width-content`} >
            <div className={`md-flex ${reverse && 'reverse'}`} >
                <div className="img-container all-center w-50-50">
                    <img src={urlImg} alt={alt} />
                </div>

                <div className="text-container all-center text-center w-50-50">
                    <div className="text-sub-container">
                        {title.includes('bean') ? (
                            <h1 className="title">
                                <span>{title}</span>
                            </h1>
                        ) : (
                            <h2 className="title">
                                <span>{title}</span>
                            </h2>
                        )}

                        <p>{description}</p>

                        <a href="#" className={`${'link-' + typeSection} inline-block`} >{btnAction}</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
