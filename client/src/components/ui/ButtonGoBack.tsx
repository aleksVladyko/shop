import { useNavigate } from "react-router-dom";
import arrow from "../../assets/arrow.svg";

const ButtonGoBack = () => {
    const navigate = useNavigate();

    return (
        <button
            className="p-2 justify-start items-center gap-2 flex  hover:ring-2 rounded-lg ring-blue ring-inset
                    transition duration-1000 ease-in-out hover:bg-indigo-300"
            onClick={() => navigate(-1)}
        >
            <img loading="lazy" src={arrow} className="w-6 h-6 relative" />
            <span className="text-text-gray hover:text-white text-base font-medium ">
                Назад
            </span>
        </button>
    );
};
export default ButtonGoBack;
