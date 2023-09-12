import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/watch-prod-3.webp";
const CartItem = () => {
  return (
    <div className="cart-products">
      <div className="cart-product">
        <div className="img-container">
          <img src={prod} alt="" />
        </div>
        <div className="prod-details">
          <span className="name">Smart Watch</span>
          <MdClose className="close-button" />
          <div className="quantity-buttons">
            <span>-</span>
            <span>5</span>
            <span>+</span>
          </div>
          <div className="text">
            <span>3</span>
            <span>x</span>
            <span className="highlight">$232</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
