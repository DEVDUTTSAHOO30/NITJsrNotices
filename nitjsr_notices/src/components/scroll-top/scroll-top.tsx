'use client';

import React, { useEffect, useState } from 'react'
import styles from './scroll-top.module.css'
import { MdKeyboardArrowUp } from 'react-icons/md'

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        //Button is displayed after scrolling for 100 pixels
        const toggleVisibility = () => {
            if(window.pageYOffset > 400) {
                setIsVisible(true);
            }
            else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className={styles.scrollToTop}>
            {
                isVisible && (
                    <div className={styles.scrollTopIcon} onClick={ScrollToTop}>
                        <MdKeyboardArrowUp size={32} />
                    </div>
                )
            }
        </div>
    );
}

export default ScrollToTop