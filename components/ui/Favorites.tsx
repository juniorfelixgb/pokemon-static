import { FC } from "react";
import { Grid } from '@nextui-org/react';
import { PokemonCard } from "./PokemonCard";


type Props = {
    favorites: number[];
};

export const Favorites: FC<Props> = ({ favorites }) => {
    return (
        <Grid.Container gap={2} direction="row" justify="flex-start">

            {
                favorites.map(id => <PokemonCard key={id} pokemonId={id} />)
            }

        </Grid.Container>
    );
};