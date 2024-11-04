// components/FaqAccordion.js
import React, { useState } from "react";

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "What time should I arrive?",
      answer: "Arrive at least 1 hour before the ceremony starts.",
    },
    {
      question: "Can I bring extra guests?",
      answer: "Each graduate is allowed up to 2 guests.",
    },
    {
      question: "Where can I park?",
      answer: "Parking is available in the north and west lots of the campus.",
    },
    {
      question: "Do I need to bring my registration ID?",
      answer: "Yes, please bring your ID for check-in.",
    },
  ];

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <div
            className="faq-question"
            onClick={() => handleAccordionToggle(index)}
          >
            {faq.question}
          </div>
          {index === activeIndex && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
