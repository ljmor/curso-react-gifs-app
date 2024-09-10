import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value); // Para que permita escribir en el input y no se bloquee
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if ( inputValue.trim().length <= 1 ) return; // Debe haber mas de un caracter como minimo para buscar
        // setCategories( cate => cate.concat(inputValue) );
        onNewCategory(inputValue.trim()); // Envia el valor al componente padre a traves de props

        // Luego de darle a enter para que quede limpio el input
        setInputValue('');
    }

    return (

        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar GIFs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>

    )
}
