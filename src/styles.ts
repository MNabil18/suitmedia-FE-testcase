const styles = {
    container: {
        minHeight: '100vh',
        backgroundColor: '#f9fafb',
        fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    main: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3rem 1rem'
    },
    loading: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '16rem'
    },
    spinner: {
        width: '3rem',
        height: '3rem',
        border: '2px solid #e5e7eb',
        borderTop: '2px solid #f97316',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1.5rem'
    }
};

const spinnerStyle = document.createElement('style');
spinnerStyle.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(spinnerStyle);

export default styles;
