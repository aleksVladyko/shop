import basket from "../../assets/basket.svg";
import { useNavigate } from "react-router-dom";
const HeadLayout = () => {
    const nav = useNavigate();
    return (
        <div className="w-full h-14 px-10 py-2 bg-white border-b border-slate-200 flex-col justify-start items-center gap-2 inline-flex">
            <div className="self-stretch justify-between items-center inline-flex">
                <h2
                    className="text-right text-zinc-900 text-2xl font-semibold font-['Manrope'] leading-loose cursor-pointer"
                    onClick={() => nav("/")}
                >
                    graff.shop
                </h2>
                <div className="w-10 h-10 p-2 justify-start relative items-start gap-2 inline-flex">
                    <img
                        loading="lazy"
                        src={basket}
                        className="w-6 h-6  hover:scale-125"
                    />
                    <div className="w-4  px-1 py-px bg-indigo-400 rounded-2xl flex-col justify-center items-center gap-2 flex  absolute right-0 top-0">
                        <span className="text-right text-white text-xs font-normal font-['Manrope'] leading-[14.40px] ">
                            1
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HeadLayout;
