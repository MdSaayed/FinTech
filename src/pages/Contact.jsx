import React, { useState } from "react";
import useEmailJS from '../hooks/useEmailJS'; // Custom hook to handle email sending
import { Cta, Faq, Title, Subtitle, ContactInfo, InputField } from "../components"; // Reusable components for layout and UI

// Icons
import PhoneIcon from "/assets/icons/phone-call.svg";
import EmailIcon from "/assets/icons/email.svg";
import LocationIcon from "/assets/icons/location.svg";

const Contact = () => {
    // Initialize state for form data and error messages
    const [formData, setFormData] = useState({ name: "", company: "", email: "" });
    const [errors, setErrors] = useState({}); // Stores form validation errors
    const { sendEmail, isSending, error } = useEmailJS(); // Custom hook for sending the email

    // Handle input field changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Validate the form fields for required values
    const validate = () => {
        let tempErrors = {}; // Temporary errors object
        if (!formData.name) tempErrors.name = "Name is required"; // Name is required
        if (!formData.company) tempErrors.company = "Company name is required"; // Company name is required
        if (!formData.email) tempErrors.email = "Business email is required"; // Email is required
        setErrors(tempErrors); // Update errors state
        return Object.keys(tempErrors).length === 0; // Return true if no errors are present
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        if (validate()) { // If validation is successful
            await sendEmail(formData); // Send the email using the custom hook
            setFormData({ name: "", company: "", email: "" }); // Reset form after successful submission
        }
    };

    return (
        <>
            {/* Contact Form Section */}
            <section>
                <div className="container">
                    {/* Subtitle with class for centered text */}
                    <Subtitle align='justify-center' text='Contact' className='bg-white' />
                    
                    {/* Title Component for the main heading */}
                    <Title className="max-w-xl text-center">Contact our team <span>for answers!</span></Title>

                    {/* Contact Form Area (Form and Contact Information displayed in a two-column layout) */}
                    <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center mt-16 max-w-5xl bg-white rounded-3xl py-16 px-4 md:px-10">
                        {/* Form Section */}
                        <div className="bg-white text-black rounded-xl w-full">
                            <form onSubmit={handleSubmit}>
                                {/* Name Input Field */}
                                <InputField 
                                    label="Your name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    error={errors.name}
                                />
                                
                                {/* Company Input Field */}
                                <InputField 
                                    label="Company name"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Acme Inc."
                                    error={errors.company}
                                />
                                
                                {/* Email Input Field */}
                                <InputField 
                                    label="Business email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="example@business.com"
                                    error={errors.email}
                                />
                                
                                {/* Submit Button */}
                                <input type='submit' disabled={isSending} value={isSending ? 'Sending...' : 'Submit'} className="bg-purple-600 text-white w-full px-4 py-2 rounded-3xl text-lg mt-6" />
                                
                                {/* Error message from email sending process */}
                                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                            </form>
                        </div>

                        {/* Contact Information Section */}
                        <div className="text-white w-full lg:pl-16">
                            {/* Card layout for phone, email, and location */}
                            <div className="bg-slate-900 py-8 px-6 rounded-xl space-y-6 w-full">
                                <ContactInfo
                                    icon={PhoneIcon}
                                    label="Phone Number"
                                    value="+123 456 789 012"
                                />
                                <ContactInfo
                                    icon={EmailIcon}
                                    label="Email Address"
                                    value="airvest@gmail.com"
                                />
                                <ContactInfo
                                    icon={LocationIcon}
                                    label="Location"
                                    value="Sunnyvale, CA"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Frequently Asked Questions Section */}
            <Faq />

            {/* Call-to-Action Section */}
            <Cta />
        </>
    );
};

export default Contact;
