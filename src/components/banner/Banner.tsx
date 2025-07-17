import React, { useEffect, useState } from 'react';
import { styles } from './BannerStyles';

interface BannerProps {
    imageUrl: string;
    title?: string;
    subtitle?: string;
}

const Banner: React.FC<BannerProps> = ({
    imageUrl,
    title = 'Ideas',
    subtitle = 'Where all our great things begin',
}) => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section style={styles.banner}>
            <div
                style={{
                    ...styles.bannerBgBase,
                    backgroundImage: `url(${imageUrl})`,
                    transform: `translateY(${scrollY * 0.1}px)`,
                }}
            />
            <div
                style={{
                    ...styles.bannerContent,
                    transform: `translateY(${scrollY * 0.2}px)`,
                }}
            >
                <div style={styles.bannerText}>
                    <h1 style={styles.bannerTitle}>{title}</h1>
                    <p style={styles.bannerSubtitle}>{subtitle}</p>
                </div>
            </div>
        </section>
    );
};

export default Banner;
