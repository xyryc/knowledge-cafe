import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    title,
    cover,
    reading_time,
    author_img,
    author,
    posted_date,
    hashtags,
  } = blog;

  return (
    <div className="mb-20">
      <img
        className="rounded-lg mb-8 w-full"
        src={cover}
        alt={`cover picture of title ${title}`}
      />
      <div className="flex justify-between mb-4">
        <div className="flex gap-6">
          <img
            className="w-[60px]"
            src={author_img}
            alt={`image of author: ${author}`}
          />
          <div>
            <h4 className="text-2xl font-bold">{author}</h4>
            <p className="text-base font-semibold text-gray-600">
              {posted_date}
            </p>
          </div>
        </div>
        <div className="flex gap-2 text-gray-600 items-center">
          <span className="text-xl font-medium">{reading_time} min read</span>
          <button onClick={() => handleAddToBookmark(blog)}>
            <FaRegBookmark></FaRegBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-[40px] font-bold">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx} className="text-xl font-medium mr-4 text-gray-600">
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(reading_time)}
        className="text-[#6047EC] underline text-xl font-semibold py-7"
      >
        Mark as read
      </button>

      <hr />
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blog;
