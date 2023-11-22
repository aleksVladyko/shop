import { useNavigate } from "react-router-dom";
import { Props } from "../../utils/types";

const ButtonMoreDetails = ({ id }: Props) => {
    console.log();

    const navigate = useNavigate();
    return (
        <button
            onClick={() => navigate(`${id}`)}
            className="btn_moredetails_view"
        >
            <span className="text_btn_moredetails">Подробнее</span>
        </button>
    );
};
export default ButtonMoreDetails;
