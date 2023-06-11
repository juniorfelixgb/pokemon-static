import { ChangeEvent, useEffect, useState } from "react";
import { GetStaticProps, NextPage } from "next";
import { FormElement, Grid, Input } from '@nextui-org/react';
import { pokeApi } from "@/api";
import { MainLayout } from "@/components/layouts";
import { PokemonResponse, SmallPokemon } from "@/core";
import { Pokemon } from "@/components/pokemon";

type Props = {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {

  const [ search, setSearch ] = useState('');

  return (
    <MainLayout title="Listado de Pokemons">

      <Input 
        clearable
        underlined
        labelPlaceholder="Search"
        name='search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        css={{
          display: 'flex',
          marginTop: '35px',
          marginBottom: '10px'
        }}
        color="secondary"
      />
      
      <Grid.Container gap={2} justify="flex-start">
        {
          search && search.length > 0 ? (
            pokemons?.filter(query => 
              (query.name.toLowerCase().includes(search.toLowerCase())) ||
              (query.id === parseInt(search))
            ).map(
              pokemon => (<Pokemon key={pokemon.id} pokemon={pokemon} />)
            )
          ) : (
            pokemons?.map(
              pokemon => (<Pokemon key={pokemon.id} pokemon={pokemon} />)
            )
          )
        }
      </Grid.Container>

    </MainLayout>
  );

};

export const getStaticProps: GetStaticProps = async (context) => {

  const { data } = await pokeApi.get<PokemonResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }));
   
  return {
    props: {
      pokemons
    }
  }
};

export default HomePage;
