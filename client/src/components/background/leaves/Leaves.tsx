import "./leaves.scss";
import leave1 from "../../../assets/background-animation/leaves1.png";
import leave2 from "../../../assets/background-animation/leaves2.png";
import leave3 from "../../../assets/background-animation/leaves3.png";
import leave4 from "../../../assets/background-animation/leaves4.png";
import leave5 from "../../../assets/background-animation/leaves5.png";
import leave6 from "../../../assets/background-animation/leaves6.png";
import leave7 from "../../../assets/background-animation/leaves7.png";

type LeavesCount = {
    leavesCount: number;
};
const leafImages = [leave1, leave2, leave3, leave4, leave5, leave6, leave7];


const Leaves = ({ leavesCount }: LeavesCount) => {
// значение leavesCount устанавливаем в css цикле
    return Array(leavesCount)
        .fill(0)
        .map((_, index) => (
            <div
                key={index}
                className="falling-leaf"
            >
                <img
                    className="animate-fall-leaves"
                    src={leafImages[index % leafImages.length]}
                    alt="Falling Leaves"
                />
            </div>
        ));
};
export default Leaves;
