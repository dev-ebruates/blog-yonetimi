import { Link, useNavigate } from "react-router-dom";
import "./Header.css"; // Stil dosyanız için
import blogImage from "../images/blogImages.jpg"; // Resminizi buraya yerleştirin
import logo from "../images/logo.jpg"; // Logo için görsel yolu

const BlogHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="blog-header">
      <div className="header-content ">
        <img
          className="header-image"
          src={blogImage}
          alt="Yemek Tarifi"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="logo-container">
        <img
          src={logo}
          alt="Blog Logo"
          className="logo"
          onClick={() => navigate("/")}
        />
        <Link to="/login" className="login-link">
          Giriş Yap
        </Link>
      </div>
    </header>
  );
};

export default BlogHeader;
