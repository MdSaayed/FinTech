import React, { useEffect, useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { motion } from 'framer-motion';

import ErrorMessage from './../errorMessage/ErrorMessage';
import LoadingAnimation from './../loadingAnimation/LoadingAnimation';
import Title from './../title/Title';
import Subtitle from './../subtitle/Subtitle';
import Description from './../description/Description';
import { faqData } from '../../data/faq';
import { useLoading } from '../../context/LoadingContext';

const Faq = () => {
    // State for FAQ data (preloaded)
    const [faqs, setFaqs] = useState([]);
    const { isLoading, startLoading, stopLoading } = useLoading();
    const [error, setError] = useState("");
    const [openIndex, setOpenIndex] = useState(null);

    // Simulate a loading effect
    useEffect(() => {
        startLoading();
        setTimeout(() => {
            try {
                setFaqs(faqData); // Load pre-existing data
                stopLoading();
            } catch (err) {
                setError("Failed to load FAQs.");
                stopLoading();
            }
        }, 100); // Simulated delay
    }, []);

    // Toggle FAQ item
    const toggleFAQ = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    // Loading and error management
    if (isLoading) return <LoadingAnimation />;
    if (error) return <ErrorMessage error={error} />;

    return (
        <section className="faq-section bg-lightGrayishWhite py-12">
            <div className="container mx-auto">
                <div className="bg-white rounded-3xl p-8 md:p-20">
                    {/* Subtitle */}
                    <Subtitle text="Frequently questions" align="justify-center" />

                    {/* Title */}
                    <Title>
                        Frequently ask <span>questions</span>
                    </Title>

                    {/* Description */}
                    <Description
                        text="UIAppX streamlines your workflow by providing powerful features like task prioritization, collaboration, time tracking."
                        className="max-w-[600px]"
                    />

                    {/* Grid */}
                    <div className="mt-12 max-w-4xl mx-auto">
                        <div className="faqs space-y-6">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`faq-item px-4 py-5 rounded-md ${
                                        openIndex === index ? 'bg-softWhite' : ''
                                    }`}
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex justify-between items-center text-left focus:outline-none"
                                        aria-expanded={openIndex === index} // Accessibility improvement
                                        aria-controls={`faq-answer-${index}`}
                                    >
                                        <span className="text-lg font-medium text-neutral-900 leading-normal mr-2">
                                            {faq.question}
                                        </span>

                                        {/* Animated Icon */}
                                        <motion.span
                                            className="flex items-center justify-center w-8 h-8 rounded-full"
                                            animate={{ rotate: openIndex === index ? 180 : 0 }} 
                                            transition={{ duration: 0.3 }}
                                        >
                                            {openIndex === index ? (
                                                <AiOutlineMinus className="text-purple-500 rounded-full p-1 text-3xl font-semibold shadow" />
                                            ) : (
                                                <AiOutlinePlus className="text-purple-500 rounded-full p-1 text-3xl font-semibold shadow" />
                                            )}
                                        </motion.span>
                                    </button>

                                    {/* Animated FAQ Answer */}
                                    <motion.div
                                        id={`faq-answer-${index}`} // Accessibility improvement
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={openIndex === index ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden pr-4 md:pr-10 lg:pr-12 mt-4"
                                    >
                                        <div className="text-gray-700 max-w-[600px] font-normal leading-normal text-base">
                                            <p>{faq.answer}</p>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
