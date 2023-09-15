import "./productCard.css";

const ProductCard = ({ product }) => {
  return (
    <article className="product-card-card">
      <div className="product-card-img-container">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            className="product-card-img"
            alt={product.name}
          />
        ) : (
          <h1>Image Not Found</h1>
        )}
        <p className="product-card-banner">Health360</p>
      </div>
      {/* product-card footer */}
      <div className="product-card-footer">
        <h4 className="product-card-title">{product.name}</h4>
        {/* product-card info */}
        <div className="product-card-info">
          <p className="product-card-description">{product.description}</p>
          <p className="price">${product.price}</p>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
