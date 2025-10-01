import styles from "./LeftBar.module.scss"

export const LeftBar = () =>{
    return(
        <div className={styles.leftBar}>
            <ul>
                <li>User</li>
                <li>Home</li>
                <li>Fitness</li>
                <li>Setting</li>
            </ul>
        </div>
    )
}