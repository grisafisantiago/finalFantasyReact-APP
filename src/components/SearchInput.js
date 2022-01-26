import React, { useState } from "react";
import PropTypes from "prop-types";

export const SearchInput = ({ setCharacter }) => {

    const [InputValue, setInputValue] = useState("");

    let InputChanged = (event) => {
        setInputValue(event.target.value);
    };

    let capitalizarTermino = () => {
        let palabra = InputValue;
        return palabra.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
    };

    let SubmitChanges = (event) => {
        event.preventDefault();
        if (InputValue.trim().length > 2) {
            setInputValue("");
            setCharacter((char) => ([capitalizarTermino()]));
        }
    };

    return (
        <>
            <form autoComplete="off" onSubmit={SubmitChanges}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5 col-sm-offset-3">
                            <div id="imaginary_container">
                                <div className="input-group stylish-input-group">
                                    <input type="text" className="form-control" placeholder="Search Character"
                                        minLength={3} value={InputValue} id="input" onChange={InputChanged} />
                                    <span className="input-group-addon">
                                        <button type="submit">
                                            <span className="glyphicon glyphicon-search"></span>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

SearchInput.defaultProps = {
    setCharacter: PropTypes.func.isRequired,
};
