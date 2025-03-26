import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import blogDateFormat from "./blogDateFormat";

/**
 * BlogGridItem Component Displays A Single Blog Post In A Grid Layout.
 */
const BlogGridItem = ({ blog }) => {
  // Blog Data
  const { id, date, image, title, excerpt } = blog;

  return (
    <article className="flex flex-col overflow-hidden bg-white">
      {/* Blog Image With Link (only render if image exists) */}
      {image && (
        <Link to={`/blog/${id}`} className="block rounded-3xl overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02] rounded-3xl"
            src={image}
            alt={title}
            loading="lazy"
          />
        </Link>
      )}

      {/* Blog Content */}
      <div className="space-y-4 mt-5">
        {/* Blog Title (only render if title exists) */}
        {title && (
          <h2 className="text-2xl font-geist font-semibold text-slate-900 leading-snug">
            <Link to={`/blog/${id}`}>{title}</Link>
          </h2>
        )}

        {/* Blog Excerpt (only render if excerpt exists) */}
        {excerpt && <p className="text-gray-600">{excerpt}</p>}

        {/* Blog Date (only render if date exists) */}
        {date && (
          <p className="text-sm text-gray-500">{blogDateFormat(date)}</p>
        )}
      </div>
    </article>
  );
};

// PropTypes Validation
BlogGridItem.propTypes = {
  blog: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    excerpt: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
};

export default BlogGridItem;
