import IconSortMax from "../icons/IconSortMax";
import IconSortMin from "../icons/IconSortMin";
import { useSorted } from "../../store";

const CustomButtonSorted = () => {
    const {
        minMaxSort,
        setMinMaxSort,
        isPriceSorted,
        setPriceSorted,
        setPopularSorted,
    } = useSorted();
    const handlePriceSort = () => {
        if (isPriceSorted) {
            setPriceSorted(false);
            setMinMaxSort(true);
        } else {
            setPriceSorted(true);
            setPopularSorted(false);
            setMinMaxSort(false);
        }
    };
    console.log(isPriceSorted);

    return (
        <>
            <button
                onClick={handlePriceSort}
                className="text-text-gray focus:text-blue
            stroke-text-gray focus:stroke-blue h-8 p-1 justify-start items-center gap-2 inline-flex"
            >
                <span className="  text-[16px]/[22.4px] font-medium">
                    по цене
                </span>
                {minMaxSort ? <IconSortMin /> : <IconSortMax />}
            </button>
        </>
    );
};
export default CustomButtonSorted;
