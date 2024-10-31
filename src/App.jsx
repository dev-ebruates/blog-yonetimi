import BlogList from "./components/BlogList/BlogList"
import blogImages from './images/blogImages.jpg'; 
import './App.css'

const App = () => {
  return (
    <div>
      <img className="blogImages"  src={blogImages} alt="blogImages"/>
      <h1></h1>
      <BlogList/>
    </div>
  )
}

export default App