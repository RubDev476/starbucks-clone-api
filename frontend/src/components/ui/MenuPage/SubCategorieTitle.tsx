export default function SubCategorieTitle({ title }: { title: string }) {
    return (
        <div className="subcategorie-title-container">
            <p>{title}</p>

            <hr />
        </div>
    )
}