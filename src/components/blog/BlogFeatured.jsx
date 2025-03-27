import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import { blogLoader } from '../../routes/Loader.js'; // Import the loader to fetch blog data
import { useLoading } from "../../context/LoadingContext"; // Import Loading Context To Manage Loading State
import { BlogHighlight, Description, ErrorMessage, Loading, Subtitle, Title  } from '../index.js';


const BlogFeatured = ({ postLimit = 3 }) => {
    const [blogs, setBlogs] = useState([]);  // State to hold blog data, initially empty
    const [error, setError] = useState(null);  // State to manage error handling
    const { startLoading, stopLoading } = useLoading(); // Get Loading Context Methods

    useEffect(() => {
        startLoading(); // Trigger Loading Animation When Data Fetch Starts

        // Function to fetch blogs from the blogLoader
        const fetchBlogs = async () => {
            try {
                const data = await blogLoader();  // Fetch the data (ensure it returns a Promise)
                const featuredBlogs = data.filter(blog => blog.featured);  // Filter blogs to show only featured ones
                setBlogs(featuredBlogs);  // Store the filtered data in state
                
                if (!data || data.length === 0) {
                    throw new Error("No blogs available."); // Handle empty response
                }

            } catch (err) {
                setError("Failed to load blogs. Please try again later.");  // Set error message if fetching fails
            } finally {
                stopLoading(); // Stop Loading Animation In Case Of Error
            }
        };

        fetchBlogs();  // Call the function when the component mounts
    }, []);  // Empty dependency array ensures the effect runs only once on mount

    
    // Show loading state or error if any
    if (error) return <ErrorMessage error={error} />;  // Display error message if there's an error

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
