import React, { useState } from "react";
import Swal from 'sweetalert2';  // Import SweetAlert2 for showing popups
import Cta from '../components/cta/Cta';  // Call-to-action component
import Faq from '../components/faq/Faq';  // FAQ section component
import Title from '../components/title/Title';  // Title component for section heading
import Subtitle from '../components/subtitle/Subtitle';  // Subtitle component for section description
import Button from "../components/button/Button";  // Custom Button component
import useEmailJS from '../hooks/useEmailJS';  // Import the custom hook for sending email

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
    });

    const [errors, setErrors] = useState({});
    const { sendEmail, isSending, error } = useEmailJS(); // Using the useEmailJS hook

    // Handle changes in form fields and update state accordingly
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Validation function to check if all required fields are filled
    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = "Name is required";  // Name is required
        if (!formData.company) tempErrors.company = "Company name is required";  // Company name is required
        if (!formData.email) tempErrors.email = "Business email is required";  // Email is required
        setErrors(tempErrors);  // Set the validation errors in state
        return Object.keys(tempErrors).length === 0;  // Return true if no errors exist
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent default form submission behavior
        if (validate()) {  // If form validation passes
            // Send email using the custom hook
            await sendEmail(formData);

            // Optionally reset form data after successful submission
            setFormData({
                name: "",
                company: "",
                email: "",
            });
        }
    };

    return (
        <>
            {/* Contact Section */}
            <section>
                <div className="container">
                    {/* Subtitle component to display a section heading */}
                    <Subtitle align='justify-center' text='Contact' className='bg-white' />

                    {/* Title component for the main section heading */}
                    <Title className="max-w-xl text-center">Contact our team <span>for answers!</span></Title>

                    {/* Contact Area - Form and contact information */}
                    <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center mt-16 max-w-5xl bg-white rounded-3xl py-16 px-4 md:px-10">
                        {/* Form Section */}
                        <div className="bg-white text-black rounded-xl w-full">
                            <form onSubmit={handleSubmit}>
                                {/* Name Field */}
                                <div className="space-y-4 mb-4">
                                    <label className="block text-gray-700 font-medium">Your name *</label>
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`w-full p-2 border rounded-lg outline-none focus:ring-1 focus:ring-purple-200 focus:border-purple-600 ${errors.name ? "border-red-500" : "border-gray-300"}`}
                                            placeholder="John Doe"
                                        />
                                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}  {/* Error message for name */}
                                    </div>
                                </div>
                                {/* Company Field */}
                                <div className="space-y-4 mb-4">
                                    <label className="block text-gray-700 font-medium">Company name *</label>
                                    <div>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className={`w-full p-2 border rounded-lg outline-none focus:ring-1 focus:ring-purple-200 focus:border-purple-600 ${errors.company ? "border-red-500" : "border-gray-300"}`}
                                            placeholder="Ui Bazar"
                                        />
                                        {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}  {/* Error message for company */}
                                    </div>
                                </div>
                                {/* Email Field */}
                                <div className="space-y-4 mb-10">
                                    <label className="block text-gray-700 font-medium">Business email *</label>
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full p-2 border rounded-lg outline-none focus:ring-1 focus:ring-purple-200 focus:border-purple-600 ${errors.email ? "border-red-500" : "border-gray-300"}`}
                                            placeholder="contact.uibazar@gmail.com"
                                        />
                                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}  {/* Error message for email */}
                                    </div>
                                </div>
                                {/* Submit Button */}
                                <input type='submit' disabled={isSending} value={isSending ? 'Sending...' : 'Submit'} className="bg-purple-600 text-white w-full px-4 py-2 rounded-3xl text-lg" />
                                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                            </form>
                        </div>
                        {/* Contact Information Section */}
                        <div className="text-white w-full lg:pl-16">
                            <div className="bg-slate-900 py-8 px-6 rounded-xl space-y-6 w-full">
                                {/* Phone Contact */}
                                <div className="flex items-center space-x-4 border border-slate-800 px-6 py-4 rounded-2xl">
                                    <img src="/assets/icons/phone-call.svg" className="bg-slate-800 h-8 w-8 rounded-full p-2 object-contain " />
                                    <div>
                                        <p className="text-gray-400 text-sm">Phone number</p>
                                        <p className="text-lg">+123 456 789 012</p>
                                    </div>
                                </div>
                                {/* Email Contact */}
                                <div className="flex items-center space-x-4 border border-slate-800 px-6 py-4 rounded-2xl">
                                    <img src="/assets/icons/email.svg" className="bg-slate-800 h-8 w-8 rounded-full p-2 object-contain " />
                                    <div>
                                        <p className="text-gray-400 text-sm">Email address</p>
                                        <p className="text-lg">airvest@gmail.com</p>
                                    </div>
                                </div>
                                {/* Location */}
                                <div className="flex items-center space-x-4 border border-slate-800 px-6 py-4 rounded-2xl">
                                    <img src="/assets/icons/location.svg" className="bg-slate-800 h-8 w-8 rounded-full p-2 object-contain " />
                                    <div>
                                        <p className="text-gray-400 text-sm">Location</p>
                                        <p className="text-lg">Sunnyvale, CA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Faq */}
            <Faq />

            {/* Cta */}
            <Cta />
        </>
    );
};

export default Contact;
