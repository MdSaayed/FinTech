import React from "react";
import { useLoaderData } from "react-router-dom";
import { Cta, BlogFeatured, Title, ErrorMessage, Faq } from "../components";
import blogDateFormat from "../components/blog/blogDateFormat"; 

/** BlogSingle Component Displays A Detailed View Of A Single Blog Post. */
const BlogSingle = () => {
  const blog = useLoaderData(); // Fetch Blog Data Using useLoaderData Hook

  if(!blog) return <ErrorMessage error="Oops! Blog Post Not Found." />

  const { title, image, date, content, details_image, author } = blog; // Destructure Blog Data

  return (
    <>
      {/* Blog Single Section */}
      <section>
        <div className="container -mt-16 lg:mt-0">
          <div className="bg-white px-4 md:px-5 lg:px-10 py-16 rounded-2xl">
            <div className="text-center space-y-6">
              {author && <span className="text-sm font-normal  text-purple-600">{author}</span>} {/* Post Author */}
              {title && <Title level={1} className="max-w-3xl">{title}</Title>} {/* Post Title */}
              {date && <span className="text-sm text-gray-600 ">{blogDateFormat(date)}</span>} {/* Post Date */}
              
              {(details_image || image) && ( // Post Thumbnail, Checks If Image Exists
                <div className="py-12">
                  <img className="mx-auto rounded-3xl" src={details_image || image} alt={title} loading="lazy" />
                </div>
              )}

              {content && ( // Post Content
                <div className="px-6 md:px-6 lg:px-12">
                  <p className="max-w-3xl mx-auto text-left text-gray-600 font-inter text-lg">{content}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Faq */}
      <Faq/>

      {/* Featured Blog */}
      <BlogFeatured />

      {/* Cta */}
      <Cta /> 
    </>
  );
};

export default BlogSingle;
