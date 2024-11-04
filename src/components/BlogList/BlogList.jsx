import { useState } from "react";
import BlogItem from "./BlogItem";
import PropTypes from "prop-types";
import "./BlogList.css";

const BlogList = ({ blogPosts, handleDeleteBlog, handleAddBlog }) => {
  // Arama terimi için state tanımla
  const [searchTerm, setSearchTerm] = useState("");

  // Arama kutusuna yazılan değeri güncelleyen fonksiyon
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtreleme fonksiyonu: girilen terimi içeren öğeleri döndürür
  const filteredBlogPosts = blogPosts.filter((item) =>
    (item.baslik + " " + item.icerik + " " + item.yazar + " " + item.tarih)
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );
  console.log(blogPosts);

  return (
    <div className="blog-list-container">
      <input
        type="text"
        placeholder="Aramak için yazın..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />

      {filteredBlogPosts.map((post, index) => (
        <BlogItem
          key={index}
          id={post.id}
          baslik={post.baslik}
          icerik={post.icerik}
          yazar={post.yazar}
          tarih={post.tarih}
          handleDeleteBlog={handleDeleteBlog}
          handleAddBlog={handleAddBlog}
      
        />
      ))}
    </div>
  );
};
BlogList.propTypes = {
  blogPosts: PropTypes.array.isRequired,
  handleDeleteBlog: PropTypes.func,
  handleUpdateBlog: PropTypes.func,
  handleAddBlog: PropTypes.func,
};

export default BlogList;
