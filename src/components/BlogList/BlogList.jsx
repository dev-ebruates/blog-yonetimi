import BlogItem from "./BlogItem";
import PropTypes from "prop-types";


const BlogList = ({blogPosts}) => {
 

  return (
      <div className="blog-list-container">
         
          {blogPosts.map((post, index) => (
              <BlogItem
                  key={index}
                  baslik={post.baslik}
                  icerik={post.icerik}
                  yazar={post.yazar}
                  tarih={post.tarih}
              />
          ))}
     
      </div>
  );
  
};
BlogList.propTypes = {
  blogPosts: PropTypes.array.isRequired
};


export default BlogList;