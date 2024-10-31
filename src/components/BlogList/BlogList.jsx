import BlogItem from "./BlogItem";
import blogData from "../../data/blogData";

const BlogList = () => {
  return (
      <div className="blog-list-container">
          {blogData.map((post, index) => (
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
export default BlogList;