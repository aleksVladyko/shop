// import { useNavigate, useParams} from "react-router-dom";
import ButtonCart from "../components/ui/ButtonCart";
import ProductColors from "../components/card/ProductColors";
import ProductDescriptions from "../components/card/ProductDescriptions";
import ProductImage from "../components/card/ProductImage";
import ProductName from "../components/card/ProductName";
import ProductPrice from "../components/card/ProductPrice";
import ButtonGoBack from "../components/ui/ButtonGoBack";
import { useParams } from "react-router-dom";
import { useProducts } from "../store";
const ProductDetails = () => {
    const { id } = useParams();
    const { data } = useProducts();
    const products = data.products;
    const product = products.find((product) => product.id === Number(id));

    return (
        <section className=" px-10 py-8 flex-col justify-start items-start gap-8 inline-flex">
            <div className="self-stretch justify-start items-end gap-4 inline-flex ">
                <ButtonGoBack />
            </div>
            <div className="self-stretch px-6 justify-start items-start gap-4 inline-flex">
                <div className="grow shrink basis-0 justify-start items-start gap-10 flex">
                    <ProductImage image={product?.image} />
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-10 inline-flex">
                        <div className="self-stretch justify-between items-start inline-flex">
                            <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                                <ProductName name={product?.name} />
                                <ProductColors colors={product?.colors} />
                            </div>
                            <div className="flex-col justify-start items-end gap-6 inline-flex">
                                <ProductPrice price={product?.price} />
                                <ButtonCart />
                            </div>
                        </div>
                        <ProductDescriptions desc={product?.desc} />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ProductDetails;
