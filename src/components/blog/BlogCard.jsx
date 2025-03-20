import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes

const BlogCard = ({ blog }) => {
    const { image, title, excerpt, id } = blog;

    return (
        <div className='px-4 py-6 rounded-lg bg-white'>
            <div className='w-full max-h-72 overflow-hidden rounded-lg mb-5'>
                <img className='w-full h-full object-cover' src={image} alt={title} />
            </div>
            
            <div>
                <h2 className='text-xl font-geist text-slate-900 font-medium leading-snug'>{title}</h2>
                <p className='mt-4 mb-6'>{excerpt}</p>

                <div className="flex items-center gap-3 cursor-pointer group">
                    <Link className="text-purple-600 text-base font-normal leading-snug" to={`/blog/${id}`}>
                        Read More
                    </Link>
                    <img 
                        src="/assets/icons/arrow-up-right.svg" 
                        alt="Arrow"
                        className="transition-transform duration-300 group-hover:rotate-45"
                    />
                </div>
            </div>
        </div>
    );
};

// Prop validation
BlogCard.propTypes = {
    blog: PropTypes.shape({
        image: PropTypes.string.isRequired,  // Image should be a string (URL)
        title: PropTypes.string.isRequired,  // Title should be a string
        excerpt: PropTypes.string.isRequired, // Content should be a string
        id: PropTypes.string.isRequired,      // ID should be a string (use string or number, depending on your data type)
    }).isRequired, // blog prop itself is required
};

export default BlogCard;
