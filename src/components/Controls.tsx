import React, { useState } from 'react';

interface ControlsProps {
    startItem: number;
    endItem: number;
    totalItems: number;
    perPage: number;
    handlePerPageChange: (value: number) => void;
    handleSortChange: (value: string) => void;
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1.5rem',
        flexWrap: 'wrap' as const
    },
    leftText: {
        fontSize: '18px',
        color: '#374151',
        fontWeight: 500,
        flex: 1
    },
    rightControls: {
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem'
    },
    label: {
        fontSize: '18px',
        color: '#000000ff',
        marginRight: '0.5rem'
    },
    selectWrapper: {
        display: 'flex',
        alignItems: 'center'
    },
    select: (isFocused: boolean) => ({
        padding: '12px 100px 12px 12px',
        borderRadius: '30px',
        border: `2px solid ${isFocused ? '#FFA500' : '#D1D5DB'}`,
        fontSize: '18px',
        fontWeight: 'bold',
        appearance: 'none' as const,
        backgroundColor: '#fff',
        backgroundImage: `url("data:image/svg+xml,%3Csvg fill='none' stroke='%23343a40' stroke-width='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 10px center',
        backgroundSize: '16px 16px',
        cursor: 'pointer',
        outline: 'none',
        boxShadow: isFocused ? '0 0 0 2px #FFA50050' : 'none',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
    })

};

const Controls: React.FC<ControlsProps> = ({
    startItem,
    endItem,
    totalItems,
    perPage,
    handlePerPageChange,
    handleSortChange
}) => {
    const [isPerPageFocused, setPerPageFocused] = useState(false);
    const [isSortFocused, setSortFocused] = useState(false);

    return (
        <div style={styles.container}>
            <div style={styles.leftText}>
                Showing {startItem} - {endItem} of {totalItems}
            </div>

            <div style={styles.rightControls}>
                <div style={styles.selectWrapper}>
                    <span style={styles.label}>Show per page:</span>
                    <select
                        value={perPage}
                        onChange={(e) => handlePerPageChange(Number(e.target.value))}
                        style={styles.select(isPerPageFocused)}
                        onFocus={() => setPerPageFocused(true)}
                        onBlur={() => setPerPageFocused(false)}
                    >
                        {[10, 20, 50].map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>

                <div style={styles.selectWrapper}>
                    <span style={styles.label}>Sort by:</span>
                    <select
                        onChange={(e) => handleSortChange(e.target.value)}
                        style={styles.select(isSortFocused)}
                        onFocus={() => setSortFocused(true)}
                        onBlur={() => setSortFocused(false)}
                    >
                        <option value="-published_at">Newest</option>
                        <option value="published_at">Oldest</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Controls;
