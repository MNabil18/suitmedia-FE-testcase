import { useEffect, useState } from 'react';

interface Idea {
    id: string;
    title: string;
    published_at: string;
    small_image?: { url: string };
    medium_image?: { url: string };
}

interface ApiResponse {
    data: Idea[];
    meta: {
        current_page: number;
        per_page: number;
        total: number;
        last_page: number;
    };
}

const useIdeas = () => {
    const [ideas, setIdeas] = useState<Idea[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [sortOrder, setSortOrder] = useState('-published_at');
    const [totalPages, setTotalPages] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const fetchIdeas = async (page: number, size: number, sort: string) => {
        try {
            setLoading(true);
            const res = await fetch(
                `https://suitmedia-backend.suitdev.com/api/ideas?page[number]=${page}&page[size]=${size}&append[]=small_image&append[]=medium_image&sort=${sort}`,
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            );
            const data: ApiResponse = await res.json();
            setIdeas(data.data);
            setTotalPages(data.meta.last_page);
            setTotalItems(data.meta.total);
        } catch (err) {
            console.error('Fetch error:', err);
            setIdeas([]);
        } finally {
            setLoading(false);
        }
    };



    useEffect(() => {
        fetchIdeas(currentPage, perPage, sortOrder);
    }, [currentPage, perPage, sortOrder]);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            setIsHeaderVisible(currentY < lastScrollY || currentY < 100);
            setLastScrollY(currentY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const handleSortChange = (sort: string) => {
        setSortOrder(sort);
        setCurrentPage(1);
    };

    const handlePerPageChange = (size: number) => {
        setPerPage(size);
        setCurrentPage(1);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const startItem = (currentPage - 1) * perPage + 1;
    const endItem = Math.min(currentPage * perPage, totalItems);

    return {
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
        handleSortChange,
    };
};

export default useIdeas;
