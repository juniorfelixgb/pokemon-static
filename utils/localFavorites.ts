

const toggleFavorite = (id: number): number[] => {
  
    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (favorites.includes(id)) {
        favorites = favorites.filter(pokeId => pokeId !== id);
    } else {
        favorites = [ ...favorites, id ];
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));

    return favorites;
};

const getPokemons = (): number[] =>
    JSON.parse(localStorage.getItem('favorites') || '[]');

const pokemonExist = (id: number): boolean => {

    if ( typeof window === 'undefined' ) return false;
    
    const favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]' );

    return favorites.includes( id );
};

export default {
    toggleFavorite,
    getPokemons,
    pokemonExist,
};