import React from 'react';
import Subtitle from './../components/subtitle/Subtitle';
import Title from './../components/title/Title';
import Description from './../components/description/Description';
import { Link, useLoaderData } from 'react-router-dom';
import BlogGrid from '../components/blog/BlogGrid';
import Faq from '../components/faq/Faq';
import Cta from '../components/cta/Cta';

const Blog = () => {
    const blogs = useLoaderData();

    return (
        <>
            <section>
                <div className="container">
                    {/* Subtitle */}
                    <Subtitle text='Blog' align='justify-center' />

                    {/* Title */}
                    <Title>Cool News and <span>Updates</span></Title>

                    {/* Description */}
                    <Description text='Get the scoop with handy tips, money advice, and the freshest updates to help you along your financial path.' className='max-w-xl' />

                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16 px-6 md:px-12 lg:px-20 py-16 bg-white rounded-2xl">
                        {blogs?.slice(3, 9)?.map((blog) => (  //Slice Blogs , It Shown from 3 to 9
                            <article 
                                key={blog?.id} 
                                className="flex flex-col overflow-hidden bg-white"
                            >
                                <Link to={`/blog/${blog?.id}`} className="block  rounded-3xl overflow-hidden">
                                    <img 
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02] rounded-3xl" 
                                        src={blog?.image} 
                                        alt={blog?.title} 
                                        loading="lazy"
                                    />
                                </Link>
                                <div className="space-y-4 mt-5">
                                    <h2 className="text-2xl font-semibold text-slate-900 leading-snug">
                                        <Link to={`/blog/${blog?.id}`}>
                                            {blog?.title}
                                        </Link>
                                    </h2>
                                    <p className="text-gray-600">{blog?.excerpt}</p>
                                    <p className="text-sm text-gray-500">{blog?.date}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Faq */}
            <Faq />

            {/* Blogs */}
            <BlogGrid />

            {/* Cta */}
            <Cta />
        </>
    );
};

export default Blog;