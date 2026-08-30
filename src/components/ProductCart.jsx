const ProductCart = ({product}) => {
    return (
        <div className='shadow-2xl p-12'>
            <img className='w-full' src={product.image} alt="" />
            <p className='font-bold text-xl'>{product.title}</p>
            <p className='text-green-500'> Price: {product.price}</p>
            <p className='text-orange-500'>{product.rating?.rate}</p>
        </div>
    );
};

export default ProductCart;