import css from '../style/Navbar.module.css';
import {Link} from "react-router-dom";

function Navbar() {

    return (
        <>
            <div className={css.header}>
                <div className={css.navBar}>
                    <Link to='/' className={css.navbarItem}>
                        <h2 className={css.navbarText}>Home</h2>
                    </Link>
                    <Link to='/' className={css.navbarItem}>
                        <h2 className={css.navbarText}>About</h2>
                    </Link>
                    <Link to='/' className={css.navbarItem}>
                        <h2 className={css.navbarText}>menu</h2>
                    </Link>
                    <Link to='/' className={css.navbarItem}>
                        <h2 className={css.navbarText}>Blog</h2>
                    </Link>
                    <Link to='/' className={css.navbarItem}>
                        <h2 className={css.navbarText}>Shop</h2>
                    </Link>
                    <Link to='/' className={css.navbarItem}>
                        <h2 className={css.navbarText}>Contact</h2>
                    </Link>
                </div>
                <div className={css.logoBar}>
                    <Link to='/' className={css.logoItem}>
                        <h1 className={css.h1}>Your logo</h1>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;