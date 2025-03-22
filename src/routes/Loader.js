import { planData } from "../data/plans"; // Import the data correctly


// loaders.js
export const fetchData = async (url) => {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to fetch data from ${url}`);
        return await res.json();
    } catch (error) {
        throw new Error(error.message || "Something went wrong");
    }
};

// Loader for Pricing Details
export const LoadSinglePricingData = async ({ params }) => {
    const planId = String(params.id); // Convert URL param to string

    console.log("URL Param as String:", planId); // Debugging output

    const selectedPlan = planData.find((plan, index) => String(index) === planId); // Convert index to string

    if (!selectedPlan) throw new Response("Plan not found", { status: 404 });

    return selectedPlan;
};

// Loader for Blog Details
export const loadSingleBlogData = async ({ params }) => {
    const data = await fetchData(" ");
    const selectedBlog = data.find((blog) => String(blog.id) === params.id); 

    if (!selectedBlog) throw new Error("Blog post not found");
    return selectedBlog;
};


