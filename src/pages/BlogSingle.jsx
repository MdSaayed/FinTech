import React from "react";
import { useLoaderData } from "react-router-dom";
import { Cta, BlogFeatured, Title, ErrorMessage, Faq } from "../components";
import blogDateFormat from "../components/blog/blogDateFormat"; 

/** BlogSingle Component Displays A Detailed View Of A Single Blog Post. */
const BlogSingle = () => {
  const blog = useLoaderData(); // Fetch Blog Data Using useLoaderData Hook

  if(!blog) return <ErrorMessage error="Oops! Blog Post Not Found." />

  const { title, image, date, details_image, author } = blog; // Destructure Blog Data

  return (
    <>
      {/* Blog Single Section */}
      <section>
        <div className="container -mt-16 lg:mt-0">
          <div className="bg-white px-4 md:px-5 lg:px-10 py-16 rounded-2xl">
            <div className="text-center space-y-6">
              {title && <Title level={1} className="max-w-3xl">{title}</Title>} {/* Post Title */}
              {date && <span className="text-sm text-gray-600 ">{blogDateFormat(date)}</span>} {/* Post Date */}
              
              {(details_image || image) && ( // Post Thumbnail, Checks If Image Exists
                <div className="py-12 mx-auto max-w-5xl">
                  <img className="w-full mx-auto rounded-3xl" src={details_image || image} alt={title} loading="lazy" />
                </div>
              )}

              {/* Content */}
              <div className="space-y-10 text-left max-w-5xl mx-auto">
                  <p className="text-left text-gray-600 font-inter text-lg">
                    Mastering budgeting is essential for taking charge of your finances and reaching your financial aspirations. Whether you're just starting out or aiming to enhance your approach, this guide offers actionable steps to develop and sustain a budget tailored to your lifestyle.
                  </p>

                  <div className="space-y-5">
                    <h3 className="text-2xl font-medium text-slate-900">Why Budgeting is a Big Deal</h3>
                    <p className="text-left text-gray-600 font-inter text-lg">
                      Budgeting goes beyond merely cutting costs; it’s about crafting a financial strategy. A well-structured budget allows you to monitor your income and expenditures, pinpoint savings opportunities, set and reach financial objectives, and steer clear of unnecessary debt and financial anxiety.
                    </p>
                  </div>

                  <div className="space-y-5">
                    <h3 className="text-2xl font-medium text-slate-900">Take a Look at Your Money Situation</h3>
                    <p className="text-left text-gray-600 font-inter text-lg">
                      Begin by assessing your current financial situation. Compile your income from all avenues, including your salary, freelance work, or passive earnings. Identify fixed costs such as rent, utilities, and loan repayments, alongside variable expenses like groceries, entertainment, and transport.
                    </p>
                  </div>

                  <div className="space-y-5">
                    <h3 className="text-2xl font-medium text-slate-900">Define Your Money Goals</h3>
                    <p className="text-left text-gray-600 font-inter text-lg">
                      Clarify your budgeting goals. These can range from short-term objectives, like saving for a getaway, to long-term aspirations, such as purchasing a house. Having specific goals will keep you motivated and on track.
                    </p>
                  </div>

                  <div className="space-y-5">
                    <h3 className="text-2xl font-medium text-slate-900">Pick a Budgeting Style That Works for You</h3>
                    <p className="text-left text-gray-600 font-inter text-lg">
                      Choose a budgeting approach that fits your lifestyle. You might consider the 50/30/20 method, where you allocate 50% of your income to necessities, 30% to desires, and 20% to savings. Alternatively, explore the zero-based budget, which assigns every dollar a specific role to ensure your income matches your expenses plus savings. The envelope system is another viable choice, utilizing cash envelopes for various spending categories.
                    </p>
                  </div>

                  <div className="space-y-5">
                    <h3 className="text-2xl font-medium text-slate-900">Keep an Eye on Things and Make Changes</h3>
                    <p className="text-left text-gray-600 font-inter text-lg">
                      Utilize apps, spreadsheets, or a journal to keep track of your budget. Regularly review it and adjust as necessary to accommodate any changes in your income or expenses.
                    </p>
                  </div>

                  <div className="space-y-5">
                    <h3 className="text-2xl font-medium text-slate-900">Success Tips</h3>
                    <p className="text-left text-gray-600 font-inter text-lg">
                      Automate your savings by arranging automatic transfers to your savings account. Reduce unnecessary spending by canceling subscriptions you don’t use and seeking more affordable options. Stay adaptable, understanding that life evolves, and your budget should adjust accordingly without any guilt.
                    </p>
                  </div>

                  <div className="space-y-5">
                    <h3 className="text-2xl font-medium text-slate-900">Wrapping It Up</h3>
                    <p className="text-left text-gray-600 font-inter text-lg">
                      Grasping the fundamentals of budgeting is key to achieving financial success. By establishing a budget, monitoring your progress, and remaining dedicated, you’ll be well-equipped to realize your financial ambitions and tackle life’s challenges with assurance.
                    </p>
                  </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog */}
      <BlogFeatured />

      {/* Cta */}
      <Cta /> 
    </>
  );
};

export default BlogSingle;
