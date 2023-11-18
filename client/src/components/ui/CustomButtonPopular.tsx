import { NavbarProps } from "../../utils/types";

const CustomButtonPopular = ({ handlePopularSort }: NavbarProps) => {
    return (
        <button
            className="h-8 px-1 py-[5px] justify-center items-center gap-2 flex text-text-gray focus:text-blue"
            onClick={handlePopularSort}
        >
            <span className=" text-[16px]/[22.4px] font-medium ">
                по популярности
            </span>
        </button>
    );
};
export default CustomButtonPopular;
