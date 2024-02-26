import css from '../style/Navbar.module.css';
import {Link} from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {

    return (
        <>
            <div className={css.header}>
                <div className={css.navBar}>
                    <a href='#home' className={css.navbarItem}>
                        <h2 className={css.navbarText}>Home</h2>
                    </a>
                    <a href='#about' className={css.navbarItem}>
                        <h2 className={css.navbarText}>About</h2>
                    </a>
                    <a href='#menu' className={css.navbarItem}>
                        <h2 className={css.navbarText}>Menu</h2>
                    </a>
                    <a href='#blog' className={css.navbarItem}>
                        <h2 className={css.navbarText}>Blog</h2>
                    </a>
                    <a href='#shop' className={css.navbarItem}>
                        <h2 className={css.navbarText}>Shop</h2>
                    </a>
                    <a href='#contact' className={css.navbarItem}>
                        <h2 className={css.navbarText}>Contact</h2>
                    </a>
                </div>
                <div className={css.logoBar}>
                    <Link to='/' className={css.logoItem}>
                        <img src={logo} />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;