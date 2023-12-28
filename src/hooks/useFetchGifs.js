import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);

    const [isLoading, setLoading] = useState(true);

    const getImages = async() => {
      setImages( await getGifs(category));
      setLoading(false);
    }
     useEffect(()=>{ getImages() } , []);
   
  return {
    images,
    isLoading       

  }  
}
