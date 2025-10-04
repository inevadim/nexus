import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./LeftBar.module.scss"
import { faDumbbell, faGear, faHouse, faUser } from "@fortawesome/free-solid-svg-icons"

export const LeftBar = () =>{
    return(
        <div className={styles.leftBar}>
            <ul>
                <li><FontAwesomeIcon icon={faUser} /><span>User</span></li>
                <li><FontAwesomeIcon icon={faHouse} /><span> Home</span></li>
                <li><FontAwesomeIcon icon={faDumbbell} /><span>Fitness</span></li>
                <li><FontAwesomeIcon icon={faGear} /><span>Setting</span></li>
            </ul>
        </div>
    )
}