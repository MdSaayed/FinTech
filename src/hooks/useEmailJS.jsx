import { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

// Custom hook to handle sending emails using EmailJS
const useEmailJS = () => {
    // State to manage loading status while sending email
    const [isSending, setIsSending] = useState(false);
    // State to store any error messages
    const [error, setError] = useState(null);

    // Default EmailJS credentials (fallback if environment variables are not set)
    const defaultServiceId = 'service_g8426qe';
    const defaultTemplateId = 'template_d7rhqgp';
    const defaultUserId = 'a7CZvHvebnYjPTy5h';

    // Function to send email using EmailJS API
    const sendEmail = async (formData) => {
        setIsSending(true); // Set loading state to true
        setError(null); // Reset error state before sending

        // Retrieve EmailJS credentials from .env file (or use default values)
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || defaultServiceId;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || defaultTemplateId;
        const userId = import.meta.env.VITE_EMAILJS_USER_ID || defaultUserId;

        // Warn if fallback credentials are being used
        if (
            serviceId === defaultServiceId ||
            templateId === defaultTemplateId ||
            userId === defaultUserId
        ) {
            // Only show this warning in development mode
            if (import.meta.env.MODE === 'development') {
                console.info(`ℹ️ Using fallback EmailJS credentials. Please configure your own credentials in the .env file.`);
            }
        }

        // Email template parameters (values to be sent via email)
        const templateParams = {
            name: formData.name,
            company: formData.company,
            email: formData.email,
        };

        try {
            // Send email using EmailJS
            await emailjs.send(serviceId, templateId, templateParams, userId);
            
            // Success message popup using SweetAlert2
            Swal.fire({
                icon: 'success',
                title: 'Form Submitted!',
                text: 'Thank you for reaching out. We will get back to you shortly.',
                confirmButtonText: 'Close',
            });
        } catch (error) {
            // Set error state if email sending fails
            setError('Something went wrong, please try again later.');
            
            // Error message popup using SweetAlert2
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: 'Failed to send email, please try again later.',
                confirmButtonText: 'Close',
            });
        } finally {
            setIsSending(false); // Reset loading state after sending
        }
    };

    // Return sendEmail function, loading state, and error state
    return { sendEmail, isSending, error };
};

export default useEmailJS;