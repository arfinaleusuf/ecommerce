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
                <div style={{border: "2px solid gray"}}>
                    <img style={{width: "100%"}} src={product.image} alt="" />
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default Products;