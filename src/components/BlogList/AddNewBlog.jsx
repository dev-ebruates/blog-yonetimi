import React, { useState } from 'react';
import './AddNewBlog.css';

const AddNewBlog = ({ onAddBlog }) => {
    const [formData, setFormData] = useState({
        baslik: '',
        icerik: '',
        yazar: '',
        tarih: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Blog verisi oluştur ve BlogList'e ekle
        onAddBlog(formData);

        // Formu temizle
        setFormData({
            baslik: '',
            icerik: '',
            yazar: '',
            tarih: '',
        });
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <h2>Yeni Blog Yazısı Ekle</h2>
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
            <button type="submit" className="button">Blog Ekle</button>
        </form>
    );
};

export default AddNewBlog;
