import { useState } from "react";

let params = {
    url: "https://www.moogleapi.com/api/v1",
};

export const GetFinalFantasyMonsters = async () => {

    const response = await fetch(`${params.url}/monsters`);
    const data = await response.json();
    const monsters = data.map((monster) => {
        return {
            ...monster,
        }
    });
    return monsters;
};

export const GetFinalFantasyGames = async () => {

    const response = await fetch(`${params.url}/games`);
    const data = await response.json();
    const games = data.map((game) => {
        return {
            ...game,
        }
    });
    return games;
};

export const GetFinalFantasyCharacters = async () => {

    const response = await fetch(`${params.url}/characters`);
    const data = await response.json();
    const characters = data.map((char) => {
        return {
            ...char,
        }
    });
    return characters;
};

export const FindFinalFantasyCharacters = async (nameCharacter) => {

    const response = await fetch(`${params.url}/characters/search?name=${nameCharacter}`);
    const data = await response.json();
    let characters = data.map((character) => {
        return {
            ...character,
        }
    });
    return characters;
};

export const FindFinalFantasyMonters = async (nameMonster) => {

    const response = await fetch(`${params.url}/monsters/search?name=${nameMonster}`);
    const data = await response.json();
    const monsters = data.map((monster) => {
        return {
            ...monster,
        }
    });
    return monsters;
};