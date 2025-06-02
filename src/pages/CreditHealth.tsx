
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TrendingUp, Clock, Target, CheckCircle } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CreditHealth = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Credit Worthiness Indicator
          </h1>
          <p className="text-xl text-slate-200">
            Understanding Credit Score and Its Importance
          </p>
        </div>
      </section>

      {/* What is Credit Score Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Is Credit Score? Why Is It Important to Have a Good Credit Score?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Credit Score is your creditworthiness, which is basically how well you have managed your loans, credit cards, buy now pay later facilities, overdraft or other credit lines
            </p>
          </div>
          
          {/* Credit Score Gauge Visual */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <div className="text-center">
              <div className="relative inline-block">
                <svg width="400" height="250" viewBox="0 0 400 250" className="mx-auto">
                  {/* Poor Section */}
                  <path d="M 50 200 A 150 150 0 0 1 120 85 L 200 150 Z" fill="#dc2626" />
                  <text x="85" y="160" className="text-sm font-medium fill-white">POOR</text>
                  <text x="85" y="175" className="text-xs fill-white">300-550</text>
                  
                  {/* Average Section */}
                  <path d="M 120 85 A 150 150 0 0 1 200 50 L 200 150 Z" fill="#ea580c" />
                  <text x="155" y="95" className="text-sm font-medium fill-white">AVERAGE</text>
                  <text x="160" y="110" className="text-xs fill-white">550-680</text>
                  
                  {/* Good Section */}
                  <path d="M 200 50 A 150 150 0 0 1 280 85 L 200 150 Z" fill="#65a30d" />
                  <text x="235" y="95" className="text-sm font-medium fill-white">GOOD</text>
                  <text x="235" y="110" className="text-xs fill-white">680-730</text>
                  
                  {/* Very Good Section */}
                  <path d="M 280 85 A 150 150 0 0 1 350 200 L 200 150 Z" fill="#16a34a" />
                  <text x="285" y="160" className="text-sm font-medium fill-white">VERY GOOD</text>
                  <text x="295" y="175" className="text-xs fill-white">730-780</text>
                  
                  {/* Excellent Section */}
                  <path d="M 350 200 A 150 150 0 0 1 350 200 L 200 150 Z" fill="#059669" />
                  <text x="315" y="200" className="text-sm font-medium fill-white">EXCELLENT</text>
                  <text x="325" y="215" className="text-xs fill-white">780+</text>
                  
                  {/* Needle */}
                  <line x1="200" y1="150" x2="160" y2="80" stroke="black" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="200" cy="150" r="8" fill="black" />
                </svg>
              </div>
              
              {/* Question Boxes */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-yellow-100 p-3 rounded-lg text-sm">
                  <p className="font-medium text-gray-800">How often do you apply for credit?</p>
                </div>
                <div className="bg-orange-100 p-3 rounded-lg text-sm">
                  <p className="font-medium text-gray-800">How long have you had credit line or credit?</p>
                </div>
                <div className="bg-green-100 p-3 rounded-lg text-sm">
                  <p className="font-medium text-gray-800">How much credit do you use?</p>
                </div>
                <div className="bg-red-100 p-3 rounded-lg text-sm">
                  <p className="font-medium text-gray-800">Do you repay your dues on time?</p>
                </div>
                <div className="bg-green-100 p-3 rounded-lg text-sm">
                  <p className="font-medium text-gray-800">How many accounts do you have?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CIBIL Ratings Table */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-orange-500">
                  <TableHead className="text-white font-bold">CIBIL Ratings</TableHead>
                  <TableHead className="text-white font-bold">Credit Score</TableHead>
                  <TableHead className="text-white font-bold">Chances of being approved for a Personal Loan</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="bg-red-50">
                  <TableCell className="font-medium">Poor</TableCell>
                  <TableCell>Less than 630</TableCell>
                  <TableCell>You will not qualify for a personal loan</TableCell>
                </TableRow>
                <TableRow className="bg-orange-50">
                  <TableCell className="font-medium">Average</TableCell>
                  <TableCell>630 - 680</TableCell>
                  <TableCell>Loan may be approved, but at a higher interest rate</TableCell>
                </TableRow>
                <TableRow className="bg-yellow-50">
                  <TableCell className="font-medium">Good</TableCell>
                  <TableCell>680 - 730</TableCell>
                  <TableCell>Loan is likely to be approved with a high interest rate</TableCell>
                </TableRow>
                <TableRow className="bg-green-50">
                  <TableCell className="font-medium">Very Good</TableCell>
                  <TableCell>730 - 780</TableCell>
                  <TableCell>Loan with a moderate interest rate, larger loan amount</TableCell>
                </TableRow>
                <TableRow className="bg-emerald-50">
                  <TableCell className="font-medium">Excellent</TableCell>
                  <TableCell>780 Above</TableCell>
                  <TableCell>Loan with a very low interest rate, faster approval, larger loan amount</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          
          <div className="mt-8 text-gray-700">
            <p className="text-lg font-medium mb-4">
              Lenders seek your credit score to assess the risk factor in lending to you, which is basically as follows:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-base">
              <li>Whether they should lend to you or not</li>
              <li>If they want to lend, at what interest rates and loan terms should they lend to you.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* How is CIBIL Score Calculated */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            How is my CIBIL score calculated?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            As mentioned earlier, the credit bureaus use data from your credit history to calculate and arrive at your credit score.
          </p>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              The factors that affect your credit score are
            </h3>
            <p className="text-gray-700 mb-6">
              Following are the reasons why most people may have poor credit score:
            </p>
            
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>Multiple Loan Enquiry/Applications</li>
              <li>Having Multiple Credit Cards and Multiple Loans</li>
              <li>High Usage of Available Credit card limit</li>
              <li>Delayed Payments (Paid within the Same Month)</li>
              <li>Missed Payments (Skipped by not paying within the same month)</li>
              <li>Settled Accounts</li>
              <li>Written-off Accounts</li>
            </ol>
          </div>
        </div>
      </section>

      {/* How to Maintain 750+ Credit Score */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            How Can I maintain 750 above Credit Score?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Maintaining a good credit score can be done easily by doing the following:
          </p>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                1. Pay Your Bills on Time:
              </h3>
              <p className="text-gray-700">
                Timely payments have the biggest impact on your credit score. Set reminders or enable auto-debit to ensure your credit card and loan EMIs are paid without delay.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2. Keep Credit Utilization Low:
              </h3>
              <p className="text-gray-700 mb-4">
                Aim to use no more than 30% of your total credit limit. Using too much credit or maxing out your cards can hurt your credit score.
              </p>
              <p className="text-gray-600 text-sm bg-gray-50 p-3 rounded">
                For example, if you have 2 credit cards which have Rs.50,000 and Rs.40,000 as their respective credit limits which adds up to a total credit limit of Rs.90,000. The recommended credit utilization ratio is 30% i.e. Rs.27,000.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3. Limit New Credit Applications:
              </h3>
              <p className="text-gray-700">
                It is advisable to restrict the number of new credit applications within a short span of time, as each hard inquiry is recorded on your credit report and can negatively impact your credit score. Multiple inquiries may also signal to lenders that you are credit-hungry or struggling to manage your finances effectively, which can reduce your chances of loan approval.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                4. Multiple Loans/Credit Cards:
              </h3>
              <p className="text-gray-700">
                Having several loans or credit cards is bad, it increases your repayment burden and risk of missed payments. Lenders may also see it as a sign of credit dependency.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                5. Monitor Your Credit Report Regularly:
              </h3>
              <p className="text-gray-700">
                Check your credit report on a regular basis to make sure banks/NBFC have updated your repayment history.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Good News Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Good News About Credit Scores
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Not Permanent</h3>
              <p className="text-gray-600">
                The good news is that a poor credit score is not permanent
              </p>
            </div>

            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Always Improvable</h3>
              <p className="text-gray-600">
                You can always improve it by taking appropriate steps
              </p>
            </div>

            <div className="text-center p-6 bg-slate-50 rounded-lg">
              <div className="bg-slate-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Worth the Investment</h3>
              <p className="text-gray-600">
                Although it may take some time, it is worth improving your score before applying for a new loan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Timeline for Improvement
            </h2>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <Clock className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">6 to 12 Months</h3>
                <p className="text-gray-600">Duration to improve your credit score</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-orange-600 pl-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Method</h4>
                <p className="text-gray-600">
                  Based on the timely repayment of the new loan that you avail
                </p>
              </div>
              
              <div className="border-l-4 border-green-600 pl-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Strategy</h4>
                <p className="text-gray-600">
                  Getting a loan with a poor credit score is difficult, so it's always a good idea to improve your credit score before applying
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CreditHealth;
