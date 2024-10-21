import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    const {title} = bookmark

    return (
        <div>
            <h3 className="text-lg font-semibold p-5 rounded-lg mb-4 bg-white">{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;