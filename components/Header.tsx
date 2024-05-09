import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/header.css';
import '../styles/global.css';

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header>
            <div className="mobile-icon" onClick={toggleMenu}>
                {!showMenu ? (
                    <Image src="/images/menu-icon.png" alt="Menu Icon" width={30} height={30} />
                ) : (
                    <Image src="/images/close-icon.png" alt="Close Icon" width={30} height={30} />
                )}
            </div>
            <ul className={showMenu ? 'menu-active' : ''}>
                <Link href='/'><Image className="logo" src="/images/logo-Citizen-Pulse.png" alt="Logo de CitizenPulse" width={100} height={100} /></Link>
                <li><Link href='/propose'>Proposer</Link></li>
                <li><Link href='/vote'>Voter</Link></li>
                <li><Link href='/À propos'>À propos</Link></li>
                <li><Link href='/Contact'>Contact</Link></li>
            </ul>
        </header>
    );
}
