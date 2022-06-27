import {heroes} from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
    const validPublisher = ['DC Comics','Marvel Comics'];


    if(!validPublisher.includes(publisher)){
        throw new Error(`Publisher ${publisher} is not valid publisher`);
    }

    return heroes.filter(heroe => heroe.publisher === publisher)
}