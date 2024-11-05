import BlogItem from "./BlogItem";
import PropTypes from "prop-types";
import "./BlogList.css";
import { useEffect, useState } from "react";

const BlogList = ({
  blogPosts,
  deleteBlogPost,
  editBlogPost
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState(blogPosts);
  const [sortOrder, setSortOrder] = useState('ascending');

  const search = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === 'ascending' ? 'descending' : 'ascending'));
  };

  useEffect(() => {
    const results = blogPosts.filter((blog) =>
      blog.baslik.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.icerik.toLowerCase().includes(searchTerm.toLowerCase()) || blog.yazar.toLowerCase().includes(searchTerm.toLowerCase()) || blog.tarih.toLowerCase().includes(searchTerm.toLowerCase())
    );

    results.sort((a, b) => {
      if (sortOrder === 'ascending') {
        return a.baslik.localeCompare(b.baslik);
      } else {
        return b.baslik.localeCompare(a.baslik);
      }
    });
    setFilteredBlogs(results);
  }, [searchTerm, blogPosts, sortOrder]);

  return (
    <div className="blog-list-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Aramak için yazın..."
          value={searchTerm}
          onChange={search}
          className="search-input"
        />
        <button onClick={toggleSortOrder} className="search-button">
        {sortOrder === 'ascending' ? 'Azalan' : 'Artan'}
      </button>
      </div>

      {filteredBlogs.map((p) => (
        <BlogItem
          key={p.id}
          blogPost = {p}
          id={p.id}
          baslik={p.baslik}
          icerik={p.icerik}
          yazar={p.yazar}
          tarih={p.tarih}
          deleteBlogPost={deleteBlogPost}
          editBlogPost={editBlogPost}
        />
      ))}
    </div>
  );
};
BlogList.propTypes = {
  blogPosts: PropTypes.array.isRequired,
  deleteBlogPost: PropTypes.func.isRequired,
  editBlogPost: PropTypes.func.isRequired
};

export default BlogList;
