"use client"

import Image from 'next/image';
import styles from './themeToggle.module.css'
import { useContext } from 'react';
import { ThemeContext } from '@/app/context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggle } = useContext(ThemeContext);

    return (
        <div className={styles.container}
            onClick={toggle}
            style={theme == 'dark'
                ? { backgroundColor: "white" }
                : { backgroundColor: "#0f172a" }
            }
        >
            <Image src="/moon.png" alt="sun" width={14} height={14} />
            <div
                className={styles.ball}
                style={theme == 'dark'
                    ? { left: 1, backgroundColor: "#0f172a" }
                    : { right: 1, backgroundColor: "white" }
                }
            >

            </div>
            <Image src="/sun.png" alt="sun" width={14} height={14} />
        </div>
    );
};

export default ThemeToggle;