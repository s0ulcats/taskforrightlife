import React from 'react';
import { Link } from 'react-scroll';
import Logo from './Logo.png';
import styles from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <NavLink to={'/'}>
            <img src={Logo} alt="Logo" className={styles.logo} />
            </NavLink>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link
                        to="blog-section"
                        smooth={true}
                        duration={500}
                        className={styles.navLink}
                    >
                        Blog
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link
                        to="about-section"
                        smooth={true}
                        duration={500}
                        className={styles.navLink}
                    >
                        About Us
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link
                        to="search-section"
                        smooth={true}
                        duration={500}
                        className={styles.navLink}
                    >
                        Search
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link
                        to="contacts-section"
                        smooth={true}
                        duration={500}
                        className={styles.navLink}
                    >
                        Contacts
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link
                        to="faq-section"
                        smooth={true}
                        duration={500}
                        className={styles.navLink}
                    >
                        Faq
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
