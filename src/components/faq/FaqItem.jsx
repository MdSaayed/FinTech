import PropTypes from "prop-types";
import { motion } from 'framer-motion';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

// FaqItem Component For Rendering Each Item
const FaqItem = ({ question, answer, index, openIndex, toggleFAQ }) => (
    <div
        className={`faq-item px-4 py-3 rounded-md ${openIndex === index ? 'bg-softWhite' : ''}`}
    >
        <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center text-left focus:outline-none"
            aria-expanded={openIndex === index} // Accessibility Improvement
            aria-controls={`faq-answer-${index}`}
        >
            <span className="text-lg font-medium text-neutral-900 leading-normal mr-2">
                {question}
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
            id={`faq-answer-${index}`} // Accessibility Improvement
            initial={{ height: 0, opacity: 0 }}
            animate={openIndex === index ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden pr-4 md:pr-10 lg:pr-12 mt-4"
        >
            <div className="text-gray-700 max-w-[600px] font-normal leading-normal text-base">
                <p>{answer}</p>
            </div>
        </motion.div>
    </div>
);

// Prop Validation For FaqItem Component
FaqItem.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    openIndex: PropTypes.number,
    toggleFAQ: PropTypes.func.isRequired,
};

export default FaqItem;