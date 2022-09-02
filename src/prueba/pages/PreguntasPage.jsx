import React, { useState } from 'react';
import { useEffect } from 'react';

export const Preguntas = () => {
    // Desarrolle un for que vaya de 1 a 10 de manera sincrona y otro de manera asíncrona, muestra los resultados, ¿estos salen en orden? ¿Por qué?
    const [forSync, setForSync] = useState(0);
    const [forAsync, setForAsync] = useState(0);

    useEffect(() => {

        for (let i = 1; i <= 10; i++) {
            setForSync(i);
        }
        for (let i = 1; i <= 10; i++) {
            setTimeout(() => {
                setForAsync(i);
            }, 5000);
        }
        return () => {
            setForSync(0);
            setForAsync(0);
        }
    }, []);
    return (
        <>
            <h1>Preguntas</h1>
            <hr />

            <h2>Describa 5 funciones de agregación de MongoDB</h2>
            <ul>
                <li>$sum esta para sumar todos los valores de una columna</li>
                <li>$avg esta sirve para encontrar
                    el promedio de una columna</li>
                <li>$max esta sirve para encontrar
                    el valor maximo de una columna</li>
                <li>$min esta sirve para encontrar
                    el valor minimo de una columna</li>
                <li>$push esta sirve para agregar un valor a una columna</li>
            </ul>
            <hr />
            <h2>Explique las diferencias entre las funciones sincronas y asíncronas</h2>
            <p>
                Las funciones sincronas son las que se ejecutan en el mismo hilo de ejecución es codigo bloqueante en cambio las funciones asíncronas son las que se ejecutan en un hilo de ejecución independiente y no bloqueantes.
                ejemplo: Mientras ponemos la lavadora a lavar, nosotros podemos hacer otras cosas mientras la lavadora esta lavando. Eso es una funcion asincrona.
            </p>
            <hr />
            <h2>Desarrolle un for que vaya de 1 a 10 de manera sincrona y otro de manera asíncrona, muestra los resultados, ¿estos salen en orden? ¿Por qué?</h2>
            <p>
                Primero se ejecuta la funcion sincrona y luego la asincrona por qué la función sincrona se ejecuta en el mismo hilo de ejecución y la asincrona en un hilo de ejecución independiente.
            </p>
            <p>
                {forSync}
            </p>
            <p>
                {forAsync}
            </p>

            <h2>Qué métodos de seguridad se pueden utilizar en los consumos de servicios rest.</h2>
            <ul>
                <li>Autenticacón básica</li>
                <li>Autenticacón basada en token</li>
                <li>Autenticación basada en clave API</li>
                <li>OAuth 2.0</li>

            </ul>
        </>


    );
};


