import React, { useEffect, useState } from "react";
import { blogLoader } from "../../routes/Loader"; // Import The Blog Loader Function
import { useLoading } from "../../context/LoadingContext"; // Import Loading Context To Manage Loading State
import { Subtitle, Title, Description, BlogGridItem, ErrorMessage } from "../../components"; // Import Reusable Components

/** BlogGrid Component Displays A Collection Of Blog Posts In A Grid Layout. */
const BlogGrid = () => {
  const [blogs, setBlogs] = useState([]); // State To Hold Blog Data, Initially Empty
  const [error, setError] = useState(null); // State To Manage Error Handling
  const { startLoading, stopLoading } = useLoading(); // Get Loading Context Methods

  /** useEffect Hook For Fetching Blogs When Component Mounts */
  useEffect(() => {
    startLoading(); // Trigger Loading Animation When Data Fetch Starts

    /** Fetch Blogs Data Asynchronously */
    const fetchBlogs = async () => {
      try {
        const data = await blogLoader(); // Fetch The Data (Ensure It Returns A Promise)
        setBlogs(data); // Store The Fetched Data In State
      } catch (err) {
        setError("Failed To Load Blogs"); // Set Error Message If Fetching Fails
        stopLoading(); // Stop Loading 
      }
    };

    fetchBlogs(); // Call The Function When The Component Mounts
  }, []); // Empty Dependency Array Ensures The Effect Runs Only Once On Mount

  // Display Error Message If There's An Error
  if (error) return <ErrorMessage error={error} />;

  return (
    <section>
      <div className="container">
        {/* Subtitle Component Displays Section Subtitle */}
        <Subtitle text="Blog" align="justify-center" />

        {/* Title Component Displays Section Title */}
        <Title className="max-w-[740px] text-center">Cool News And <span>Updates</span></Title>

        {/* Description Component Displays Brief Description For The Section */}
        <Description text="Get The Scoop With Handy Tips, Money Advice, And The Freshest Updates To Help You Along Your Financial Path." className="max-w-xl" />

        {/* Grid Layout For Displaying Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16 px-4 md:px-10 lg:px-20 py-16 bg-white rounded-2xl">
          {blogs?.slice(3, 9)?.map((blog) => (
            // Render Blog Items In The Grid Layout, Slice Data From Index 3 To 9
            <BlogGridItem key={blog?.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
