import PropTypes from "prop-types";
import "./BlogItem.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";
import Button from "../UI/Button";

const BlogItem = ({id, baslik, icerik, yazar, tarih, editBlogPost, deleteBlogPost}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    id: id,
    baslik: baslik,
    icerik: icerik,
    yazar: yazar,
    tarih: tarih
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Lutfen tum alanlari doldurunuz");
    } else {
      editBlogPost(formData);
    }
    setIsEditing(false);
  };

  const validateForm = () => {
    return !formData.baslik ||
    !formData.icerik ||
    !formData.yazar ||
    !formData.tarih;
  }

  return (
    <div>
      {!isEditing ? (
        <div className="card">
          <h2>{formData.baslik}</h2>
          <p>{formData.icerik}</p>
          <p className="author">Yazar: {formData.yazar}</p>
          <p className="date">Tarih: {formData.tarih}</p>

          <div className="button-container">
            <div>
              <button
                onClick={() => setIsEditing(true)}
                title="Edit"
                className="btn icon-button"
              >
                <span className="fas fa-edit custom-icon icon"></span>
              </button>
              <button
                onClick={() => deleteBlogPost(id)}
                title="Delete"
                className="btn icon-button"
              >
                <span className="fas fa-trash custom-icon icon"></span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={submit} className="card">
          <input
            type="text"
            name="baslik"
            placeholder="Başlık"
            value={formData.baslik}
            onChange={handleChange}
            className="input"
            required
          />
          <textarea
            name="icerik"
            placeholder="İçerik"
            value={formData.icerik}
            onChange={handleChange}
            className="textarea"
            required
          />
          <input
            type="text"
            name="yazar"
            placeholder="Yazar"
            value={formData.yazar}
            onChange={handleChange}
            className="input"
            required
          />
          <input
            type="date"
            name="tarih"
            value={formData.tarih}
            onChange={handleChange}
            className="input"
            required
          />
          <Button
            label="Kaydet"
            type="submit"
            color="primary"
            size="medium"
          />
        </form>
      )}
    </div>
  );
};

BlogItem.propTypes = {
  id: PropTypes.string.isRequired,
  baslik: PropTypes.string.isRequired,
  icerik: PropTypes.string.isRequired,
  yazar: PropTypes.string.isRequired,
  tarih: PropTypes.string.isRequired,
  deleteBlogPost: PropTypes.func.isRequired,
  editBlogPost: PropTypes.func.isRequired
};

export default BlogItem;
