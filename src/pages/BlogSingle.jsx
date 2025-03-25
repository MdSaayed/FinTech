import React from "react";
import { useLoaderData } from "react-router-dom";
import { Cta, BlogFeatured, Title } from "../components";

/** BlogSingle Component Displays A Detailed View Of A Single Blog Post. */
const BlogSingle = () => {
  const blog = useLoaderData(); // Fetch Blog Data Using useLoaderData Hook

  const { title, image, date, content, details_img, author } = blog; // Destructure Blog Data

  return (
    <>
      {/* Blog Single Section */}
      <section>
        <div className="container">
          <div className="bg-white rounded-2xl py-16 px-2 md:px-16 lg:px-28">
            <div className="text-center space-y-6">
              {author && <span className="text-sm font-normal font-geist text-purple-600">{author}</span>} {/* Post Author */}
              {title && <Title level={1} className="max-w-3xl">{title}</Title>} {/* Post Title */}
              {date && <span className="text-sm text-gray-600 font-geist">{date}</span>} {/* Post Date */}
              
              {(details_img || image) && ( // Post Thumbnail, Checks If Image Exists
                <div className="py-12">
                  <img className="mx-auto max-w-full" src={details_img || image} alt={title} loading="lazy" />
                </div>
              )}

              {content && ( // Post Content
                <div className="px-6 md:px-6 lg:px-12">
                  <p className="text-left text-gray-600 font-inter text-lg">{content}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog Section */}
      <BlogFeatured />

      {/* Cta */}
      <Cta /> 
    </>
  );
};

export default BlogSingle;
