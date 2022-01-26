import React from "react";
import PropTypes from "prop-types";

export const CharacterCard = ({ character }) => {
    return (
        <>  <hr/>
            <img className="card-img-top img-responsive center-block mt-5" src={character.pictures[0].url}></img>
            <p>{character.description}</p>
            <hr/>
        </>
    );

};

CharacterCard.propTypes = {
    character: PropTypes.object.isRequired,
};

CharacterCard.defaultProps = {

};