import React, { useMemo } from 'react'
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {
    
    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);

    const [ formValues, handleInputChange ] = useForm( {
        search: q
    });
   
    const {search} = formValues;

    //se implementa la busqueda
    const heroesFilter =  useMemo(() => getHeroesByName(q), [q]);
    
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${search}`)
    }
    
    return (
        <div className="animate__animated animate__fadeInUp">
            <h1>Search Screen</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>

                    <form onSubmit={handleSearch}>
                        <input
                            type = "text"
                            className = "form-control"
                            placeholder ="Busca a tu Heroe"
                            name = "search"
                            onChange={handleInputChange}
                            value={search}

                        />

                        <button
                            className = "btn btn-success m-1 btn-block"
                            type = "submit"
                        >
                            Buscar...
                        </button>
                    </form>
                </div>

                <div className ="col-7">
                    <h4>Result</h4>
                    <hr/>
                    {
                        (q=== '')
                            &&
                            <div className = "alert alert-info">
                                Buscar un Heroe
                            </div>
                    }

                    {
                        (q !== '' && heroesFilter.length === 0)
                            &&
                            <div className = "alert alert-danger">
                                No existe un heroe con el nombre {q}
                            </div>
                    }

                    {
                        heroesFilter.map(
                            hero=> (
                                <HeroCard
                                    key = {hero.id}
                                    {...hero}
                                />
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
}
