import PropTypes from "prop-types";
import "./BlogItem.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const BlogItem = ({ baslik, icerik, yazar, tarih }) => {
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
        <button title="Delete" className=" btn icon-button">
        <span className="fas fa-trash custom-icon icon"></span>
        </button>
      </div>
    </div>
  );
};

BlogItem.propTypes = {
  baslik: PropTypes.string.isRequired,
  icerik: PropTypes.string.isRequired,
  yazar: PropTypes.string.isRequired,
  tarih: PropTypes.string.isRequired,
};

export default BlogItem;
