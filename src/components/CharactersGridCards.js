import React from "react";
import PropTypes from "prop-types";
import { GetCharacters } from "../hooks/LoadCharacters";
import { CharacterCard } from "./CharacterCard";
import Loading from "../assets/loading.gif";

export const CharactersGridCards = ({ character }) => {

    const { data: characters, loading } = GetCharacters(character);
    return (
        <>
            <h5 className="text-center animate_animated animate__flash">{loading && <h2><img className="loading" src={Loading} />Loading...</h2>}</h5>
            <div className="main-container container">
                <div>
                    {
                        characters.map(character => {
                            return <CharacterCard key={character} character={character} />
                        })
                    }
                </div>
            </div>
        </>
    );
};

CharactersGridCards.propTypes = {
    character: PropTypes.string.isRequired,
};