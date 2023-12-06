import React from "react";
import "./rain.scss";

const Rain = () => {
    return Array(50)
        .fill(0)
        .map((_, index) => (
            <React.Fragment key={index}>
                <div className="rain"/>
                <div className="splat"/>
            </React.Fragment>
        ));
};
export default Rain;
