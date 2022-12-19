import Error from "../error-page/Error";
import Image from "./Image";

export default function Gallery({ images }) {
    const imageFn = () => {
        const imgArr = [...images].map(image => {
            let { farm, server, id, secret, title } = image;
            let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;

            return <Image key={id} url={url} title={title} />
        })
        return imgArr;
    }

    return (
        <div className="gallery-container">
            <div>
                <ul className="img-grid">
                    {
                        images.length > 0 ? imageFn()
                            : <Error content={"image not found"} />
                    }
                </ul>
            </div>
        </div>
    )
}