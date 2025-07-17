export const styles = {
    banner: {
        position: 'relative' as const,
        height: '24rem',
        margin: '0',
        padding: '0',
        overflow: 'hidden',
        width: '100vw',
    },
    bannerBgBase: {
        position: 'absolute' as const,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 100%)',
        willChange: 'transform',
    },
    bannerContent: {
        position: 'relative' as const,
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        textAlign: 'center' as const,
    },
    bannerText: {
        color: 'white',
    },
    bannerTitle: {
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
    },
    bannerSubtitle: {
        fontSize: '1.25rem',
        opacity: 0.9,
    },
};
