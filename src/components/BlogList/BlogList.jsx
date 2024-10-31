import BlogItem from "./BlogItem";
import blogData from "../../data/blogData";
import { useState } from "react";
import AddNewBlog from "./AddNewBlog";

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState(blogData);

  const handleAddBlog = (newBlog) => {
      setBlogPosts([newBlog, ...blogPosts]);
  };

  return (
      <div className="blog-list-container">
          <AddNewBlog onAddBlog={handleAddBlog} />
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

export default BlogList;