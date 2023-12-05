import React from "react";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src="./meme-logo.png" alt="meme logo" className={styles.logo}/>
                <h1 className={styles.logoTitle}>Meme Generator</h1>
            </div>

            <p className={styles.headerDesc}>React dynamic project</p>
        </header>
    )
}

