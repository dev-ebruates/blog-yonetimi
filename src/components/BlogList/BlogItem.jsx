import PropTypes from "prop-types";
import "./BlogItem.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";
import Button from "../UI/Button";

const BlogItem = ({ id, baslik, icerik, yazar, tarih, handleDeleteBlog,  }) => {
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState({
    id:id,
    baslik: baslik,
    icerik: icerik,
    yazar: yazar,
    tarih: tarih,
  });

  const handleEditBlog = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Güncellenen blog verisini localStorage'a kaydediyoruz.
    const updatedBlog = {
      id: id,
      ...formData,
    };
    console.log(updatedBlog);

    // Tüm blog verilerini getiriyoruz ve güncellenen blogu yerine koyuyoruz.
    const blogs = JSON.parse(localStorage.getItem("localBlogData")) || [];
    const updatedBlogs = blogs.map((blog) =>
      blog.id == id ? updatedBlog : blog
    );

    // Güncellenmiş veriyi localStorage'a tekrar kaydediyoruz.
    localStorage.setItem("localBlogData", JSON.stringify(updatedBlogs));
    console.log(updatedBlogs);

 
   

    // Düzenleme modundan çıkıyoruz.
    setIsEditing(true);
  };

  return (
    <div>
      {isEditing ? (
        <div className="card">
          <h2>{formData.baslik}</h2>
          <p>{formData.icerik}</p>
          <p className="author">Yazar: {formData.yazar}</p>
          <p className="date">Tarih: {formData.tarih}</p>

          <div className="button-container">
            <div>
              <button
                onClick={() => handleEditBlog()}
                title="Edit"
                className="btn icon-button"
              >
                <span className="fas fa-edit custom-icon icon"></span>
              </button>
              <button
                onClick={() => handleDeleteBlog(id)}
                title="Delete"
                className="btn icon-button"
              >
                <span className="fas fa-trash custom-icon icon"></span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="card">
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
            label="Blog Düzenle"
            type="submit"
            onClick={handleSubmit}
            color="primary"
            size="medium"
          />
        </div>
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
  handleDeleteBlog: PropTypes.func.isRequired,

};

export default BlogItem;

