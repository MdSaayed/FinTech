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


// Loader for Blog Data
export async function blogLoader() {
    // Get API URL from environment variables (Edit .env file to change)
    const API_URL = import.meta.env.VITE_BLOGS_API_URL;

    try {
        if (API_URL) {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error("API Fetch Failed");
            return await response.json();
        }
    } catch (error) {
        console.warn("API fetch failed, loading demo data instead.", error);
    }

    // Fallback: Load local JSON data if API is unavailable
    const response = await fetch("/data/blogs.json");
    return await response.json();
}







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


