import { useRef, useState } from "react";

import styles from "./ClockPage.module.css";

/**
 * Page présentant une horloge interactive
 */
const ClockPage = () => {

    // Indice sur ce qu'il faudrait stocker : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date
    const [now, setNow] = useState(new Date);
    const timerRef = useRef<number | null>(null);

    /**
     * Fonction permettant de démarrer l'horloge
     */
    function handleStartClick() {
        if (!timerRef.current) {
            timerRef.current = setInterval(() => setNow(new Date()), 1000);
        }
    }


    /**
     * Fonction permettant de stopper l'horloge
     */
    function handleStopClick() {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    }

    return (
        <>
            <div className={styles.clockContainer}>
                {now.toLocaleDateString()} {now.toLocaleTimeString()}
            </div>
            <button onClick={handleStartClick}>Start</button>
            <button onClick={handleStopClick}>Stop</button>
        </>
    );
}

export default ClockPage;