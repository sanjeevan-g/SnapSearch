import { useParams } from "react-router-dom";
import useLoadImageHook from "../../custom-hooks/useImageHook";
import Error from "../error-page/Error";
import Gallery from "../gallery/Gallery";
import { LoadCardGrid } from "./Loadingcard";


export default function Search() {
    let {inputquery} = useParams();


    let [isloading,images,error] = useLoadImageHook(inputquery);
    return (
        <div className="search-content">
               <h5 className="gallery-title">{`${inputquery} Pictures`}</h5>
            {
                isloading ? <LoadCardGrid /> : 
                error ? <Error content={"image not found/fetch error"} /> :
                 <Gallery images={images} />
            }
            
        </div>
       )
}
