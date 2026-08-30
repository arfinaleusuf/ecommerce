import { useEffect, useState } from "react";

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])



    return (
        // all cards
        <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:"20px"}}>
            {products.map(product =>(
                <div style={{border: "2px solid gray"}}>
                    <img style={{width: "100%"}} src={product.image} alt="" />
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default Home;