import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faq } from "../data/faq";

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
            {openFAQ === faq.id && (
              <div className="px-6 pb-4">
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
