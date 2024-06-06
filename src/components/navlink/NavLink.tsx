'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navlink.module.css';

interface LinkItem {
    path: string;
    title: string;
}

interface Props {
    item: LinkItem;
}

export const NavLink = ({ item }: Props) => {
    const pathName = usePathname();
    const linkClassName = `${styles.container}${
        pathName === item.path ? ' ' + styles.active : ''
    }`;

    return (
        <Link href={item.path} className={linkClassName}>
            {item.title}
        </Link>
    );
};
