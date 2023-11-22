import { Props } from "../../utils/types";
import ButtonCart from "../ui/ButtonCart";
import ButtonMoreDetails from "../ui/ButtonMoreDetails";
import ProductColors from "./ProductColors";
import ProductImage from "./ProductImage";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";

const CardProduct = ({ product }: Props) => {
    return (
        product && (
            <>
                <div className="border_card_products" />
                <article className="self-stretch bg-white justify-start items-start gap-8 inline-flex">
                    <ProductImage image={product.image} />
                    <div className="grow shrink basis-0 self-stretch py-4 justify-start items-start gap-8 flex">
                        <div className="grow shrink basis-0 self-stretch flex-col justify-between items-start inline-flex">
                            <div className="self-stretch h-16 flex-col justify-start items-start gap-4 flex">
                                <ProductName name={product.name} />
                                <ProductColors colors={product.colors} />
                            </div>
                            <ButtonMoreDetails id={product.id} />
                        </div>
                        <div className="grow shrink basis-0 self-stretch flex-col justify-start items-end gap-4 inline-flex">
                            <ProductPrice price={product.price} />
                            <ButtonCart />
                        </div>
                    </div>
                </article>
                <div className="border_card_products" />
            </>
        )
    );
};
export default CardProduct;
