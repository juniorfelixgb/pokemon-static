import { FC } from 'react';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { SmallPokemon } from "@/core";
import { useRouter } from 'next/router';

type Props = {
    pokemon: SmallPokemon
}

export const Pokemon: FC<Props> = ({ pokemon: { id, name, img, } }) => {

    const router = useRouter();

    const onClick = () => {
        router.push(`/name/${name}`);
    };

    return (
        <Grid xs={6} sm={3} md={2} xl={1} key={id}>
            <Card 
                isHoverable={true}
                isPressable={true}
                onClick={onClick}
            >
                <Card.Body css={{ p: 1 }}>
                    <Card.Image
                        src={img}
                        width={"100%"}
                        height={140}
                    />
                </Card.Body>
                <Card.Footer>
                    <Row justify="space-between">
                        <Text transform='capitalize'>{name}</Text>
                        <Text>#{id}</Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    );
};
