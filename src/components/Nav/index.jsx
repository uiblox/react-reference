import { NavLink } from "react-router-dom";
import classes from "./styles.module.css";

export const Nav = () => {
    return (
        <div className={classes.nav}>
            <ul>
                <li className={classes['nav-itm']}>
                    <NavLink className={classes['nav-link']} to="/"> Home</NavLink>
                </li>
                <li className={classes['nav-itm']}>
                    <NavLink className={classes['nav-link']} to="/simpleList">Simple list</NavLink>
                </li>
                <li className={classes['nav-itm']}>
                    <NavLink className={classes['nav-link']} to="/simpleList2">Simple list 2</NavLink>
                </li>
                <li className={classes['nav-itm']}>
                    <NavLink className={classes['nav-link']} to="/simpleList">Hooks - useState</NavLink>
                </li>
            
            </ul>
        </div>
    )
}