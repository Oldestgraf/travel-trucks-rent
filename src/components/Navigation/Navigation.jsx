import styles from "./Navigation.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const buildLinkClass = ({ isActive }) => {
    return clsx(styles.link, isActive && styles.active);
}

const Navigation = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logoWrapper}>
                    <svg className={styles.logo}>
                        <use href="/sprite.svg#logo" />
                    </svg>
                </div>
                <div className={styles.links}>
                    <NavLink to="/" state={{ from: "/"}} className={buildLinkClass}>
                        Home
                    </NavLink>
                    <NavLink to="/catalog" className={buildLinkClass}>
                        Catalog
                    </NavLink>
                </div>
            </nav>
        </header>
    )
} 

export default Navigation;