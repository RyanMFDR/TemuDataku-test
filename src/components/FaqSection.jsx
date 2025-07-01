import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faq } from "../data/faq";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-[#002F6C] text-center mb-8">
        Frequently Asked Questions
      </h3>
      <div className="max-w-3xl mx-auto space-y-4">
        {faq.map((faq) => (
          <div key={faq.id} className="bg-gray-50 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
            >
              <span className="font-semibold text-[#002F6C]">
                {faq.question}
              </span>
              {openFAQ === faq.id ? (
                <ChevronUp className="w-5 h-5 text-[#00966C]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#00966C]" />
              )}
            </button>

            {/* Animated Answer */}
            <AnimatePresence initial={false}>
              {openFAQ === faq.id && (
                <motion.div
                  key="faq-answer"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4 overflow-hidden"
                >
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
