import "./CartItem.scss";
import { MdClose } from "react-icons/md";

import { useContext } from "react";
import { Context } from "../../../utils/context";
const CartItem = () => {
  const { cartItems, handleRemoveCart, handleProductQunatity } =
    useContext(Context);
  return (
    <div className="cart-products">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-product">
          <div className="img-container">
            <img
              src={
                import.meta.env.VITE_APP_URL +
                item.attributes.img.data[0].attributes.url
              }
              alt=""
            />
          </div>
          <div className="prod-details">
            <span className="name">{item.attributes.title}</span>
            <MdClose
              className="close-button"
              onClick={() => handleRemoveCart(item)}
            />
            <div className="quantity-buttons">
              <span onClick={() => handleProductQunatity("dec", item)}>-</span>
              <span>{item.attributes.quantity}</span>
              <span onClick={() => handleProductQunatity("inc", item)}>+</span>
            </div>
            <div className="text">
              <span>{item.attributes.quantity}</span>
              <span>x</span>
              <span className="highlight">
                $ {item.attributes.price * item.attributes.quantity}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
