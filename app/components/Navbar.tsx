'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          AutoShow
        </Link>
        
        <div className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <Link href="/" className={styles.menuItem}>首頁</Link>
          <Link href="/about" className={styles.menuItem}>關於我們</Link>
          <Link href="/team" className={styles.menuItem}>團隊介紹</Link>
          <Link href="/cars" className={styles.menuItem}>商品列表</Link>
        </div>

        <button 
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;