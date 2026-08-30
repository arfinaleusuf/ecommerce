
import { Link } from "react-router";
import useFetch from "../hooks/useFetch";

const Home = () => {

    const { products, loading, err } = useFetch();

    return (
        <div>
            / // all cards
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
                {products.slice(0,3).map(product => (
                    <div style={{ border: "2px solid gray" }}>
                        <img style={{ width: "100%" }} src={product.image} alt="" />
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
            <button><Link to={"/products"}>See All Products</Link></button>
        </div>
    );
};

export default Home;