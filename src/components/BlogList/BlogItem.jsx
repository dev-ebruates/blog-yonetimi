import PropTypes from "prop-types";
import "./BlogItem.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const BlogItem = ({ id, baslik, icerik, yazar, tarih ,handleDeleteBlog}) => {
  return (
    <div className="card">
      <h2>{baslik}</h2>
      <p>{icerik}</p>
      <p className="author">Yazar: {yazar}</p>
      <p className="date">Tarih: {tarih}</p>

      <div className="button-container">
        <button title="Edit" className="btn icon-button">
          <span className="fas fa-edit custom-icon icon"></span>
        </button>
        <button onClick={() => handleDeleteBlog(id)} title="Delete" className=" btn icon-button">
        <span className="fas fa-trash custom-icon icon"></span>
        </button>
      </div>
    </div>
  );
};

BlogItem.propTypes = {
  id: PropTypes.string.isRequired,
  baslik: PropTypes.string.isRequired,
  icerik: PropTypes.string.isRequired,
  yazar: PropTypes.string.isRequired,
  tarih: PropTypes.string.isRequired,
  handleDeleteBlog: PropTypes.func.isRequired,
};

export default BlogItem;
