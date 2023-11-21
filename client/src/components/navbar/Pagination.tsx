import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import arrow from "../../assets/arrow.svg";
import { useProducts } from "../../store";

const Pagination = () => {
    const { currentPage, setCurrentPage } = useProducts();

    const [searchParams, setSearchParams] = useSearchParams();

    const totalPages = useProducts((state) => state.data.totalPages);

    useEffect(() => {
        const page = Number(searchParams.get("page")) || 1;
        setCurrentPage(page);
    }, [searchParams, setCurrentPage]);

    const handlePageChange = (page: number) => {
        searchParams.set("page", page.toString());
        setSearchParams(searchParams);
        setCurrentPage(page);
    };

    if (typeof currentPage === "undefined") {
        return null;
    }

    return (
        <nav className="justify-center items-center gap-4 flex">
            <button
                className={`btn_arrow ${
                    currentPage === 1 ? "pointer-events-none" : null
                }`}
                disabled={currentPage === 1}
                onClick={() => {
                    const newPage = currentPage - 1;
                    handlePageChange(newPage);
                }}
            >
                <img
                    loading="lazy"
                    src={arrow}
                    alt="Previous Page"
                    className="img_arrow"
                />
            </button>
            <span className="text_span_pagination">{currentPage}</span>
            <button
                className={`btn_arrow ${
                    currentPage === totalPages ? "pointer-events-none" : null
                }`}
                disabled={currentPage === totalPages}
                onClick={() => {
                    const newPage = currentPage + 1;
                    handlePageChange(newPage);
                }}
            >
                <img
                    loading="lazy"
                    src={arrow}
                    alt="Next Page"
                    className="rotate-180 img_arrow"
                />
            </button>
        </nav>
    );
};

export default Pagination;
