import React, { useEffect, useState } from "react";
import { blogLoader } from "../../routes/Loader";
import { Subtitle, Title, Description, BlogGridItem, Loading, ErrorMessage } from "../../components";

/** BlogGrid Component Displays A Collection Of Blog Posts In A Grid Layout. */
const BlogGrid = () => {
  const [blogs, setBlogs] = useState([]); // State To Hold Blog Data, Initially Empty
  const [loading, setLoading] = useState(true); // State To Manage Loading State
  const [error, setError] = useState(null); // State To Manage Error Handling

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await blogLoader(); // Fetch The Data (Ensure It Returns A Promise)
        setBlogs(data); // Store The Fetched Data In State
      } catch (err) {
        setError("Failed To Load Blogs"); // Set Error Message If Fetching Fails
      } finally {
        setLoading(false); // Set Loading To False Once Fetching Is Complete
      }
    };

    fetchBlogs(); // Call The Function When The Component Mounts
  }, []); // Empty Dependency Array Ensures The Effect Runs Only Once On Mount

  if (loading) return <Loading />; // Show Loading Component If Data Is Being Fetched
  if (error) return <ErrorMessage error={error} />; // Display Error Message If There's An Error

  return (
    <section>
      <div className="container">
        <Subtitle text="Blog" align="justify-center" /> {/* Subtitle */}
        <Title>Cool News And <span>Updates</span></Title> {/* Title */}
        <Description text="Get The Scoop With Handy Tips, Money Advice, And The Freshest Updates To Help You Along Your Financial Path." className="max-w-xl" /> {/* Description */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16 px-6 md:px-12 lg:px-20 py-16 bg-white rounded-2xl">
          {blogs?.slice(3, 9)?.map((blog) => ( // Slice Blogs, It Shows From 3 To 9
            <BlogGridItem key={blog?.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
