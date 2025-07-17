import React, { useState } from 'react';
import LazyImage from '../LazyImage';
import styles from './CardStyles';

interface Idea {
    id: string;
    title: string;
    published_at: string;
    small_image?: { url: string };
    medium_image?: { url: string };
}

const PostCard: React.FC<{ idea: Idea }> = ({ idea }) => {
    const [isHovered, setIsHovered] = useState(false);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    return (
        <div
            style={{ ...styles.card, ...(isHovered ? styles.cardHover : {}) }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={styles.imageWrapper}>
                <LazyImage
                    src={idea.medium_image?.url || idea.small_image?.url || '/api/placeholder/400/225'}
                    alt={idea.title}
                    style={styles.imageStyle}
                />
            </div>
            <div style={styles.cardContent}>
                <p style={styles.cardDate}>{formatDate(idea.published_at)}</p>
                <h3 style={styles.cardTitle}>{idea.title}</h3>
            </div>
        </div>
    );
};

export default PostCard;
