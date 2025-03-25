import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import { blogLoader } from '../../routes/Loader.js'; // Import the loader to fetch blog data
import { BlogHighlight, Description, Subtitle, Title  } from '../index.js';


const BlogFeatured = ({ postLimit = 3 }) => {
    const [blogs, setBlogs] = useState([]);  // State to hold blog data, initially empty
    const [loading, setLoading] = useState(true);  // State to manage loading state
    const [error, setError] = useState(null);  // State to manage error handling

    useEffect(() => {
        // Function to fetch blogs from the blogLoader
        const fetchBlogs = async () => {
            try {
                const data = await blogLoader();  // Fetch the data (ensure it returns a Promise)
                setBlogs(data);  // Store the fetched data in state
            } catch (err) {
                setError("Failed to load blogs");  // Set error message if fetching fails
            } finally {
                setLoading(false);  // Set loading to false once fetching is complete
            }
        };

        fetchBlogs();  // Call the function when the component mounts
    }, []);  // Empty dependency array ensures the effect runs only once on mount

    // Show loading state or error if any
    if (loading) return <div>Loading...</div>;  // You can replace this with a custom loading component
    if (error) return <div>{error}</div>;  // Display error message if there's an error

    return (
        <section>
            <div className="container">
                {/* Subtitle for the section */}
                <Subtitle text="Blog" align={'justify-center'} className={'bg-white'} />

                {/* Title for the section */}
                <Title className="max-w-[740px] text-center">
                    Unlock the <span>full potential of</span> your organization's data!
                </Title>

                {/* Description for the section */}
                <Description text="The tools and tricks that today’s teams need to help their companies thrive." className="max-w-[480px]" />

                {/* Blog Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
                    {blogs?.slice(0, postLimit)?.map((blog, idx) => (
                        <BlogHighlight key={idx} blog={blog} />  // Render BlogHighlight for each blog post
                    ))}
                </div>
            </div>
        </section>
    );
};

// Prop validation to ensure the correct prop types are passed
BlogFeatured.propTypes = {
    postLimit: PropTypes.number, // Number of posts to display, default is 3
};

export default BlogFeatured;
