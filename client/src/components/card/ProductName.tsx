import { Props } from "../../utils/types";

const ProductName = ({name}: Props) => {
    return (
        <h3
            className={`self-stretch text-black ${
                location.pathname === "/products/productId"
                    ? "text-[24px]/[32.4px]"
                    : "text-xl/6"
            } font-semibold leading-normal`}
        >
            {name}
        </h3>
    );
};
export default ProductName;
