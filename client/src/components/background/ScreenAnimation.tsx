import { FC, useState } from "react";
import Snow from "./snow/Snow";
import Rain from "./rain/Rain";
import Leaves from "./leaves/Leaves";

const ScreenAnimation: FC = () => {
    const [animationType, setAnimationType] = useState("leaves");

    const handleAnimationButtonClick = (type: string) => {
        setAnimationType(type);
    };

    const renderAnimation = () => {
        if (animationType === "snow") {
            return <Snow />;
        } else if (animationType === "rain") {
            return <Rain />;
        } else {
            // устанавливаем количество листьев через пропс
            return <Leaves leavesCount={30} />;
        }
    };

    return (
        <>
            {/* <div className="h-screen w-screen flex p-0 m-0 relative overflow-hidden bg-gradient-to-b from-slate-400 to-slate-700"> */}
            <div className="h-screen w-screen flex p-0 m-0 relative overflow-hidden bg-gradient-to-b from-slate-400 to-slate-700 z-10">
                <div className="w-screen md:w-full flex flex-row justify-center items-center max-h-10 mt-4 gap-2 ">
                    <button
                        type="button"
                        className="btn_background"
                        onClick={() => handleAnimationButtonClick("snow")}
                    >
                        snow
                    </button>
                    <button
                        type="button"
                        className="btn_background"
                        onClick={() => handleAnimationButtonClick("rain")}
                    >
                        rain
                    </button>
                    <button
                        type="button"
                        className="btn_background"
                        onClick={() => handleAnimationButtonClick("leaves")}
                    >
                        leaves
                    </button>
                </div>
                {renderAnimation()}
            </div>
        </>
    );
};

export default ScreenAnimation;
