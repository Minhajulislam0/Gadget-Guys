import "./Header.scss";
import { TbSearch } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li>Home</li>
            <li>About</li>
            <li>Category</li>
          </ul>
          <div className="center">Gadget Guys</div>
          <div className="right">
            <TbSearch />
            <AiOutlineHeart />
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              <span>2</span>
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
    </>
  );
};

export default Header;
