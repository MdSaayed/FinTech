import React, { useEffect, useState } from 'react';
import Title from '../title/Title';
import Subtitle from '../subtitle/Subtitle';
import Description from '../description/Description';
import BlogCard from './BlogCard';
import PropTypes from 'prop-types';
import { blogLoader } from '../../routes/Loader.js'; 

const BlogGrid = ({ postLimit = 3 }) => {
    const [blogs, setBlogs] = useState([]);  // Initialize with an empty array
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const data = await blogLoader();  // Ensure blogLoader is returning a Promise of an array
                setBlogs(data);
            } catch (err) {
                setError("Failed to load blogs");
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);  // Empty dependency array ensures this effect runs only once when the component mounts


    return (
        <section>
            <div className="container">
                {/* Subtitle */}
                <Subtitle text="Blog" align={'justify-center'} className={'bg-white'} />

                {/* Title */}
                <Title className="max-w-[740px] text-center">
                    Unlock the <span>full potential of</span> your organization's data!
                </Title>

                {/* Description */}
                <Description text="The tools and tricks that today’s teams need to help their companies thrive." className="max-w-[480px]" />

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
                    {blogs?.slice(0, postLimit)?.map((blog, idx) => (
                        <BlogCard key={idx} blog={blog} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// Set default post limit and validate prop
BlogGrid.propTypes = {
    postLimit: PropTypes.number, // Client can pass number of posts to show
};
 

export default BlogGrid;
