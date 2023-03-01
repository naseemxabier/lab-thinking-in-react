import { useState } from 'react';
function SearchBar({filtro}) {
    const [buscar, setBuscar] = useState("")
    const buscarHandler = (e) => {
        setBuscar(e.target.value)
        filtro(e.target.value)
    }
    return (
        <div>
            <div className="mb-3 mx-auto w-50">
                <label htmlFor="exampleFormControlTextarea1" className="form-label mx-auto">Search</label>
                <input class="form-control" type="text" value={buscar} aria-label="readonly input example" onChange = {buscarHandler}/>
                <input class="form-check-input mt-25 mx-auto" type="checkbox" value="" aria-label="Checkbox for following text input"/>Only show products in stock!
            </div>
        </div>

    )
}
export default SearchBar;