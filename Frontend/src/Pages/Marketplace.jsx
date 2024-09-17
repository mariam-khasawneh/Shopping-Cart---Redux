import ProductList from "../Components/ProductList";
import Cart from "../Components/Cart";

function Marketplace() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-8 text-center">Shopping Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <ProductList />
        </div>
        <div>
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default Marketplace;
