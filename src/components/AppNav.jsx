import { NavLink } from "react-router-dom"
import styles from "./AppNav.module.css"

function AppNav() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <NavLink to="cities" end>Cities</NavLink>
                </li>
                <li>
                    <NavLink to="countries" end>Countries</NavLink>
                </li>
                
            </ul>
        </nav>
    )
}

export

default AppNav
