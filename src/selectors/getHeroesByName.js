import { heroes } from '../data/heroes';

export const getHeroesByName = (superheroe) => {
  
    if (superheroe === ''){
        return [];
    }
    
    superheroe = superheroe.toLocaleLowerCase();
    return heroes.filter(hero=>hero.superhero.toLocaleLowerCase().includes(superheroe));

}