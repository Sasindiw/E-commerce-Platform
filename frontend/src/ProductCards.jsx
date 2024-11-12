import ProductCard from "./ProductCard";
function ProductCards(props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {props.products.map((product) => {
        return (
          <ProductCard
            key={product._id}
            name={product.name}
            price={product.price}
            image={product.image}
            desc={product.desc}
          />
        );
      })}
    </div>
  );
}
export default ProductCards;
