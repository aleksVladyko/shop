import { Props } from "../../utils/types";

const ProductDescriptions = ({ desc }: Props) => {
    const descParagraphs = desc?.split("\n").map((p, index) => (
        <p
            key={index}
            className="self-stretch text-black text-base/6  font-normal"
        >
            {p}
        </p>
    ));
    return (
        <div className="self-stretch flex-col justify-start items-start gap-4 flex">
            <h3 className="self-stretch text-black text-xl/6 font-semibold ">
                Описание
            </h3>
            {descParagraphs}
        </div>
    );
};
export default ProductDescriptions;
