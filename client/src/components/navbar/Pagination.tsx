// import arrow from "../../assets/arrow.svg";
// import { useProducts } from "../../store";
// const Pagination = () => {
//     const { currentPage, setCurrentPage } = useProducts();
//     const totalPages = useProducts((state) => state.data.totalPages);

//     const handlePageChange = (page: number) => {
//         if (setCurrentPage) setCurrentPage(page);
//     };
//     if (typeof currentPage === "undefined") {
//         return null;
//     }

//     return (
//         <nav className="justify-center items-center gap-4 flex">
//             <button
//                 className={`btn_arrow ${
//                     currentPage === 1 ? "pointer-events-none" : null
//                 }`}
//                 onClick={() => handlePageChange(currentPage - 1)}
//             >
//                 <img src={arrow} className="img_arrow" />
//             </button>
//             <span className="text_span_pagination">{currentPage}</span>
//             <button
//                 className={`btn_arrow ${
//                     currentPage === totalPages ? "pointer-events-none" : null
//                 }`}
//                 onClick={() => handlePageChange(currentPage + 1)}
//             >
//                 <img src={arrow} className="rotate-180 img_arrow" />
//             </button>
//         </nav>
//     );
// };
// export default Pagination;
import { useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import arrow from "../../assets/arrow.svg";
import { useProducts } from "../../store";

const Pagination = () => {
    const { currentPage, setCurrentPage } = useProducts();
    const totalPages = useProducts((state) => state.data.totalPages);
    const location = useLocation();
    const navigate = useNavigate();

    const handlePageChange = (page: number) => {
        if (setCurrentPage) {
            setCurrentPage(page);
        }
    };

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const pages = searchParams.get("pages");

        if (pages) {
            setCurrentPage(Number(pages));
        } else {
            const newPage = 1;
            setCurrentPage(newPage);
            navigate(`${location.pathname}?pages=${newPage}`);
            console.log(newPage);
        }
    }, [location, navigate, setCurrentPage]);

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
                    navigate(`${location.pathname}?pages=${newPage}`);
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
                    navigate(`${location.pathname}?pages=${newPage}`);
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
