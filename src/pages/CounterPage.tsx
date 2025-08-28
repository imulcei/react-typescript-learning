import { useState } from 'react';

const CounterPage = () => {
    /**
     * TODO Déclaration de l'état stockant la valeur du compteur
     * 
     * Plus d'information sur la déclaration des useState : https://www.carlrippon.com/typed-usestate-with-typescript/
     */
    const [count, setCount] = useState(0);

    /**
     * TODO implémenter Fonction permettant d'incrémenter l'état du compteur.
     * 
     * Utilisée en tant que "handler" d'un évènement "click".
     */
    function handleClickCounter() {
        setCount(count + 1);
    }

    /**
     * On renvoie le JSX correspond à ce qui est à afficher
     */
    return (
        <>
            <h4>Vous avez cliqué {count} fois.</h4>
            <button onClick={handleClickCounter}>
                Compteur ++
            </button>
        </>
    )
}

export default CounterPage;