import BlogList from "./components/BlogList/BlogList"
import blogImages from './images/blogImages.jpg'; 
import './App.css'
import AddNewBlog from "./components/BlogList/AddNewBlog";
import { useState } from "react";
import blogData from "./data/blogData";

const App = () => {
  const [blogPosts, setBlogPosts] = useState(blogData);

  const handleAddBlog = (newBlog) => {
      setBlogPosts([...blogPosts, newBlog]);
      console.log(newBlog);
      console.log(blogPosts);
  };
  return (
    <div>
      <img className="blogImages"  src={blogImages} alt="blogImages"/>
      <h1></h1>
      <BlogList blogPosts={blogPosts}/>
      <AddNewBlog onAddBlog={handleAddBlog} />
    </div>
  )
}

export default App