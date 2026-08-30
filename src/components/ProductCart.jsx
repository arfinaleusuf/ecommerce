import { Link } from "react-router";

const ProductCart = ({product}) => {
    return (
        <div className='shadow-2xl p-12'>
            <img className='w-full' src={product.image} alt="" />
            <p className='font-bold text-xl'>{product.title}</p>
            <p className='text-green-500'> Price: {product.price}</p>
            <p className='text-orange-500'>{product.rating?.rate}</p>
            
            <Link to={`/products/${product.id}`}><button className="border p-2">See Details</button></Link>
        </div>
    );
};

export default ProductCart;