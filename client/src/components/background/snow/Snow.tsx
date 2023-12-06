import "./snow.scss";

const Snow = () => {
    return Array(50)
        .fill(0)
        .map((_, index) => (
            <canvas
                key={index}
                className="snow-leaf"
            />
        ));
};
export default Snow;
