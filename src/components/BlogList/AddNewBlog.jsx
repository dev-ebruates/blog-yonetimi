import { useState } from "react";
import "./AddNewBlog.css";
import Button from "../UI/Button";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const AddNewBlog = ({ addBlogPost }) => {
  const createEmptyFormData = () => {
    return {
      id: uuidv4(),
      baslik: "",
      icerik: "",
      yazar: "",
      tarih: new Date().toISOString().split("T")[0],
    };
  };

  const [formData, setFormData] = useState(createEmptyFormData());

  const inputChanged = (e) => {
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
      addBlogPost(formData);
    }
    setFormData(createEmptyFormData());
  };

  const validateForm = () => {
    return !formData.baslik ||
    !formData.icerik ||
    !formData.yazar ||
    !formData.tarih;
  }

  return (
    <form onSubmit={submit} className="form">
      <h2>Yeni Blog Yazısı Ekle</h2>
      <input
        type="text"
        name="baslik"
        placeholder="Başlık"
        value={formData.baslik}
        onChange={inputChanged}
        className="input"
        required
      />
      <textarea
        name="icerik"
        placeholder="İçerik"
        value={formData.icerik}
        onChange={inputChanged}
        className="textarea"
        required
      />
      <input
        type="text"
        name="yazar"
        placeholder="Yazar"
        value={formData.yazar}
        onChange={inputChanged}
        className="input"
        required
      />
      <input
        type="date"
        name="tarih"
        value={formData.tarih}
        onChange={inputChanged}
        className="input"
        required
      />
      <Button
        label="Yeni Blog Ekle"
        type="submit"
        color="primary"
        size="medium"
      />
    </form>
  );
};

AddNewBlog.propTypes = {
  addBlogPost: PropTypes.func.isRequired
};

export default AddNewBlog;
