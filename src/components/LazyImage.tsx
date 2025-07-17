import React, { useEffect, useRef, useState, CSSProperties } from 'react';

interface LazyImageProps {
    src: string;
    alt: string;
    className?: string;
    style?: CSSProperties;
}

const styles = {
    wrapper: {
        width: '100%',
        aspectRatio: '16 / 9',
        backgroundColor: '#e5e7eb',
        position: 'relative' as const,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover' as const,
        transition: 'opacity 0.3s ease'
    }
};

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className, style }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={imgRef}
            className={className}
            style={{ ...styles.wrapper, ...style }}
        >
            {isInView && (
                <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    style={{
                        ...styles.image,
                        opacity: isLoaded ? 1 : 0
                    }}
                    onLoad={() => setIsLoaded(true)}
                />
            )}
        </div>
    );
};

export default LazyImage;
