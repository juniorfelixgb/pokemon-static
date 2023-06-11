import { useState } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Grid, Card, Button, Container, Text, Image } from "@nextui-org/react";
import confetti from "canvas-confetti";
import { getPokemonInfo, getPokemonLimited, localFavorites } from "@/utils";
import { MainLayout } from "@/components/layouts";
import { PokemonDetails, PokemonResponse } from "@/core";

type Props = {
    pokemon: PokemonDetails;
};

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {

    const [isInFavorite, setIsInFavorite] = useState(localFavorites.pokemonExist(pokemon.id));

    const onToggleFavorite = () => {
        localFavorites.toggleFavorite(pokemon.id);
        setIsInFavorite(!isInFavorite);

        if (isInFavorite) return;

        confetti({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin: {
                x: 1,
                y: 0
            },
        });
    };

    return (
        <MainLayout title={pokemon.name}>

            <Grid.Container css={{ marginTop: '5px' }} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card isHoverable={true} css={{ padding: '30px' }}>
                        <Card.Body>
                            <Card.Image
                                src={pokemon.sprites.other?.dream_world.front_default || 'no-image.png'}
                                alt={pokemon.name}
                                width={'100%'}
                                height={200} />
                        </Card.Body>
                        <hr />
                        <Card.Body>
                            <Text size={30}>Features:</Text>
                            height: {pokemon.height} X weight: {pokemon.weight}
                            <Text size={30}>Experience: {pokemon.base_experience}</Text>
                            <Text size={30}>Forms:</Text>
                            <Container direction="row" display="flex" gap={0}>
                                {
                                    pokemon.forms.map((form, id) => (<Text key={id}>{form.name}</Text>))
                                }
                            </Container>
                            <Text size={30}>Most used moves:</Text>
                            <Container direction="row" display="flex" gap={0}>
                                {
                                    pokemon.moves.slice(0, 5).map((move, id) => (<Text key={id}>{move.move.name}</Text>))
                                }
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Text transform="capitalize" h1>{pokemon.name}</Text>

                            <Button
                                color={'gradient'}
                                ghost={!isInFavorite}
                                onPress={onToggleFavorite}
                            >{ isInFavorite ? 'Guardar en' : 'Remover de' } favoritos</Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites:</Text>
                            <Container direction="row" display="flex" gap={0}>
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                            </Container>
                            <hr />
                            <Text size={30}>Abilities:</Text>
                            <Container direction="row" display="flex" gap={0}>
                                {
                                    pokemon.abilities.map((ability, id) => (<Text key={id}>{ability.ability.name}</Text>))
                                }
                            </Container>
                            <hr />
                            <Text size={30}>Species:</Text>
                            <Container direction="row" display="flex" gap={0}>
                                <Text>{pokemon.species.name}</Text>
                            </Container>
                            <hr />
                            <Text size={30}>Types:</Text>
                            <Container direction="row" display="flex" gap={0}>
                                {
                                    pokemon.types.map((type, id) => (<Text key={id}>{type.type.name}</Text>))
                                }
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>

        </MainLayout>
    );
};

export const getStaticPaths: GetStaticPaths = async (context) => {

    const data = await getPokemonLimited();
    const paths = data.results.map(r => ({ params: { name: r.name.toLowerCase() } }));

    return {
        paths,
        fallback: false,
    }
};


export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { name } = params as { name: string };

    return {
        props: {
            pokemon: await getPokemonInfo(name.toLowerCase()),
        }
    }
};

export default PokemonByNamePage;
