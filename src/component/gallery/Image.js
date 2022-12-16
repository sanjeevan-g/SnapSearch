export default function Image( { url , title} ) {

    return (
        <li>
            <img src={url} alt={title} />
        </li>
    )
}