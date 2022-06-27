import React, {useEffect, useMemo} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import { getHeroesById } from '../helpers';

export const HeroByIdPage = () => {
    const {id} = useParams();
    const hero = useMemo(() =>getHeroesById(id),[id] );
    const navigate = useNavigate();
    useEffect(() => {
        if(!hero){
            navigate('/marvel')
        }
    }, [navigate]);

    const onNavigateBack = () => {
        navigate(-1,{
            replace: true,
        });
    }

    return (
        <>
            <div className='row mt-5'>
                  <div className='col-4'>
                      <img src={`/assets/heroes/${id}.jpg`} alt={hero.superhero}  className='img-thumbnail animate__animated animate__fadeInLeft'/>
                  </div>
                <div className='col-8'>
                    <h3>{hero.superhero}</h3>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'><b>Alter ego:</b>{hero.alter_ego}</li>
                        <li className='list-group-item'><b>Publisher:</b>{hero.publisher}</li>
                        <li className='list-group-item'><b>First Appearance:</b>{hero.first_appearance}</li>
                    </ul>
                    <h5 className='mt-3'>Characters</h5>
                    <p>{hero.characters}</p>
                    <button className='btn btn-outline-primary' onClick={onNavigateBack}>Back</button>
                </div>
            </div>

        </>
    );
};

