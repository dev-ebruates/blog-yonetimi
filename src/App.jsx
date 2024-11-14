import "./App.css";
import staticBlogData from "./data/blogData.js";
import "antd/dist/reset.css";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Header from "./Header/Header.jsx";

const App = () => {
  return (
    <div className="flex items-center gap-6">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage staticBlogData={staticBlogData} />}
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default App;
