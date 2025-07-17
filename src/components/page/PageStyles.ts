export const styles = {
  pagination: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '2rem',
    gap: '0.5rem',
  },
  paginationButton: {
    width: '2.5rem',
    height: '2.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '0.875rem',
  },
  paginationButtonDefault: {
    backgroundColor: '#e5e7eb',
    color: '#374151',
  },
  paginationButtonActive: {
    backgroundColor: '#f97316',
    color: 'white',
  },
  paginationButtonDisabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  paginationEllipsis: {
    padding: '0 0.5rem',
    color: '#6b7280',
  },
};
