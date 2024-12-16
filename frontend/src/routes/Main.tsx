import { MainSection, Terms } from "../components/ui";
import { MAIN_SECTIONS } from "../utils/ui-data";

export default function Main() {
    return (
        <>
            <main>
                {MAIN_SECTIONS.map((section => (
                    <MainSection
                        key={section.title}
                        title={section.title}
                        urlImg={section.urlImg}
                        description={section.description}
                        alt={section.alt}
                        btnAction={section.btnAction}
                        reverse={section.reverse}
                        typeSection={section.typeSection}
                    />
                )))}
            </main>

            <Terms />
        </>
    )
}
