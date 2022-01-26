import { useState, useEffect } from "react";
import { FindFinalFantasyCharacters } from "../helpers/GetAPIFinalFantasy";

export const GetCharacters = (character) => {

    const [characterFinded, setCharacter] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        return FindFinalFantasyCharacters(character).then((dataChar) => {
            setTimeout(() => {
                return setCharacter({
                    data: dataChar,
                    loading: false,
                });
            }, 3000);
        });
    }, [character]);

    return characterFinded;
};