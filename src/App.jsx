import BlogList from "./components/BlogList/BlogList";
import blogImages from "./images/blogImages.jpg";
import "./App.css";
import AddNewBlog from "./components/BlogList/AddNewBlog";
import { useState } from "react";
import staticBlogData from "./data/blogData";

const App = () => {
   // localStorage.clear();
   let blogData =
   localStorage.getItem("localBlogData") === null
     ? null
     : JSON.parse(localStorage.getItem("localBlogData"));
 if (blogData === null) {
   blogData = staticBlogData;
   localStorage.setItem("localBlogData", JSON.stringify(blogData));
 }

  const [blogPosts, setBlogPosts] = useState(blogData);
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

  //DELETE
  const handleDeleteBlog = (id) => {
    const updatedBlogPosts = blogData.filter((blog) => blog.id !== id);
    setBlogPosts(updatedBlogPosts);
    localStorage.setItem("localBlogData", JSON.stringify(updatedBlogPosts));
  };
 

  const handleAddBlog = (formData) => {
    blogPosts.push(formData);
    setBlogPosts([...blogPosts]);
    console.log(formData);
    console.log(blogPosts);
    localStorage.setItem("localBlogData", JSON.stringify(blogPosts));
    
  };
  const sortByDate = () => {
    const sortedPosts = [...blogPosts].sort(
      (a, b) => new Date(b.tarih) - new Date(a.tarih)
    );
    setBlogPosts(sortedPosts);
  };
  return (
    <div>
      <img className="blogImages" src={blogImages} alt="blogImages" />
      
      <BlogList handleDeleteBlog={handleDeleteBlog} sortByDate={sortByDate} handleSearch={handleSearch}filteredBlogPosts={filteredBlogPosts} searchTerm={searchTerm}  />
      <AddNewBlog onAddBlog={handleAddBlog} />
    </div>
  );
};

export default App;
