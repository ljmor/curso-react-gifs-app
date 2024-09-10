// Esto es un hook personalizado (Custom hook)
// No es mas que una funcion que retorna un valor para ayudarnos a ahorrar 
// codigo y reusar codigo.
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {
  
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // UseEffect es un hook de react que permite disparar un efectu (una funcion)
    // solo la primera vez que se ejecuta el renderizado.
    // Asi evitamos que cada que se redibuje el componente no se vuelva a 
    // ejecutar la peticion a la API de Gifs.
    useEffect( () => {
        getGifs(category)
            .then(imgs => setImages(images.concat(imgs)));
        setIsLoading(false);

    }, [ ]);

    return ({
        images: images,
        isLoading: isLoading
    })

}
