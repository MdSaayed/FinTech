/**
 * FetchWithFallback Function Handles API Requests With A Fallback Mechanism.
 *
 * @param {string} url - The API URL To Fetch Data From.
 * @param {string} fallbackFile - The Fallback JSON File Path To Use If API Fails.
 * @returns {Promise<Array|Object>} - Returns JSON Data From API Or Fallback.
 *
 * Features:
 * - Checks If The Environment Is In Development Mode.
 * - Uses A Fallback JSON File If No Valid API URL Is Provided.
 * - Logs Informational Messages Only In Development Mode.
 * - Throws An Error If The API Response Is Not OK.
 * - Attempts To Load The Fallback Data If The API Request Fails.
 * - Logs Warnings And Errors In Development Mode For Better Debugging.
 * - Ensures The UI Does Not Break By Returning An Empty Array As A Last Resort.
 *
 * Usage:
 * Call This Function With An API URL And A Fallback JSON File Path.
 * 
 * Example:
 * fetchWithFallback('https://api.example.com/data', '/fallback/data.json')
 *   .then(data => console.log(data))
 *   .catch(error => console.error(error));
 *
 * Notes For ThemeForest:
 * - Provides A Robust Data Fetching Mechanism For Seamless User Experience.
 * - Ensures That The UI Does Not Break Even If The API And Fallback Both Fail.
 * - Optimized For Both Production And Development Environments.
 */
export const fetchWithFallback = async (url, fallbackFile) => {
    // Checks If The Environment Is In Development Mode
    const isDevMode = import.meta.env.MODE === 'development';

    try {
        // If No API URL Is Set Or Uses A Placeholder Domain, Load Fallback Directly
        if (!url || url.includes("example.com")) {

            // Logs An Info Message Only In Development Mode
            if (isDevMode) {
                console.info(`ℹ️ No Valid API URL Provided. Loading Fallback: ${fallbackFile}`);
            }

            // Fetch And Return JSON Data From The Fallback File
            return await fetch(fallbackFile).then(res => res.json());
        }

        // Fetch Data From The Provided API URL
        const response = await fetch(url);

        // If The API Response Is Not OK, Throw An Error
        if (!response.ok) throw new Error(`API Response Not OK: ${response.status}`);

        // Return The API Response In JSON Format
        return await response.json();
    } catch (error) {
        // If API Fetch Fails, Show A Warning In Development Mode
        if (isDevMode) {
            console.warn(`⚠️ API Fetch Failed For ${url}: ${error.message}. Using Fallback Data.`);
        }

        try {
            // Attempt To Fetch And Return Data From The Fallback File
            const fallbackResponse = await fetch(fallbackFile);

            // If The Fallback Response Is Not OK, Throw An Error
            if (!fallbackResponse.ok) throw new Error("Fallback Data Not Available");

            // Return The Fallback Data In JSON Format
            return await fallbackResponse.json();
        } catch (fallbackError) {
            // If Both API And Fallback Fetch Fail, Show An Error In Development Mode
            if (isDevMode) {
                console.error(`❌ Both API And Fallback Failed For URL: ${url || 'Undefined URL'}.
                    Error Details: 
                    - API Error: ${error.message}
                    - Fallback Error: ${fallbackError.message}`);
            }

            // Return An Empty Array To Prevent UI Breakage
            return [];
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