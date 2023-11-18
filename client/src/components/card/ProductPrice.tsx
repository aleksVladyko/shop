import { Props } from "../../utils/types";

const ProductPrice = ({price}: Props) => {
    return (
        <span
            className={`text-black ${
                location.pathname === "/products/productId"
                    ? "text-[32px]/[32px]"
                    : "text-xl/6"
            } font-semibold `}
        >
           {price}{" "}
        </span>
    );
};
export default ProductPrice;
