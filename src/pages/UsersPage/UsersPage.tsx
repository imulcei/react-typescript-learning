import { useEffect, useState } from "react";

import { User, UserCard } from "../../components/UserCard/UserCard";

// import usersData from "../../assets/data/users.tsx";

import styles from "./UsersPage.module.css";

// TODO importer les utilisateurs du fichier "/assets/data/users.tsx"

// TODO ajouter le css modulaire pour cette page

const UsersPage = () => {
    // Déclaration d'un state permettant de stocker les utilisateur
    const [users, setUsers] = useState<User[] | []>([]);

    // TODO compléter ce useEffect qui se déclenche à la création du composant
    // Dans un premier temps : complétez le avec la tableau d'utilisateurs provenant du fichier "assets/data/users.tsx"
    //
    // Dans un deuxième temps, ajoutez une requête HTTP pour l'obtention des données 
    // Url à utiliser : https://jsonplaceholder.typicode.com/users
    // Tutoriel pouvant vous aider : https://dev.to/antdp425/react-fetch-data-from-api-with-useeffect-27le
    // useEffect(() => {
    //     setUsers(usersData);
    // }, []);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json()) // response : en-tête et infos sur le retour de la requête
            .then(data => setUsers(data)) // recupère le contenu de la réponse et le traite 
    }, [])

    return (
        <div className={styles.usersContainer}>
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );

}

export default UsersPage;