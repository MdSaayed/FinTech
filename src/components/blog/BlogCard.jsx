import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes

const BlogCard = ({ blog }) => {
    const { image, title, excerpt, id } = blog;

    return (
        <article className="px-4 py-6 rounded-2xl bg-white">
                {/* Blog Image with Link */}
            <div className='w-full max-h-72 overflow-hidden rounded-3xl mb-5'>
                <Link to={`/blog/${id}`}> {/* Change URL structure if needed */}
                    <img 
                        className='w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02] rounded-3xl' 
                        src={image} 
                        alt={title} 
                    />
                </Link>
            </div>
            
            <div>
                {/* Blog Title with Link */}
                <Link to={`/blog/${id}`}> {/* Change route if needed */}
                    <h2 className='text-xl font-geist text-slate-900 font-medium leading-snug'>{title}</h2>
                </Link>

                {/* Blog Excerpt */}
                <p className='mt-4 mb-6'>{excerpt}</p>

                {/* Read More Link */}
                <div className="flex items-center gap-3 cursor-pointer group">
                    <Link to={`/blog/${id}`} className="text-purple-600 text-base font-normal leading-snug">
                        Read More
                    </Link>
                    <img 
                        src="/assets/icons/arrow-up-right.svg" 
                        alt="Arrow Icon" /* Change icon if needed */
                        className="transition-transform duration-300 group-hover:rotate-45"
                    />
                </div>
            </div>
        </article>
    );
};

// Prop validation
BlogCard.propTypes = {
    blog: PropTypes.shape({
        image: PropTypes.string.isRequired,  // Change to 'optional' if image is not always available
        title: PropTypes.string.isRequired,  // Change validation if title format differs
        excerpt: PropTypes.string.isRequired, // Adjust if using different content structure
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,  // Supports string & number IDs
    }).isRequired,
};

export default BlogCard;
