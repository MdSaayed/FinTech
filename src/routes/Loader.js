
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


// Loader for Team Member Data
export async function teamMemberLoader() {
    // Get API URL from environment variables (Edit .env file to change)
    const API_URL = import.meta.env.VITE_TEAM_API_URL;

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
    const response = await fetch("/data/team.json");
    return await response.json();
}


// Loader for Faq Data
export async function faqLoader() {
    // Get API URL from environment variables (Edit .env file to change)
    const API_URL = import.meta.env.VITE_FAQ_API_URL;

    try {
        if (API_URL) {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error("API Fetch Failed");
            return await response.json();
        }
    } catch (error) {
       // Fail silently without console warnings
    }

    // Fallback: Load local JSON data if API is unavailable
    const response = await fetch("/data/faqs.json");
    return await response.json();
}


// Loader for Pricing Data
export async function pricingLoader() {
    // Get API URL from environment variables (Edit .env file to change)
    const API_URL = import.meta.env.VITE_PRICING_API_URL;

    try {
        if (API_URL) {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error("API Fetch Failed");
            return await response.json();
        }
    } catch (error) {
        // Fail silently without console warnings
    }

    // Fallback: Load local JSON data if API is unavailable
    const response = await fetch("/data/pricing.json");
    return await response.json();
}


// Loader for Pricing Single
export async function singlePricingLoader({ params }) {
    const API_URL = import.meta.env.VITE_PRICING_API_URL;

    try {
        if (API_URL) {
            // Fetch the pricing data from the API
            const response = await fetch(`${API_URL}`);

            if (!response.ok) throw new Error("API Fetch Failed");

            // Check if the response is JSON
            const contentType = response.headers.get("Content-Type");
            if (contentType && contentType.includes("application/json")) {
                const pricingData = await response.json();
                const plan = pricingData.find(plan => plan.id === parseInt(params.id));

                if (plan) {
                    return plan; // Return the matching pricing plan
                } else {
                    throw new Error("Plan not found");
                }
            } else {
                throw new Error("Expected JSON, but got something else.");
            }
        }
    } catch (error) {
        // Fail silently without console warnings
    }

    // Fallback: Load local JSON data if API is unavailable
    try {
        const localFile = `/data/pricing.json`;
        console.log(`Fetching local data from: ${localFile}`); // Debugging log

        const response = await fetch(localFile);
        if (!response.ok) throw new Error("Local fetch failed");

        const data = await response.json();
        const plan = data.find(plan => plan.id === parseInt(params.id));

        if (plan) {
            return plan; // Return the matching pricing plan
        } else {
            throw new Error("Plan not found");
        }
    } catch (error) {
        console.error("Failed to load demo data:", error);
    }

    // Return error message if both API and fallback fail
    return { error: "Plan not found" };
}



