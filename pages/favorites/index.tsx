import { useEffect, useState } from "react";
import { NextPage } from "next";
import { MainLayout } from "@/components/layouts";
import { NoFavorites, Favorites } from "@/components/ui";
import { localFavorites } from "@/utils";

const FavoritesPage: NextPage = () => {

    const [ favorites, setFavorites ] = useState<number[]>([]);

    useEffect(() => {
        setFavorites(localFavorites.getPokemons());
    }, []);

    return (
        <MainLayout title="Your favorites pokemon's">
            
            {
                favorites.length === 0
                    ? ( <NoFavorites /> )
                    : ( <Favorites favorites={favorites} /> )
            }

        </MainLayout>
    )
};

export default FavoritesPage;