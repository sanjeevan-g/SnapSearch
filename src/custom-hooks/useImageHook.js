import axios from "axios";
import { useState, useEffect } from "react";


export default function useLoadImageHook(query) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);

  const [images, setImages] = useState([]);


  const apiKey = "ca370d51a054836007519a00ff4ce59e";
  //const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
  useEffect(() => {
    setIsLoading(true)
    const controller = new AbortController();
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=20&format=json&nojsoncallback=1`,
      {
        signal: controller.signal
      })
      .then(response => {

        setImages(response.data.photos.photo);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        )
        setIsLoading(false);
        setError(true);
      });

    return () => {
      controller.abort()
    }
  }, [query])


  return [isLoading, images, isError]
}