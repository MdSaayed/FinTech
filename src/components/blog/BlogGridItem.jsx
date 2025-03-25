import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * BlogGridItem Component Displays A Single Blog Post In A Grid Layout.
 */
const BlogGridItem = ({ blog }) => {
  // Return Blog Article Layout
  return (
    <article
      className="flex flex-col overflow-hidden bg-white"
    >
      {/* Blog Image With Link */}
      <Link
        to={`/blog/${blog?.id}`}
        className="block rounded-3xl overflow-hidden"
      >
        <img
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02] rounded-3xl"
          src={blog?.image}
          alt={blog?.title}
          loading="lazy"
        />
      </Link>

      {/* Blog Content */}
      <div className="space-y-4 mt-5">
        {/* Blog Title */}
        <h2 className="text-2xl font-geist font-semibold text-slate-900 leading-snug">
          <Link to={`/blog/${blog?.id}`}>
            {blog?.title}
          </Link>
        </h2>

        {/* Blog Excerpt */}
        <p className="text-gray-600">{blog?.excerpt}</p>

        {/* Blog Date */}
        <p className="text-sm text-gray-500">{blog?.date}</p>
      </div>
    </article>
  );
};

// PropTypes Validation
BlogGridItem.propTypes = {
  blog: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogGridItem;
