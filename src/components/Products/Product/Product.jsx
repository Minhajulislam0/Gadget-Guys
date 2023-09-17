import "./Product.scss";
const Product = ({ id, data }) => {
  return (
    <div className="product-card">
      <div className="thumbnail">
        <img
          src={import.meta.env.VITE_APP_URL + data.img.data[0].attributes.url}
          alt=""
        />
      </div>
      <div className="prod-details">
        <span className="name">{data.title}</span>
        <span className="price">&#x24; {data.price}</span>
      </div>
    </div>
  );
};

export default Product;
