import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";

const Product_details = () => {

    const {products} = useFetch();
    const {OurId} = useParams();
    const singleProduct = products.find(p => p.id == OurId) 

    return (
        <div>
            <p>Products Details Page</p>
            <img src={singleProduct?.image} alt="" />
        </div>
    );
};

export default Product_details;