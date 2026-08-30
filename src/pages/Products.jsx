import ProductCart from "../components/ProductCart";
import useFetch from "../hooks/useFetch";

const Products = () => {
    const { products, loading, err } = useFetch();
    if (loading) {
        return <p>Loaddin.....</p>
    }

    if (err) {
        return <p>{err}</p>
    }

    return (
        <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:"20px"}}>
            {products.map(product =>(
                <ProductCart product={product}/>
            ))}
        </div>
    );
};

export default Products;