import { useEffect, useState } from "react";
import ProductCart from "../components/ProductCart";
import useFetch from "../hooks/useFetch";

const Products = () => {
    const [search, setSearch] = useState("")
    const { products, loading, err } = useFetch();
    const [sort, setSort] = useState("")
    const [copyProducts, setCopyProducts] = useState([])

    useEffect(()=>{
        let result = [...products];

        if(search.trim() !== ""){
            result = result.filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
        }

        if(sort == "low")
        {
            result.sort((a,b)=> a.price - b.price)
        }
        if(sort == "high")
        {
            result.sort((a,b) => b.price - a.price)
        }

        setCopyProducts(result);
    },[products,search,sort])

    if (loading) {
        return <p>Loading.....</p>
    }

    if (err) {
        return <p>{err}</p>
    }

    return (
        <>
        <div>
            <input className="border" value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search"/>
            <select name="" id="" value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="">Default</option>
                <option value="low">low to high</option>
                <option value="high">high to low</option>
                
            </select>
        </div>
        {/* all cart */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
                {copyProducts.map(product => (
                    <ProductCart product={product} />
                ))}
            </div>
        </>
    );
};

export default Products;