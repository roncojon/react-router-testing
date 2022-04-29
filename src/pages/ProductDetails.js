import { useParams } from "react-router-dom";
import React from "react";

const ProductDetails = () => {
    
const params = useParams();

    return (
    <h3>{params.productId}</h3>
    )
};

export default ProductDetails;