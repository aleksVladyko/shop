import { NavbarProps } from "../../utils/types";
import CustomButtonPopular from "../ui/CustomButtonPopular";
import CustomButtonSorted from "../ui/CustomButtonSorted";
import Pagination from "./Pagination";

const Navbar = ({
    currentPage,
    setCurrentPage,
    handlePriceSort,
    handlePopularSort,
    minMaxSort,
}: NavbarProps) => {
    return (
        <header className="self-stretch justify-between items-end inline-flex">
            <div className="w-[677px] justify-between items-end gap-8 inline-flex">
                <span className=" text-black   font-semibold  text-[32px]/[32px]">
                    Смартфоны
                </span>
                <div className="h-8 justify-start items-end gap-8 inline-flex">
                    <CustomButtonPopular
                        handlePopularSort={handlePopularSort}
                    />
                    <CustomButtonSorted
                        handlePriceSort={handlePriceSort}
                        minMaxSort={minMaxSort}
                    />
                </div>
            </div>
            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </header>
    );
};
export default Navbar;
