import React from 'react';
import Subtitle from './../components/subtitle/Subtitle';
import Title from './../components/title/Title';
import Description from './../components/description/Description';
import BlogFeatured from '../components/blog/BlogFeatured';
import Faq from '../components/faq/Faq';
import Cta from '../components/cta/Cta';
import BlogGrid from '../components/blog/BlogGrid';

const Blog = () => {

    return (
        <>
            {/* Blog Grid */}
            <BlogGrid />

            {/* Faq */}
            <Faq />

            {/* Blogs */}
            <BlogFeatured />

            {/* Cta */}
            <Cta />
        </>
    );
};

export default Blog;