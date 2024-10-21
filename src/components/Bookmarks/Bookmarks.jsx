import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 p-[30px] bg-gray-100 rounded-lg">
      <div className="mb-12">
        <h3 className="text-xl 2xl:text-2xl font-bold py-5 px-12 bg-purple-100 border-[#6047EC] border rounded-lg">
          Spent time on read: {readingTime} min
        </h3>
      </div>

      <h2 className="mb-4 text-xl 2xl:text-2xl font-bold">
        Bookmarked Blogs: {bookmarks.length}
      </h2>
      <div>
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default Bookmarks;
