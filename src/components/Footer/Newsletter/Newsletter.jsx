import "./Newsletter.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">Newsletter</span>
        <span className="big-text">Sign up for latest update and offers.</span>
        <div className="form">
          <input type="email" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
        <div className="text">
          Will be used accordance with our <span>Privacy Policy</span>.
        </div>
        <div className="social-icons">
          <div className="icon">
            <FaFacebookF />
          </div>
          <div className="icon">
            <FaInstagram />
          </div>
          <div className="icon">
            <FaLinkedinIn />
          </div>
          <div className="icon">
            <FaTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
