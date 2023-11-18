import { Props } from "../../utils/types";

const ProductColors = ({ colors }: Props) => {
    return (
        <div className=" h-6 justify-start items-start gap-2 inline-flex">
            {colors &&
                colors.map((color, index) => (
                    <div
                        key={index}
                        className="w-6 h-6 rounded-[32px]"
                        style={{ background: `var(--color-${color}` }}
                    />
                ))}
        </div>
    );
};
export default ProductColors;
