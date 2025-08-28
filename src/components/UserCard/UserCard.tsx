// Plus d'informations sur le CSS modulaire : https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/
import styles from './UserCard.module.css'; // Import css modules stylesheet as styles

export interface Coordinates {
    lat: string,
    lng: string
}

export interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: string
    geo: Coordinates
}

export interface Company {
    name: string,
    catchPhrase: string,
    bs: string
}

export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: Company
}

export const UserCard = ({ user }: { user: User }) => {

    return (
        <>
            <div className={styles.userCard}>
                {
                    <>
                        <h3>{user.name}</h3>
                        <p>pseudo: {user.username}</p>
                        <p>email: {user.email}</p>
                        <p>phone: {user.phone}</p>
                    </>
                }
            </div>
        </>
    )
}
