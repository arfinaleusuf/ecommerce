import { useEffect, useState } from "react";

const useFetch = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState("")

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(e => setErr(e))
            .finally(() => setLoading(false))
    }, [])

    return { products, loading, err }
};

export default useFetch;