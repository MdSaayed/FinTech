import React, { useState, useEffect, useCallback } from 'react';
import { faqLoader } from '../../routes/Loader.js'; // Ensure Loader Function Exists
import { useLoading } from "../../context/LoadingContext"; // Import Loading Context To Manage Loading State
import { ErrorMessage, Description, Title, Subtitle, FaqItem } from '../../components';

// Faq Component
const Faq = () => {
    // State For Faq Data
    const [faqs, setFaqs] = useState([]);
    const [openIndex, setOpenIndex] = useState(null); // State For Opened Faq
    const [error, setError] = useState(null); // Error Handling State
    const { startLoading, stopLoading } = useLoading(); // Get Loading Context Methods

    // Fetch Faq Data
    const fetchFaq = useCallback(async () => {
        startLoading(); //Start Loading

        try {
            const data = await faqLoader(); // Ensure faqLoader Is Returning A Promise
            setFaqs(data); // Set Faq Data
        } catch (err) {
            setError("Failed To Load Faq Data"); // Error Handling
        } finally {
            stopLoading(); // Stop Loading
        }
    }, []);

    useEffect(() => {
        fetchFaq(); // Fetch Faq Data On Component Mount
    }, [fetchFaq]);

    // Toggle Faq Item
    const toggleFAQ = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    // If Loading Or Error, Show Respective Component
    if (error) return <ErrorMessage error={error} />;

    return (
        <section>
            <div className="container">
                <div className="bg-white rounded-3xl px-4 py-10 md:p-20">
                    {/* Subtitle */}
                    <Subtitle text="Frequently Asked Questions" align="justify-center" className='bg-purple-200' />

                    {/* Title */}
                    <Title align='justify-center' className='text-center'>
                        Frequently Ask <span>Questions</span>
                    </Title>

                    {/* Description */}
                    <Description
                        text="UIAppX streamlines your workflow by providing powerful features like task prioritization, collaboration, time tracking."
                        className="max-w-[600px]"
                    />

                    {/* Faq List Grid */}
                    <div className="mt-12 max-w-4xl mx-auto">
                        <div className="faqs md:space-y-3 lg:space-y-6">
                            {faqs?.map((faq, index) => {
                                const { question, answer } = faq;
                                return (
                                    <FaqItem
                                        key={index}
                                        question={question}
                                        answer={answer}
                                        index={index}
                                        openIndex={openIndex}
                                        toggleFAQ={toggleFAQ}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};



export default Faq;
