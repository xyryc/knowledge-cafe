import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([])

  const handleAddToBookmark =(blog) => {
   const newBookmarks = [...bookmarks, blog]
   setBookmarks(newBookmarks)
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex w-11/12 mx-auto mt-8 gap-6">
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
