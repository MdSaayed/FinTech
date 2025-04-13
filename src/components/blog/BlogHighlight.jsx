import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation

// Image for the arrow icon
import ArrowUpRight from '/assets/icons/arrow-up-right.svg';

const BlogHighlight = ({ blog }) => {
    const { image, title, excerpt, id } = blog; // Destructure blog data

    return (
        <article className="px-4 py-6 rounded-2xl bg-white">
            {/* Blog Image with Link */}
            {
                image && (
                    <div className='w-full max-h-72 overflow-hidden rounded-3xl mb-5'>
                        <Link to={`/blog/${id}`}> {/* Link to the specific blog post */}
                            <img 
                                className='w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02] rounded-3xl' 
                                src={image} 
                                alt={title}  // Alt text for accessibility
                            />
                        </Link>
                    </div>
                )
            }
            
            <div>
                {/* Blog Title with Link */}
                {
                    title && (
                        <Link to={`/blog/${id}`}> {/* Link to the specific blog post */}
                            <h2 className='text-2xl  text-slate-900 font-medium leading-snug'>{title}</h2> {/* Blog Title */}
                        </Link>
                    )
                }

                {/* Blog Excerpt */}
                {
                    excerpt && (
                        <p className='mt-4 mb-6  text-base'>{excerpt}</p> 
                    )
                }

                {/* Read More Link */}
                <div className="flex items-center gap-3 cursor-pointer group">
                    <Link to={`/blog/${id}`} className="text-purple-600 text-base font-normal leading-snug">
                        Read More
                    </Link>
                    <img 
                        src={ArrowUpRight} 
                        alt="Arrow Icon"  // Alt text for accessibility
                        className="transition-transform duration-300 group-hover:rotate-45" // Rotate icon on hover
                    />
                </div>
            </div>
        </article>
    );
};

// Prop validation to ensure that the right data is passed to the component
BlogHighlight.propTypes = {
    blog: PropTypes.shape({
        image: PropTypes.string.isRequired,  // Ensure image is a string and required
        title: PropTypes.string.isRequired,  // Ensure title is a string and required
        excerpt: PropTypes.string.isRequired, // Ensure excerpt is a string and required
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,  // ID can be either string or number
    }).isRequired, // Ensure blog prop is required
};

export default BlogHighlight;
