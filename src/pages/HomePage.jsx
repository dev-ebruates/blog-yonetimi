import AddNewBlog from "../components/BlogList/AddNewBlog";
import BlogList from "../components/BlogList/BlogList";
import { useEffect, useState } from "react";


const HomePage = (staticBlogData) => {
  const [blogPosts, setBlogPosts] = useState([]);
  console.log("useState");
  useEffect(() => {
    
    let blogData =
      localStorage.getItem("localBlogData") === null
        ? null
        : JSON.parse(localStorage.getItem("localBlogData"));
    if (blogData === null) {
      blogData = staticBlogData;
      localStorage.setItem("localBlogData", JSON.stringify(blogData));
    }
    setBlogPosts(blogData);
  }, []);

  const deleteBlogPost = (id) => {
    const updatedBlogPosts = blogPosts.filter((blog) => blog.id !== id);
    localStorage.setItem("localBlogData", JSON.stringify(updatedBlogPosts));
    setBlogPosts(updatedBlogPosts);
  };

  const addBlogPost = (formData) => {
    var addedBlogPosts = [...blogPosts, formData];
    localStorage.setItem("localBlogData", JSON.stringify(addedBlogPosts));
    setBlogPosts(addedBlogPosts);
  };

  const editBlogPost = (formData) => {
    const updatedBlogPosts = blogPosts.map((blog) => {
      if (blog.id === formData.id) {
        blog = formData;
      }
      return blog;
    });
    localStorage.setItem("localBlogData", JSON.stringify(updatedBlogPosts));
    setBlogPosts(updatedBlogPosts);
  };
  return (
    <div>
      
      <BlogList
        blogPosts={blogPosts}
        deleteBlogPost={deleteBlogPost}
        editBlogPost={editBlogPost}
      />
      <AddNewBlog addBlogPost={addBlogPost} />
    </div>
  );
};

export default HomePage;
