// Generated by https://quicktype.io

export interface PokemonResponse {
    count:    number;
    results:  SmallPokemon[];
}

export interface SmallPokemon {
    name: string;
    url:  string;
    id:   number;
    img:  string;
}