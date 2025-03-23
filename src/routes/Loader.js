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


// Loader for Single Blog Post Data
export async function singlePostLoader({ params }) {
    const API_URL = import.meta.env.VITE_BLOGS_API_URL;

    try {
        if (API_URL) {
            // Fetch the blog data from the API
            const response = await fetch(`${API_URL}`);
            
            if (!response.ok) throw new Error("API Fetch Failed");

            // Check if the response is JSON
            const contentType = response.headers.get("Content-Type");
            if (contentType && contentType.includes("application/json")) {
                const blogs = await response.json();
                const post = blogs.find(blog => blog.id === parseInt(params.id));

                if (post) {
                    return post; // Return the matching blog post
                } else {
                    throw new Error("Post not found");
                }
            } else {
                throw new Error("Expected JSON, but got something else.");
            }
        }
    } catch (error) {
        console.warn("API fetch failed, loading demo data instead.", error);
    }

    // Fallback: Load local JSON data if API is unavailable
    try {
        const localFile = `/data/blogs.json`;
        console.log(`Fetching local data from: ${localFile}`); // Debugging log

        const response = await fetch(localFile);
        if (!response.ok) throw new Error("Local fetch failed");

        const blogs = await response.json();
        const post = blogs.find(blog => blog.id === parseInt(params.id));

        if (post) {
            return post; // Return the matching blog post
        } else {
            throw new Error("Post not found");
        }
    } catch (error) {
        console.error("Failed to load demo data:", error);
    }

    // Return error message if both API and fallback fail
    return { error: "Post not found" };
}





// Loader for Pricing Details
export const LoadSinglePricingData = async ({ params }) => {
    const planId = String(params.id); // Convert URL param to string

    console.log("URL Param as String:", planId); // Debugging output

    const selectedPlan = planData.find((plan, index) => String(index) === planId); // Convert index to string

    if (!selectedPlan) throw new Response("Plan not found", { status: 404 });

    return selectedPlan;
};


