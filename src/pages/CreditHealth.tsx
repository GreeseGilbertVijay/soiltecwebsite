import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TrendingUp, Clock, Target, CheckCircle, AlertTriangle, Shield, Award } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
const CreditHealth = () => {
  return <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
        </div>
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Shield className="w-5 h-5 mr-2 text-orange-400" />
            <span className="text-orange-300 font-medium">Credit Worthiness Indicator</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Master Your Credit Score
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Understanding your credit score is the first step towards financial freedom. Learn how to build, maintain, and leverage a powerful credit profile.
          </p>
        </div>
      </section>

      {/* What is Credit Score Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Is a Credit Score?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Your credit score is a three-digit number that represents your creditworthiness - essentially how well you manage credit cards, loans, and other financial obligations.
            </p>
          </div>
          
          {/* Enhanced Credit Score Gauge */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 mb-16 shadow-xl border border-gray-200">
            <div className="text-center">
              <div className="relative inline-block mb-8">
                <svg width="400" height="250" viewBox="0 0 400 250" className="mx-auto drop-shadow-lg">
                  {/* Background semi-circle */}
                  <path d="M 50 200 A 150 150 0 0 1 350 200" fill="none" stroke="#f3f4f6" strokeWidth="20" strokeLinecap="round" />
                  
                  {/* Poor Section (300-550) - Red */}
                  <path d="M 50 200 A 150 150 0 0 1 125 75" fill="none" stroke="#dc2626" strokeWidth="20" strokeLinecap="round" />
                  
                  {/* Average Section (550-680) - Orange */}
                  <path d="M 125 75 A 150 150 0 0 1 200 50" fill="none" stroke="#ea580c" strokeWidth="20" strokeLinecap="round" />
                  
                  {/* Good Section (680-730) - Yellow */}
                  <path d="M 200 50 A 150 150 0 0 1 275 75" fill="none" stroke="#eab308" strokeWidth="20" strokeLinecap="round" />
                  
                  {/* Very Good Section (730-780) - Green */}
                  <path d="M 275 75 A 150 150 0 0 1 350 200" fill="none" stroke="#16a34a" strokeWidth="20" strokeLinecap="round" />
                  
                  {/* Score Labels */}
                  <text x="90" y="150" textAnchor="middle" className="text-sm font-bold fill-red-600">POOR</text>
                  <text x="90" y="165" textAnchor="middle" className="text-xs fill-red-500">300-550</text>
                  
                  <text x="160" y="90" textAnchor="middle" className="text-sm font-bold fill-orange-600">AVERAGE</text>
                  <text x="160" y="105" textAnchor="middle" className="text-xs fill-orange-500">550-680</text>
                  
                  <text x="240" y="90" textAnchor="middle" className="text-sm font-bold fill-yellow-600">GOOD</text>
                  <text x="240" y="105" textAnchor="middle" className="text-xs fill-yellow-500">680-730</text>
                  
                  <text x="310" y="150" textAnchor="middle" className="text-sm font-bold fill-green-600">VERY GOOD</text>
                  <text x="310" y="165" textAnchor="middle" className="text-xs fill-green-500">730-780</text>
                  
                  {/* Needle pointing to 620 (Average section) */}
                  <line x1="200" y1="200" x2="160" y2="110" stroke="#1f2937" strokeWidth="4" strokeLinecap="round" className="drop-shadow-md" />
                  <circle cx="200" cy="200" r="8" fill="#1f2937" className="drop-shadow-lg" />
                  <circle cx="200" cy="200" r="4" fill="#ffffff" />
                  
                  {/* Current Score Display */}
                  <text x="200" y="230" textAnchor="middle" className="text-3xl font-bold fill-gray-900">620</text>
                  <text x="200" y="245" textAnchor="middle" className="text-sm fill-gray-600">Current Score</text>
                </svg>
              </div>
              
              {/* Score Impact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                <Card className="border-red-200 bg-red-50 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <AlertTriangle className="w-8 h-8 text-red-600 mb-2" />
                    <CardTitle className="text-lg text-red-800">Poor (300-550)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-red-700 text-sm">Loan rejection likely</p>
                  </CardContent>
                </Card>

                <Card className="border-orange-200 bg-orange-50 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <Clock className="w-8 h-8 text-orange-600 mb-2" />
                    <CardTitle className="text-lg text-orange-800">Average (550-680)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-orange-700 text-sm">Higher interest rates</p>
                  </CardContent>
                </Card>

                <Card className="border-yellow-200 bg-yellow-50 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CheckCircle className="w-8 h-8 text-yellow-600 mb-2" />
                    <CardTitle className="text-lg text-yellow-800">Good (680-730)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-yellow-700 text-sm">Competitive rates</p>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <Award className="w-8 h-8 text-green-600 mb-2" />
                    <CardTitle className="text-lg text-green-800">Excellent (730+)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-700 text-sm">Best rates & terms</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CIBIL Ratings Table */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">CIBIL Score Impact</h2>
            <p className="text-xl text-gray-600">How your score affects loan approval and interest rates</p>
          </div>
          
          <Card className="overflow-hidden shadow-2xl border-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-gradient-to-r from-orange-500 to-orange-600">
                  <TableHead className="text-white font-bold text-lg py-6">Credit Rating</TableHead>
                  <TableHead className="text-white font-bold text-lg">Score Range</TableHead>
                  <TableHead className="text-white font-bold text-lg">Loan Approval Chances</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="bg-red-50 border-l-4 border-red-500 hover:bg-red-100 transition-colors">
                  <TableCell className="font-semibold text-red-800 py-6">Poor</TableCell>
                  <TableCell className="text-red-700">Less than 630</TableCell>
                  <TableCell className="text-red-700">❌ Loan rejection likely</TableCell>
                </TableRow>
                <TableRow className="bg-orange-50 border-l-4 border-orange-500 hover:bg-orange-100 transition-colors">
                  <TableCell className="font-semibold text-orange-800 py-6">Average</TableCell>
                  <TableCell className="text-orange-700">630 - 680</TableCell>
                  <TableCell className="text-orange-700">⚠️ Higher interest rates</TableCell>
                </TableRow>
                <TableRow className="bg-yellow-50 border-l-4 border-yellow-500 hover:bg-yellow-100 transition-colors">
                  <TableCell className="font-semibold text-yellow-800 py-6">Good</TableCell>
                  <TableCell className="text-yellow-700">680 - 730</TableCell>
                  <TableCell className="text-yellow-700">✅ Likely approval, moderate rates</TableCell>
                </TableRow>
                <TableRow className="bg-green-50 border-l-4 border-green-500 hover:bg-green-100 transition-colors">
                  <TableCell className="font-semibold text-green-800 py-6">Very Good</TableCell>
                  <TableCell className="text-green-700">730 - 780</TableCell>
                  <TableCell className="text-green-700">🎯 Better rates, larger amounts</TableCell>
                </TableRow>
                <TableRow className="bg-emerald-50 border-l-4 border-emerald-500 hover:bg-emerald-100 transition-colors">
                  <TableCell className="font-semibold text-emerald-800 py-6">Excellent</TableCell>
                  <TableCell className="text-emerald-700">780+</TableCell>
                  <TableCell className="text-emerald-700">🏆 Best rates, fast approval</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </div>
      </section>

      {/* Credit Score Factors */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Affects Your Credit Score?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Understanding these key factors can help you improve your credit score effectively</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            title: "Payment History",
            percentage: 35,
            color: "red",
            description: "Most important factor - always pay on time"
          }, {
            title: "Credit Utilization",
            percentage: 30,
            color: "orange",
            description: "Keep usage below 30% of credit limit"
          }, {
            title: "Credit History Length",
            percentage: 15,
            color: "yellow",
            description: "Longer credit history is better"
          }, {
            title: "Credit Mix",
            percentage: 10,
            color: "green",
            description: "Mix of credit types (cards, loans)"
          }, {
            title: "New Credit",
            percentage: 10,
            color: "blue",
            description: "Limit new credit applications"
          }].map((factor, index) => <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">{factor.title}</CardTitle>
                  <CardDescription className="text-gray-600">{factor.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Impact</span>
                      <span className="text-2xl font-bold text-gray-900">{factor.percentage}%</span>
                    </div>
                    <Progress value={factor.percentage} className="h-3" />
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Improvement Tips */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-50">
        
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Credit Improvement Timeline</h2>
            <p className="text-xl text-gray-600">Patience and consistency are key to building excellent credit</p>
          </div>
          
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-orange-50 to-orange-100">
            <CardContent className="p-12">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-orange-600 w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
                  <Clock className="text-white w-10 h-10" />
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">6-12 Months</h3>
                <p className="text-xl text-gray-700 mb-8">Typical timeframe to see significant improvement</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Quick Wins (1-3 months)</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Pay down high balances</li>
                      <li>• Dispute credit report errors</li>
                      <li>• Set up automatic payments</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Long-term Gains (6-12 months)</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Consistent payment history</li>
                      <li>• Lower credit utilization</li>
                      <li>• Avoid new credit applications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>;
};
export default CreditHealth;