import { useLocation, useParams } from "react-router-dom";
import { Props } from "../../utils/types";

const ProductImage = ({ image }: Props) => {
    const { id } = useParams();
    const location = useLocation();
    return (
        <img
            loading="eager"
            alt="photo"
            className={`${
                location.pathname === `/products/${id}`
                    ? "w-[464px] h-[464px]"
                    : "w-[264px] h-[264px]"
            } `}
            src={image}
        />
    );
};
export default ProductImage;
