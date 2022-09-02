import React from "react";
import { Link } from "react-router-dom";

export const UsuariosCard = ({ email, first_name, last_name, avatar }) => {
  return (
    <>
      <div className="col-md-4 d-flex align-items-stretch animate__animated animate__fadeIn">
        <div className="card bg-light">
          <img className="card-img-top " src={avatar} alt="Usuario" />
          <div className="card-body">
            <h4 className="card-title">{first_name + last_name}</h4>
            <p className="card-text">
              <small>{email}</small>
            </p>
          </div>
        </div>
      </div>
     
    </>
  );
};
