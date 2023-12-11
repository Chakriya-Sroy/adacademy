import React from "react";
import { Link } from "react-router-dom";
const Hero = ({page}) => {
    return (
        <div className="breadcrumbs d-flex align-items-center">
            <div className="container position-relative d-flex flex-column align-items-center">
                <h2 className="text-capitalize">{page}</h2>
                <ol>
                <li><Link to="/">Home</Link></li>
                <li>{page}</li>
                </ol>
            </div>
        </div>
    );
}
 
export default Hero;