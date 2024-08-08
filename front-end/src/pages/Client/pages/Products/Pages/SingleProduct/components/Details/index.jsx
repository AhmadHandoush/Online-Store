import Loader from "../../../../../../../../components/Loader";

function Details({ product, loading, error }) {
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="details p-4 ">
      {product ? (
        <div>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{product.description}</p>
          <p>{product.color}</p>
          <p>{product.gender}</p>
          <p>{product.brand.name}</p>
          <p>{product.category.name}</p>{" "}
        </div>
      ) : (
        <div> no product details available</div>
      )}
    </div>
  );
}

export default Details;
