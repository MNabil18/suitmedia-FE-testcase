const styles = {
  card: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column' as const,
    height: '100%'
  },
  cardHover: {
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)',
    transform: 'translateY(-6px)',
  },
  imageWrapper: {
    width: '100%',
    aspectRatio: '16 / 9',
    overflow: 'hidden',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
  },
  cardContent: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'flex-start',
    flexGrow: 1,
  },
  cardDate: {
    color: '#6b7280',
    fontSize: '0.875rem',
    marginBottom: '0.75rem',
  },
  cardTitle: {
    fontSize: '1.125rem',
    fontWeight: 600,
    color: '#1f2937',
    lineHeight: '1.5',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical' as const,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    minHeight: '4.5em',
  }
};


export default styles;
