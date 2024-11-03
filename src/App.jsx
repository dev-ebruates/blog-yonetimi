import BlogList from "./components/BlogList/BlogList"
import blogImages from './images/blogImages.jpg'; 
import './App.css'
import AddNewBlog from "./components/BlogList/AddNewBlog";
import { useState } from "react";
import staticBlogData from "./data/blogData";

const App = () => {
  // localStorage.clear();
  let blogData = localStorage.getItem("localBlogData") === null ? null : JSON.parse(localStorage.getItem("localBlogData"));
  if(blogData === null){
    blogData = staticBlogData;
    localStorage.setItem("localBlogData", JSON.stringify(blogData));
  }
  
  const [blogPosts, setBlogPosts] = useState(blogData);
  const [isSorted, setIsSorted] = useState(false);

  const handleAddBlog = (newBlog) => {
      blogPosts.push(newBlog);
      setBlogPosts([...blogPosts]);
      console.log(newBlog);
      console.log(blogPosts);
      localStorage.setItem("localBlogData", JSON.stringify(blogPosts));
  };
  const sortByDate = () => {
    const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.tarih) - new Date(a.tarih));
    setBlogPosts(sortedPosts);
    setIsSorted(true);
  };
  return (
    <div>
      <img className="blogImages"  src={blogImages} alt="blogImages"/>
      <button onClick={sortByDate}>
        {isSorted ? 'Tarihe Göre Sıralı' : 'Tarihe Göre Sırala'}
      </button>
      <BlogList blogPosts={blogPosts}/>
      <AddNewBlog onAddBlog={handleAddBlog} />
    </div>
  )
}

export default App