import { useState } from "react";
import "./Accordion.css";


const Accordion = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="accordion-item">
      <button
        onClick={onClick}
        className={`accordion-button ${isOpen ? "active" : ""}`}
      >
        <span className="font-medium">{title}</span>
        <span className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}>
          {isOpen ? "-" : "+"}
        </span>
      </button>

      <div
        className={`accordion-content ${
          isOpen ? "open" : ""
        }`}
      >
        <p className="accordionContent">{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
