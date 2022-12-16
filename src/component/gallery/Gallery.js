import Image from "./Image";

export default function Gallery({images}) {

    const imgArr = [...images].map( image => {
        let {farm,server,id, secret,title  } = image;
        let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;

        return <Image key={id} url={url} title={title} />
    })

    return (
        <div className="gallery-container">
            <div>
                <ul className="img-grid">
                    {imgArr.length > 0 && imgArr}
                </ul>
            </div>
        </div>
    )
}