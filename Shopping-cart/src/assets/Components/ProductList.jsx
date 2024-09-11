import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Store/productsSlice";
import { addToCart } from "../Store/cartSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const {
    items: products,
    status,
    error,
  } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg p-4 flex flex-col">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-contain mb-4"
          />
          <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
          <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-auto"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
