import { useEffect, useState, useRef } from "react";

const RandomWordPage = () => {
    console.log("Rendering component...");
    const [firstWord, setFirstWord] = useState<string>("");
    const [secondWord, setSecondWord] = useState<string>("");

    const firstRender = useRef(true);

    useEffect(() => {
        if (!firstRender.current && firstWord !== "") { alert("Clic sur le bouton de génération de mot 1"); }
    }, [firstWord]);

    useEffect(() => {
        if (!firstRender.current && secondWord !== "") { alert("Clic sur le bouton de génération de mot 2"); }
    }, [secondWord]);

    useEffect(() => {
        if (!firstRender.current) { alert("Clic sur un des boutons de génération de mot"); }
        if (firstRender.current) { firstRender.current = false; }
    }, [])

    /**
     * Fonction utilisée pour générer un mot aléatoire lors du clic sur le bouton 1
     */
    const handleClick1 = () => {
        setFirstWord(generateRandomWord());
    };

    /**
     * Fonction utilisée pour générer un mot aléatoire lors du clic sur le bouton 1
     */
    const handleClick2 = () => {
        setSecondWord(generateRandomWord);
    };

    /**
     * Génère un mot aléatoire
     */
    const generateRandomWord = (): string => {
        return Math.random().toString(36).replace(/[^a-z]+/g, '');
    }

    return (<>
        <div> {firstWord} - {secondWord} </div>
        <button onClick={handleClick1}>Changer premier mot</button>
        <button onClick={handleClick2}>Changer second mot</button>
    </>
    );
}

export default RandomWordPage;