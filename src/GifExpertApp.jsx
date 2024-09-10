import { useState } from "react";
// Esta importacion mas limpia se logra gracias al index.js que creamos en la carpeta components
import { AddCategory, GifCategory } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Halo']);

    const addCategory = (value) => {
        if (categories.includes(value)) return; // Si la categoria ya existe no se debe volver a agrgar (A excepcion de si su capitalizacion cambia)

        setCategories(categories.concat(value));

    }

    return (
        <>
            {/* Titulo */}
            <h1>Expert App</h1>

            {/* Input */}
            {/* Los props de los componentes tambien pueden ser metodos/funciones */}
            <AddCategory
                // setCategories={setCategories} Para enviar la funcion de agregar categoria al componente
                onNewCategory={value => addCategory(value)} // Recibe el valor del input del componente y lo envia a la funcion addCategory
            />

            {/* Listado de items (Gifs) */}
            {categories.slice().reverse().map(cate => <GifCategory category={cate} key={cate} />)}
        </>
    )
}
