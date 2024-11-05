import BlogItem from "./BlogItem";
import PropTypes from "prop-types";
import "./BlogList.css";

const BlogList = ({ searchTerm, handleDeleteBlog, sortByDate, handleSearch, filteredBlogPosts }) => {
 

  return (
    <div className="blog-list-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Aramak için yazın..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        <button className="search-button" onClick={sortByDate}>Sırala</button>
      </div>

      {filteredBlogPosts.map((post, index) => (
        <BlogItem
          key={index}
          id={post.id}
          baslik={post.baslik}
          icerik={post.icerik}
          yazar={post.yazar}
          tarih={post.tarih}
          handleDeleteBlog={handleDeleteBlog}
        />
      ))}
    </div>
  );
};
BlogList.propTypes = {
  filteredBlogPosts: PropTypes.array.isRequired,
  searchTerm: PropTypes.string.isRequired,
  handleDeleteBlog: PropTypes.func.isRequired,
  sortByDate: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired
};

export default BlogList;
