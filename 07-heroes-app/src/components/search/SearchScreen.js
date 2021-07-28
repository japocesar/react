import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
// import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);

    
    // const [filteredHeroes, setFilteredHeroes] = useState([]);
    
    const [ {searchText}, handleInputChange ] = useForm({
        searchText: q
    });
    
    const filteredHeroes = useMemo(() => getHeroesByName( q ), [q])
    // const filteredHeroes = getHeroesByName( searchText );

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
        // setFilteredHeroes(heroes.filter( h => h.superhero.toLowerCase().includes(searchText.toLowerCase()) ));
    }

    return (
        <div>
            <h1>Search</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            value={ searchText }
                            onChange={ handleInputChange }
                            autoComplete="off"
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    { 
                        (q === '')
                        &&
                        <div className="alert alert-info animate__animated animate__fadeIn">
                            Search a hero
                        </div>
                    }

                    {
                        (q !== '' && filteredHeroes.length === 0)
                        &&
                        <div className="alert alert-danger">
                           The hero "{ q }" does not exist
                        </div>
                    }

                    {
                        <ul>
                            { filteredHeroes.map( hero => 
                                ( 
                                    <HeroCard { ...hero } key={ hero.id }/>
                                )
                            )}
                        </ul>
                    }
                   
                </div>
            </div>
        </div>
    )
}
