
import { Link } from "react-router";
import useFetch from "../hooks/useFetch";
import ProductCart from "../components/ProductCart";

const Home = () => {

    const { products } = useFetch();

    return (
        <div>
            / // all cards
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
                {products.slice(0,4).map(product => (
                    <ProductCart product={product}/>
                ))}
            </div>
            <button><Link to={"/products"}>See All Products</Link></button>
        </div>
    );
};

export default Home;