import { pokeApi } from "@/api";
import { PokemonDetails, PokemonResponse } from "@/core";

export const getPokemonInfo = async (nameOrId: string) => {

    const { data } = await pokeApi.get<PokemonDetails>(`/pokemon/${nameOrId}`);
    return data;
};

export const getPokemonLimited = async () => {
    
  const { data } = await pokeApi.get<PokemonResponse>('/pokemon?limit=151');
  return data;
};