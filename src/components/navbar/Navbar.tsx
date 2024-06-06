import React from 'react';
import { NavLink } from '../navlink';
import styles from './navbar.module.css';

const links = [
    { title: 'Главная', path: '/' },
    { title: 'Блог', path: '/blog' },
    { title: 'Контакты', path: '/contact' },
];

const Links = () =>
    links.map((link) => <NavLink item={link} key={link.title} />);

export const Navbar = () => {
    return (
        <div className={styles.container}>
            <Links />
        </div>
    );
};
