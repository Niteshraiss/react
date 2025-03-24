import { PokemonList } from '../PokemonList/PokemonList'
import { Search } from '../Search/Search'
import './pokedex.css'

export const Pokedex = () => {
    return (
        <>
            <div className='pokedex-wrapper'>
                <h1>POKEDEX</h1>
                <Search />
                <PokemonList/>
            </div>
        </>
    )
}
