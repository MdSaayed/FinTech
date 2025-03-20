import React, { useState, useEffect } from 'react';
import Title from '../title/Title';
import Subtitle from '../subtitle/Subtitle';
import Description from '../description/Description';
import BlogCard from './BlogCard';
import { blogData } from '../../data/blogs';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    // Log to check the structure of blogData
    useEffect(() => {
        console.log(blogData); // Ensure blogData is an array
        setBlogs(blogData || []); // Set the blogs to an empty array if blogData is undefined or null
    }, []);

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
                    {blogs?.map((blog, idx) => (
                        <BlogCard key={idx} blog={blog} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
