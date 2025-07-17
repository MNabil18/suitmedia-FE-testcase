import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';
import { styles } from './PageStyles';

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<Props> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const renderPageNumbers = () => {
    const pages: React.ReactNode[] = [];

    if (currentPage > 3) {
      pages.push(renderButton(1));
      if (currentPage > 4) {
        pages.push(
          <span key="ellipsis1" style={styles.paginationEllipsis}>
            ...
          </span>
        );
      }
    }

    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, currentPage + 2);

    for (let i = start; i <= end; i++) {
      pages.push(renderButton(i));
    }

    if (currentPage < totalPages - 2) {
      if (currentPage < totalPages - 3) {
        pages.push(
          <span key="ellipsis2" style={styles.paginationEllipsis}>
            ...
          </span>
        );
      }
      pages.push(renderButton(totalPages));
    }

    return pages;
  };

  const renderButton = (page: number) => {
    const isActive = currentPage === page;
    return (
      <button
        key={page}
        onClick={() => onPageChange(page)}
        style={{
          ...styles.paginationButton,
          ...(isActive
            ? styles.paginationButtonActive
            : styles.paginationButtonDefault),
        }}
      >
        {page}
      </button>
    );
  };

  return (
    <div style={styles.pagination}>
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        style={{
          ...styles.paginationButton,
          ...styles.paginationButtonDefault,
          ...(currentPage === 1 ? styles.paginationButtonDisabled : {}),
        }}
      >
        <ChevronsLeft size={20} />
      </button>

      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={{
          ...styles.paginationButton,
          ...styles.paginationButtonDefault,
          ...(currentPage === 1 ? styles.paginationButtonDisabled : {}),
        }}
      >
        <ChevronLeft size={20} />

      </button>
      {renderPageNumbers()}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{
          ...styles.paginationButton,
          ...styles.paginationButtonDefault,
          ...(currentPage === totalPages ? styles.paginationButtonDisabled : {}),
        }}
      >
        <ChevronRight size={20} />
      </button>
      
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        style={{
          ...styles.paginationButton,
          ...styles.paginationButtonDefault,
          ...(currentPage === totalPages ? styles.paginationButtonDisabled : {}),
        }}
      >
        <ChevronsRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
