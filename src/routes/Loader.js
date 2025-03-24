// Loader.js

// Fetch fallback function
export const fetchWithFallback = async (url, fallbackFile) => {
    const isDevMode = import.meta.env.MODE === 'development'; // Checks if it's in development mode

    try {
        // If no API URL is set, directly load fallback
        if (!url || url.includes("example.com")) {

            // Only show info message in development mode
            if (isDevMode) {
                console.info(`ℹ️ No valid API URL provided. Loading fallback: ${fallbackFile}`);
            }

            return await fetch(fallbackFile).then(res => res.json());
        }

        const response = await fetch(url);
        if (!response.ok) throw new Error(`API response not OK: ${response.status}`);

        return await response.json();
    } catch (error) {
        if (isDevMode) {
             console.warn(`⚠️ API fetch failed for ${url}: ${error.message}. Using fallback data.`);
        }

        try {
            const fallbackResponse = await fetch(fallbackFile);
            if (!fallbackResponse.ok) throw new Error("Fallback data not available");

            return await fallbackResponse.json();
        } catch (fallbackError) {
            
            if (isDevMode) {
                console.error(`❌ Both API and fallback failed for URL: ${url || 'undefined URL'}.
                    Error Details: 
                    - API Error: ${error.message}
                    - Fallback Error: ${fallbackError.message}`);
            }
            
            return []; // Prevents breaking the UI
        }
    }
};

// Loader for a single blog post by ID 
export const singlePostLoader = async ({ params }) => {
    const { id } = params;  // Extract postId from the route params
    const apiUrl = import.meta.env.VITE_BLOGS_API_URL;
    const demoDataUrl = '/data/blogs.json';
    
    const data = await fetchWithFallback(apiUrl, demoDataUrl);
    return data.find(post => post.id === parseInt(id)) || {}; // Ensure id is compared correctly
};

// Loader for all blog posts
export const blogLoader = async () => {
    const apiUrl = import.meta.env.VITE_BLOGS_API_URL || '';
    const demoDataUrl = '/data/blogs.json';
    
    return await fetchWithFallback(apiUrl, demoDataUrl);
};

// Loader for single pricing data
export const singlePricingLoader = async ({ params }) => {
    const { id } = params; // Extract the id from the route params
    const apiUrl = import.meta.env.VITE_PRICING_API_URL;
    const demoDataUrl = '/data/pricing.json';

    // Fetch the data with fallback
    const data = await fetchWithFallback(apiUrl, demoDataUrl);

    // Convert id to a number and find the matching pricing
    const pricing = data.find(pricing => pricing.id === Number(id));   
    return pricing || {}; // Return the pricing or an empty object if not found
};

// Loader for all pricing data
export const pricingLoader = async () => {
    const apiUrl = import.meta.env.VITE_PRICING_API_URL || '';
    const demoDataUrl = '/data/pricing.json';
    
    return await fetchWithFallback(apiUrl, demoDataUrl);
};

// Loader for FAQs
export const faqLoader = async () => {
    const apiUrl = import.meta.env.VITE_FAQ_API_URL || '';
    const demoDataUrl = '/data/faqs.json';
    
    return await fetchWithFallback(apiUrl, demoDataUrl);
};

// Loader for team members
export const teamMemberLoader = async () => {
    const apiUrl = import.meta.env.VITE_TEAM_API_URL || '';
    const demoDataUrl = '/data/team.json';
    
    return await fetchWithFallback(apiUrl, demoDataUrl);
};