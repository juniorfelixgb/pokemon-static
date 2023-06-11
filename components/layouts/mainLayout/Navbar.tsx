import Image from 'next/image';
import NextLink from 'next/link';
import { useTheme, Text, Spacer, Container } from "@nextui-org/react";

export const Navbar = () => {

    const { theme } = useTheme();

    return (
        <div>
            <nav style={{
                display: "flex",
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "start",
                padding: "0px 50px",
                backgroundColor: theme?.colors.gray100.value,
            }}>
                <Image
                    src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'}
                    alt='icono app'
                    width={70}
                    height={70}
                />
                <NextLink href='/' passHref>
                    {
                        <Container css={{
                            display: 'flex'
                        }}>
                            <Text h1 color='yellow'>
                                P
                            </Text>
                            <Text color="white" h2>
                                ok&eacute;mon
                            </Text>
                        </Container>
                    }
                </NextLink>

                <Spacer css={{ flex: 1 }} />

                <NextLink href='/favorites' passHref>
                    <Text color="white">Favoritos</Text>
                </NextLink>
            </nav>
        </div>
    );

};
