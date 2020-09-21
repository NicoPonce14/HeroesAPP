import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroesById';

export const HeroScreen = ({history}) => {
    
    const {heroId} =useParams();
    const hero = useMemo(() => getHeroesById(heroId), [heroId]);
    if (!hero){
        return <Redirect to="/" />
    }
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;
    
    const handleReturn = () =>{
        if(history<=2){
            history.push('/');
        }else{
            history.goBack();

        }
    }
    return (
        <div className = "row mt-5 animate__animated animate__bounceIn ">
            <div className = "col-4">
                <img src={`../assets/heroes/${heroId}.jpg`} className="img-thumbnail" alt={superhero} />   
            </div>

            <div className = "col-8">
                <ul className="list-group">
                    <li className="list-group-item active"><h3>{superhero}</h3></li>
                    <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
                    <li className="list-group-item"><b>Alter Ego: </b>{alter_ego}</li>
                    <li className="list-group-item"><b>First Apperance: </b>{first_appearance}</li>
                    <li className="list-group-item"><b>Characters: </b>{characters}</li>
                </ul>

                <button className = "btn btn-info mt-2" onClick={handleReturn}>
                    Return
                </button>
            </div>
        </div>
    )
}
