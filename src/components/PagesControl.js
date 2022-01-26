import React, { useState } from "react";
import { SearchInput } from "./SearchInput";
import logo from "../assets/logo.png";
import { CharactersGridCards } from "./CharactersGridCards";


export const PagesControl = () => {

    const copyright = "(C) 2022 Santiago Grisafi";
    const [characters, setCharacter] = useState([]);

    return (
        <>
            <div className="main-container container">
                <h4 className="text-center"><img className="logo" src={logo} /></h4>
                <SearchInput setCharacter={setCharacter} />
            </div>
            <div className="pt-5">
                <div>
                    {
                        characters.map(character =>
                            <CharactersGridCards key={character} character={character} />
                        )
                    }
                </div>
            </div>
        </>
    );
};