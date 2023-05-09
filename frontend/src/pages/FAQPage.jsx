import React, { useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";

const FAQPage = () => {
  return (
    <div>
      <Header activeHeading={5} />
      <Faq />
      <Footer />
    </div>
  );
};

const Faq = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <div className={`${styles.section} my-8`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQ</h2>
      <div className="mx-auto space-y-4">
        <div className={`${styles.faqDiv}`}>
          <button
            className={`${styles.faqButton}`}
            onClick={() => toggleTab(2)}
          >
            <span className={`${styles.faqButtonText}`}>
              What is your return policy?
            </span>
            {activeTab === 2 ? (
              <svg
                className={`${styles.faqButtonIcon}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className={`${styles.faqButtonIcon}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 2 && (
            <div className={`${styles.faqAnswer}`}>
              <p className={`${styles.faqText}`}>blah blah blah</p>
            </div>
          )}
        </div>

        <div className={`${styles.faqDiv}`}>
          <button
            className={`${styles.faqButton}`}
            onClick={() => toggleTab(4)}
          >
            <span className={`${styles.faqButtonText}`}>
              How do I contact customer support?
            </span>
            {activeTab === 4 ? (
              <svg
                className={`${styles.faqButtonIcon}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className={`${styles.faqButtonIcon}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 4 && (
            <div className={`${styles.faqAnswer}`}>
              <p className={`${styles.faqText}`}>blah blah blah</p>
            </div>
          )}
        </div>

        <div className={`${styles.faqDiv}`}>
          <button
            className={`${styles.faqButton}`}
            onClick={() => toggleTab(5)}
          >
            <span className={`${styles.faqButtonText}`}>
              Can I change or cancel my order?
            </span>
            {activeTab === 5 ? (
              <svg
                className={`${styles.faqButtonIcon}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className={`${styles.faqButtonIcon}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 5 && (
            <div className={`${styles.faqAnswer}`}>
              <p className={`${styles.faqText}`}>blah blah blah</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;