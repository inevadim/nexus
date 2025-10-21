import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./LeftBar.module.scss"
import {
  faDumbbell,
  faGear,
  faHouse,
  faUser,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons"
import { NavLink } from "react-router"
import { Path } from "@/common/routing"

export const LeftBar = () => {
  return (
    <div className={styles.leftBar}>
      <ul>
        <li>
          <FontAwesomeIcon icon={faUser} />
          <NavLink to={Path.User}>User</NavLink>
        </li>
        <li>
          <FontAwesomeIcon icon={faHouse} />
          <NavLink to={Path.Home}>Home</NavLink>
        </li>
        <li>
          <FontAwesomeIcon icon={faDumbbell} />
          <NavLink to={Path.Fitness}>Fitness</NavLink>
        </li>
        <li>
          <FontAwesomeIcon icon={faGear} />
          <NavLink to={Path.Settings}>Settings</NavLink>
        </li>
        <li>
          <FontAwesomeIcon icon={faUserCheck} />
          <NavLink to={Path.Login}>Log in</NavLink>
        </li>
      </ul>
    </div>
  )
}
