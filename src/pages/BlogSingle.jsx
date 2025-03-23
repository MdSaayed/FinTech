import React from 'react';
import Title from './../components/title/Title';
import { useLoaderData } from 'react-router-dom';
import BlogGrid from '../components/blog/BlogGrid';
import Cta from './../components/cta/Cta';

const BlogSingle = () => {
    const {title,image,date,content,details_img} =useLoaderData( );
 

    return (
        <>
            {/* Blog Details */}
            <section>
                <div className="container">
                    <div className="bg-white rounded-2xl py-16 px-2 md:px-16 lg:px-28">
                        <div className="text-center space-y-6">
                            {/* Post Author */}
                            <span className='text-sm font-normal font-geist text-purple-600'>By Sarah Thompson</span>

                            {/* Post Title */}
                            <Title level={1} className='max-w-3xl'>{title}</Title>

                            {/* Post Date */}
                            <span className='text-sm text-gray-600 font-geist'>{date}</span>

                            {/* Post Thumbnail */}
                            {
                            (details_img || image) && (
                                <div className='py-12'>
                                    <img className='mx-auto max-w-full' src={details_img || image} alt={title} />
                                </div>
                            )
                            }

                            {/* Post Content */}
                            {
                                content && (
                                    <div className="px-6 md:px-6 lg:px-12">
                                        <p className="text-left text-gray-600 font-inter text-lg">{content}</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog */}
            <BlogGrid />

            {/* Cta */}
            <Cta />
        </>
    );
};

export default BlogSingle;