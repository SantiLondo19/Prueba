import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  publisher,
  first_appearance,
  characters, }) => {

  const heroImageUrl = `/assets/heroes/${id}.jpg`;
  const charactesByHero = <p className="card-text">{characters}</p>
  return (
    <>
      <div className="col-md-4 d-flex align-items-stretch animate__animated animate__fadeIn">
        <div className="card bg-light">
          <img className="card-img-top " src={heroImageUrl} alt={superhero} />
          <div className="card-body">
            <h4 className="card-title">{superhero}</h4>
            <p className="card-text">{alter_ego}</p>
            {
              (alter_ego !== characters) && (charactesByHero)
            }
            <p className="card-text"><small>{first_appearance}</small></p>

            <Link to={`/hero/${id}`}>
              Mas...
            </Link>
          </div>
        </div>
      </div>
    </>

  );
};
