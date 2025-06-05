import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const FAQ = () => {
  const faqs = [{
    question: "How long does it take to improve my credit score?",
    answer: "It takes 6 to 12 months to improve your credit score based on the timely repayment of new loans that you avail."
  }, {
    question: "Can a poor credit score be improved?",
    answer: "Yes, the good news is that a poor credit score is not permanent. You can always improve it by taking appropriate steps."
  }, {
    question: "Do you charge for your services?",
    answer: "No, Samatva does not charge any fees from customers for its credit counselling service, unlike other counselling companies."
  }, {
    question: "Who is eligible for your services?",
    answer: "Our services are for salaried customers who are currently employed."
  }, {
    question: "Can you help with settled accounts?",
    answer: "Yes, Samatva will help, provided you have no more than two settled accounts."
  }, {
    question: "How do you help with settled accounts?",
    answer: "Samatva assists customers in securing funding from an RBI-registered financial institution to clear overdue amounts on settled accounts only, thus improving their credit profile."
  }, {
    question: "Should I improve my credit before applying for loans?",
    answer: "Yes, getting a loan with a poor credit score is difficult. It's always a good idea to improve your credit score before applying for a new loan or credit card."
  }, {
    question: "What makes Samatva different from other credit counseling companies?",
    answer: "Samatva offers completely free services with no hidden fees, works only with RBI-registered financial institutions, and provides personalized support specifically for employed professionals."
  }, {
    question: "How does the credit improvement process work?",
    answer: "We start with a free consultation, assess your financial situation, create a customized improvement plan, and provide ongoing support throughout your 6-12 month journey to better credit health."
  }, {
    question: "What if I have more than two settled accounts?",
    answer: "Currently, our settlement account support service is available only for customers with no more than two settled accounts. However, we can still provide general credit counseling guidance."
  }];
  return <div className="min-h-screen bg-gray-50">
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
          <div className="space-y-8">
            {faqs.map((faq, index) => {})}
          </div>
        </div>
      </section>

      {/* Additional Questions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. What is a Credit Score?</h3>
              <p className="text-gray-700 leading-relaxed">A credit score is a 3-digit number that rates your creditworthiness. This rating varies from 300 to 900. You can maintain a high credit score by honouring your EMI on time.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Who issues the Credit Score?</h3>
              <p className="text-gray-700 leading-relaxed">The credit score and credit report are calculated and provided by four credit bureaus in India, namely Equifax, CIBIL, CRIF, and Experian.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3. How is the credit score calculated?</h3>
              <p className="text-gray-700 leading-relaxed">Payment history – On-time and consistent repayment provides a positive score.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">4. What is considered a good credit score?</h3>
              <p className="text-gray-700 leading-relaxed">Having a credit score of 700+ is considered the best.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">5. Why should I maintain a good credit score?</h3>
              <p className="text-gray-700 leading-relaxed">A good credit score is essential for securing a loan at the best rates and a higher credit card limit.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">6. What causes a poor or bad credit score?</h3>
              <p className="text-gray-700 leading-relaxed">Not paying EMI on time and credit card dues every month will cause bad credit score.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">7. How often can I check my credit score?</h3>
              <p className="text-gray-700 leading-relaxed">You can check your credit score as many times as you want, and it will not affect your score.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">8. Which is the most accurate credit report?</h3>
              <p className="text-gray-700 leading-relaxed">Credit scores from all four credit bureaus are accurate. While there may be slight variations in the score due to different algorithms, all four scores are equally valid and accepted by lenders.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">9. Are credit scores from all the bureaus the same?</h3>
              <p className="text-gray-700 leading-relaxed">No. Your credit score is likely to vary depending on the bureau. The credit scores generated are not the same, as each bureau has its scoring method.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">10. Where can I check my credit score?</h3>
              <p className="text-gray-700 leading-relaxed">There are 4 different credit bureaus in India that record your credit score. According to RBI regulations, you are entitled to one free credit report per year from any of the credit bureaus.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">11. How can I get my free credit report?</h3>
              <p className="text-gray-700 leading-relaxed">You can also pay the fee to receive detailed and accurate credit reports delivered directly to your inbox, 12 times a year by all the 4 credit bureaus.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">12. How can I check my CIBIL™ score online?</h3>
              <p className="text-gray-700 leading-relaxed">One can check their credit score from any of the credit bureaus' websites. The CIBIL score is easily accessible on the CIBIL website.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">13. Can I improve a poor credit score?</h3>
              <p className="text-gray-700 leading-relaxed">The good news is that a poor credit score is not permanent; you can always improve it by taking appropriate steps. Although it may take some time, it is worth improving your score before applying for a new loan.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">14. Can I get a loan or credit card with a poor credit score?</h3>
              <p className="text-gray-700 leading-relaxed">Getting a loan with a poor credit score is difficult. So, it's always a good idea to improve your credit score before applying for a new loan or credit card.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">15. How long does it take to improve my credit score?</h3>
              <p className="text-gray-700 leading-relaxed">It takes 6 to 12 months to improve your credit score based on the timely repayment of the new loan that you avail.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">16. I have already settled my personal loan and credit card. Why is my CIBIL score still low?</h3>
              <p className="text-gray-700 leading-relaxed">Even if you have settled your loan or credit card, any unpaid or unsettled portion may still be reflected in your CIBIL report as an overdue amount.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">17. What is Samatva?</h3>
              <p className="text-gray-700 leading-relaxed">Samatva is a credit counselling services company registered in Chennai. We specialize in helping individuals improve their CIBIL scores by providing solutions to resolve the unsettled amounts reflected in their credit reports.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">18. How does Samatva help improve my CIBIL score?</h3>
              <p className="text-gray-700 leading-relaxed">Samatva provides solutions to clear unsettled amounts on personal loans and credit cards that appear in your CIBIL report. By securing a loan from an RBI-registered financial Institution to pay the unsettled amount on the existing loan.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">19. Will Samatva help me if my CIBIL score is below 700?</h3>
              <p className="text-gray-700 leading-relaxed">Yes, Samatva will help, provided you have no more than two settled accounts.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">20. What is the maximum amount of financial support available to improve a credit score?</h3>
              <p className="text-gray-700 leading-relaxed">Samatva will help by facilitating through an RBI registered financial institution. The amount provided by them is up to 2 Lakhs maximum, we will connect them with you.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">21. What is the Rate of Interest for the loan provided?</h3>
              <p className="text-gray-700 leading-relaxed">The Loan is provided by an RBI-registered financial institution; we will connect them with you.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">22. What is the tenure of the loan that I will get?</h3>
              <p className="text-gray-700 leading-relaxed">The Loan is provided by an RBI-registered financial institution. The tenure provided by them is minimum 6 months and a maximum of 24 months. We will connect them with you.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">23. Can Samatva help me secure funding to clear my settled overdue accounts?</h3>
              <p className="text-gray-700 leading-relaxed">Yes, Samatva assists customers in securing funding from an RBI-registered financial institution to clear overdue amounts on settled accounts only, thus improving their credit profile.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">24. Will I get a loan to pay the outstanding unsettled amount?</h3>
              <p className="text-gray-700 leading-relaxed">It is for salaried customers who are currently employed.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">25. I am self-employed, will I get a loan to pay the outstanding unsettled amount?</h3>
              <p className="text-gray-700 leading-relaxed">It is only for salaried customers currently employed.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">26. Does Samatva charge any fees for its services?</h3>
              <p className="text-gray-700 leading-relaxed">Samatva does not charge any fees from customers for its credit counselling service, unlike other counselling companies.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">27. Who can benefit from Samatva's services?</h3>
              <p className="text-gray-700 leading-relaxed">Any salaried customer currently employed who has settled personal loan or credit cards with not more than two accounts, but still has outstanding dues can benefit from our services.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">28. How can I get started with Samatva's services?</h3>
              <p className="text-gray-700 leading-relaxed">Once you give your consent to proceed, our experts will assess your CIBIL report and offer the best solutions to clear the unsettled amounts.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">29. Where is Samatva located?</h3>
              <p className="text-gray-700 leading-relaxed">Samatva's registered office is in Chennai.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">30. Why should I share my CIBIL Details?</h3>
              <p className="text-gray-700 leading-relaxed">A credit report is essential to understand your outstanding amount with financial institutions.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">31. How did you get my number?</h3>
              <p className="text-gray-700 leading-relaxed">This call is on a random basis.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">32. Are you calling from the bank?</h3>
              <p className="text-gray-700 leading-relaxed">We are a credit counseling company and not a bank, we help customers by hand holding to come out of credit score issues.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">33. Why should I give my consent to pull my CIBIL Report?</h3>
              <p className="text-gray-700 leading-relaxed">Credit reports are secured, hence we require your consent to understand your current creditworthiness.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">34. Who is the Promoter?</h3>
              <p className="text-gray-700 leading-relaxed">Two Ex-Bankers with more than 25 years of experience each have started this new concept in India.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">35. Why should I trust Samatva?</h3>
              <p className="text-gray-700 leading-relaxed">Thallam and Venkat, Ex-Bankers, have started this concept in India to help delinquent (settled) customers come out of their credit score issues.</p>
            </div>
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
            <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors transform hover:scale-105">
              Contact Us
            </a>
            <a href="/services" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn About Our Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default FAQ;