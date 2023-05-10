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
        {/* single Faq */}

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
              <p className={`${styles.faqText}`}>
                If you are not satisfied with your order, you can make a request for a refund after your order is delivered.
              </p>
            </div>
          )}
        </div>

        <div className={`${styles.faqDiv}`}>
          <button
            className={`${styles.faqButton}`}
            onClick={() => toggleTab(3)}
          >
            <span className={`${styles.faqButtonText}`}>
              How do I track my order?
            </span>
            {activeTab === 3 ? (
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
          {activeTab === 3 && (
            <div className={`${styles.faqAnswer}`}>
              <p className={`${styles.faqText}`}>
                You can log in to your account and select 'Track Order'.
              </p>
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
              <p className={`${styles.faqText}`}>
                Once you have confirmed an order, you cannot change or cancel it. However, you can still make a refund request after your order is delivered.
              </p>
            </div>
          )}
        </div>

        <div className={`${styles.faqDiv}`}>
          <button
            className={`${styles.faqButton}`}
            onClick={() => toggleTab(7)}
          >
            <span className={`${styles.faqButtonText}`}>
              What payment methods do you accept?
            </span>
            {activeTab === 7 ? (
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
          {activeTab === 7 && (
            <div className={`${styles.faqAnswer}`}>
              <p className={`${styles.faqText}`}>
                We accept Visa, Mastercard, PayPal and cash on delivery.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
