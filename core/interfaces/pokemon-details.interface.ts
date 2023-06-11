// Generated by https://quicktype.io

export interface PokemonDetails {
    id:                       number;
    name:                     string;
    abilities:                Ability[];
    base_experience:          number;
    forms:                    Species[];
    moves:                    Move[];
    species:                  Species;
    sprites:                  Sprites;
    types:                    Type[];
    weight:                   number;
    height:                   number;
}

export interface Ability {
    ability:   Species;
    is_hidden: boolean;
    slot:      number;
}

export interface Species {
    name: string;
    url:  string;
}

export interface Move {
    move:   Species;
}

export interface Sprites {
    back_default:       string;
    back_shiny:         string;
    front_default:      string;
    front_shiny:        string;
    other?:             Other;
}

export interface DreamWorld {
    front_default: string;
    front_female:  null;
}

export interface Other {
    dream_world:        DreamWorld;
}

export interface Type {
    slot: number;
    type: Species;
}
