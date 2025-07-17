import React from 'react';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import PostCard from './components/card/PostCard';
import Pagination from './components/page/Pagination';
import Controls from './components/Controls';
import useIdeas from './hooks/useIdeas';
import styles from './styles';

const App: React.FC = () => {
    const {
        ideas,
        loading,
        currentPage,
        perPage,
        totalPages,
        totalItems,
        isHeaderVisible,
        startItem,
        endItem,
        handlePageChange,
        handlePerPageChange,
        handleSortChange
    } = useIdeas();

    return (
        <div style={styles.container}>
            <Header isVisible={isHeaderVisible} activeMenu="Ideas" />
            <Banner imageUrl="/bg_banner.png"/>

            <main style={styles.main}>
                <Controls
                    startItem={startItem}
                    endItem={endItem}
                    totalItems={totalItems}
                    perPage={perPage}
                    handlePerPageChange={handlePerPageChange}
                    handleSortChange={handleSortChange}
                />

                {loading ? (
                    <div style={styles.loading}>
                        <div style={styles.spinner}></div>
                    </div>
                ) : (
                    <>
                        <div style={styles.grid}>
                            {ideas.map((idea) => (
                                <PostCard key={idea.id} idea={idea} />
                            ))}
                        </div>

                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    </>
                )}
            </main>
        </div>
    );
};

export default App;

