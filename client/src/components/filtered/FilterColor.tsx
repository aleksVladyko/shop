import { useState } from "react";
import vectorWhite from "../../assets/vector-white.svg";
import vectorBlack from "../../assets/vector-black.svg";
import { useFiltered } from "../../store";
type Colors = {
    color: string;
    name: string;
    visible: boolean;
};

const FilterColor = () => {
    const [colors, setColors] = useState<Colors[]>([
        { color: "black", name: "Чёрный", visible: false },
        { color: "blue", name: "Синий", visible: false },
        { color: "green", name: "Зелёный", visible: false },
        { color: "purple", name: "Фиолетовый", visible: false },
        { color: "white", name: "Белый", visible: false },
    ]);
    const { filter, setFilter } = useFiltered();

    console.log(filter);

    const toggleVisibility = (index: number) => {
        setColors((prevColors) => {
            const updatedColors = [...prevColors];
            updatedColors[index].visible = !updatedColors[index].visible;
            return updatedColors;
        });
    };
    const resetParameters = () => {
        setColors((prevColors) =>
            prevColors.map((color) => ({ ...color, visible: false }))
        );
    };
    const handleInputChange = (event: { target: { value: string } }) => {
        setFilter(event.target.value);
    };
    return (
        <div className="flex-col justify-start items-center gap-6 flex">
            <h3 className="self-stretch text-black text-xl font-semibold leading-normal">
                Цвет
            </h3>
            <fieldset className="flex flex-col justify-start items-start relative right-2">
                {colors.map((colorObj: Colors, index: number) => (
                    <label
                        onClick={() => setFilter(colorObj.color)}
                        key={index}
                        className="w-96 h-10 p-2 self-stretch justify-start items-center gap-3 flex hover:bg-gray rounded-[32px] relative"
                    >
                        <img
                            loading="lazy"
                            src={
                                colorObj.color === "white"
                                    ? vectorBlack
                                    : vectorWhite
                            }
                            alt=""
                            className={` pointer-events-none absolute left-[14px] z-10
                            ${colorObj.visible ? "" : "invisible"}`}
                        />
                        <input
                            onChange={handleInputChange}
                            name={colorObj.color}
                            onClick={() => toggleVisibility(index)}
                            className={`w-6 h-6 bg-${colorObj.color} rounded-[32px] justify-center items-center gap-2 flex relative cursor-pointer `}
                            style={{
                                background: `var(--color-${colorObj.color}`,
                            }}
                        />

                        <span className="text-black text-base font-normal">
                            {colorObj.name}
                        </span>
                    </label>
                ))}
            </fieldset>
            <button
                className="w-full h-8 px-1 py-[5px] justify-center items-center gap-2 inline-flex  active:bg-blue hover:ring hover:ring-gray rounded-[32px]"
                onClick={resetParameters}
            >
                <span className="text-text-gray  active:text-white text-base ">
                    Сбросить параметры
                </span>
            </button>
        </div>
    );
};

export default FilterColor;
