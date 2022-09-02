import React, { useEffect, useState } from "react";
import { UsuariosCard } from "./UsuariosCard";

export const UsuariosList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [usuarios, setUsuarios] = useState([]);
  const [page, setPage] = useState(1);
  
 

  useEffect(() => {
    if (page === 0) return;
    const fetchData = async () => {
      try {
        const response = await fetch(`https://reqres.in/api/users?page=${page}`);
        const data = await response.json();
        setIsLoading(false);
        setUsuarios(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [page]);

  const handleNextPage = () => {
    if (page === 2) return alert("No hay más usuarios");

    setPage(prevPage => prevPage + 1);
  }
  const handlePreviousPage = () => {
    //Validar que no se pueda retroceder a la página 1
    if (page === 1) return alert("No hay más usuarios");

    setPage(prevPage => prevPage - 1);
  }


  return (
    <div className="row rows-cols-1 row-cols-md3 g-3">
      {isLoading ? (
        <span className="sr-only">Loading...</span>
      ) : (
        usuarios.map(({ id, email, first_name, last_name, avatar }) => (
          <UsuariosCard
            key={id}
            email={email}
            first_name={first_name}
            last_name={last_name}
            avatar={avatar}
          />
        ))
        )
      }
      <button className="btn btn-primary" onClick={handlePreviousPage}>
        Anterior
      </button>
      <button className="btn btn-primary" onClick={handleNextPage}>
        Siguiente
      </button>
   
    </div>
  );
};
