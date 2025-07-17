const styles = {
  header: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    transition: 'transform 0.3s ease',
  },
  headerVisible: {
    transform: 'translateY(0)',
  },
  headerHidden: {
    transform: 'translateY(-100%)',
  },
  headerBg: {
    backgroundColor: 'rgba(245, 102, 0, 0.8)',
    backdropFilter: 'blur(4px)',
    width: '100vw',
  },
  headerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0.85rem 1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    height: '2.75rem',
    marginLeft: '1rem',
    objectFit: 'contain',
  } as React.CSSProperties,
  nav: {
    display: 'flex',
    gap: '2rem',
  } as React.CSSProperties,
  navItem: {
    position: 'relative' as const,
    textDecoration: 'none',
    fontSize: '1.1rem',
    paddingBottom: '0.25rem',
    transition: 'color 0.3s ease',
    color: 'white',
  },
  activeNavItem: {
    fontWeight: 'bold',
    borderBottom: '2px solid white',
  },
};

export default styles;
