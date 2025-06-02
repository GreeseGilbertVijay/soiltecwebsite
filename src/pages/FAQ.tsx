
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does it take to improve my credit score?",
      answer: "It takes 6 to 12 months to improve your credit score based on the timely repayment of new loans that you avail."
    },
    {
      question: "Can a poor credit score be improved?",
      answer: "Yes, the good news is that a poor credit score is not permanent. You can always improve it by taking appropriate steps."
    },
    {
      question: "Do you charge for your services?",
      answer: "No, Samatva does not charge any fees from customers for its credit counselling service, unlike other counselling companies."
    },
    {
      question: "Who is eligible for your services?",
      answer: "Our services are for salaried customers who are currently employed."
    },
    {
      question: "Can you help with settled accounts?",
      answer: "Yes, Samatva will help, provided you have no more than two settled accounts."
    },
    {
      question: "How do you help with settled accounts?",
      answer: "Samatva assists customers in securing funding from an RBI-registered financial institution to clear overdue amounts on settled accounts only, thus improving their credit profile."
    },
    {
      question: "Should I improve my credit before applying for loans?",
      answer: "Yes, getting a loan with a poor credit score is difficult. It's always a good idea to improve your credit score before applying for a new loan or credit card."
    },
    {
      question: "What makes Samatva different from other credit counseling companies?",
      answer: "Samatva offers completely free services with no hidden fees, works only with RBI-registered financial institutions, and provides personalized support specifically for employed professionals."
    },
    {
      question: "How does the credit improvement process work?",
      answer: "We start with a free consultation, assess your financial situation, create a customized improvement plan, and provide ongoing support throughout your 6-12 month journey to better credit health."
    },
    {
      question: "What if I have more than two settled accounts?",
      answer: "Currently, our settlement account support service is available only for customers with no more than two settled accounts. However, we can still provide general credit counseling guidance."
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-blue-100">
            Find answers to common questions about our services
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openQuestion === index ? (
                        <ChevronUp className="text-blue-600" size={24} />
                      ) : (
                        <ChevronDown className="text-blue-600" size={24} />
                      )}
                    </div>
                  </div>
                </button>
                
                {openQuestion === index && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team is here to help. Get in touch for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors transform hover:scale-105"
            >
              Contact Us
            </a>
            <a 
              href="/services" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn About Our Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
