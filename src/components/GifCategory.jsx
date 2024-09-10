import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifCategory = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{ category }</h3>
            { isLoading && (<h2>Cargando...</h2>) }
            <div className="card-grid"> {/* className es el sinonimo de JSX en HTML a class */}
                { images.map(i => <GifItem key={i.id} title={i.title} url={i.url} />) }
            </div>
        </>
    )
}
