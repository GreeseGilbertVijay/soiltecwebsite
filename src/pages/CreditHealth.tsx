import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TrendingUp, Clock, Target, CheckCircle, AlertTriangle, Shield, Award } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useLanguage } from '@/contexts/LanguageContext';

const CreditHealth = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
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
            {t('creditHealth.title')}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t('creditHealth.subtitle')}
          </p>
        </div>
      </section>

      {/* What is Credit Score Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('creditHealth.whatIs.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('creditHealth.whatIs.description')}
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
                    <CardTitle className="text-lg text-red-800">{t('creditHealth.ratings.poor')} (300-550)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-red-700 text-sm">{t('creditHealth.ratings.poorDesc')}</p>
                  </CardContent>
                </Card>

                <Card className="border-orange-200 bg-orange-50 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <Clock className="w-8 h-8 text-orange-600 mb-2" />
                    <CardTitle className="text-lg text-orange-800">{t('creditHealth.ratings.average')} (550-680)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-orange-700 text-sm">{t('creditHealth.ratings.averageDesc')}</p>
                  </CardContent>
                </Card>

                <Card className="border-yellow-200 bg-yellow-50 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CheckCircle className="w-8 h-8 text-yellow-600 mb-2" />
                    <CardTitle className="text-lg text-yellow-800">{t('creditHealth.ratings.good')} (680-730)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-yellow-700 text-sm">{t('creditHealth.ratings.goodDesc')}</p>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <Award className="w-8 h-8 text-green-600 mb-2" />
                    <CardTitle className="text-lg text-green-800">{t('creditHealth.ratings.excellent')} (730+)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-700 text-sm">{t('creditHealth.ratings.excellentDesc')}</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('creditHealth.ratings.title')}</h2>
            <p className="text-xl text-gray-600">{t('creditHealth.ratings.subtitle')}</p>
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
                  <TableCell className="font-semibold text-red-800 py-6">{t('creditHealth.ratings.poor')}</TableCell>
                  <TableCell className="text-red-700">{t('creditHealth.ratings.poorRange')}</TableCell>
                  <TableCell className="text-red-700">{t('creditHealth.ratings.poorDesc')}</TableCell>
                </TableRow>
                <TableRow className="bg-orange-50 border-l-4 border-orange-500 hover:bg-orange-100 transition-colors">
                  <TableCell className="font-semibold text-orange-800 py-6">{t('creditHealth.ratings.average')}</TableCell>
                  <TableCell className="text-orange-700">{t('creditHealth.ratings.averageRange')}</TableCell>
                  <TableCell className="text-orange-700">{t('creditHealth.ratings.averageDesc')}</TableCell>
                </TableRow>
                <TableRow className="bg-yellow-50 border-l-4 border-yellow-500 hover:bg-yellow-100 transition-colors">
                  <TableCell className="font-semibold text-yellow-800 py-6">{t('creditHealth.ratings.good')}</TableCell>
                  <TableCell className="text-yellow-700">{t('creditHealth.ratings.goodRange')}</TableCell>
                  <TableCell className="text-yellow-700">{t('creditHealth.ratings.goodDesc')}</TableCell>
                </TableRow>
                <TableRow className="bg-green-50 border-l-4 border-green-500 hover:bg-green-100 transition-colors">
                  <TableCell className="font-semibold text-green-800 py-6">{t('creditHealth.ratings.veryGood')}</TableCell>
                  <TableCell className="text-green-700">{t('creditHealth.ratings.veryGoodRange')}</TableCell>
                  <TableCell className="text-green-700">{t('creditHealth.ratings.veryGoodDesc')}</TableCell>
                </TableRow>
                <TableRow className="bg-emerald-50 border-l-4 border-emerald-500 hover:bg-emerald-100 transition-colors">
                  <TableCell className="font-semibold text-emerald-800 py-6">{t('creditHealth.ratings.excellent')}</TableCell>
                  <TableCell className="text-emerald-700">{t('creditHealth.ratings.excellentRange')}</TableCell>
                  <TableCell className="text-emerald-700">{t('creditHealth.ratings.excellentDesc')}</TableCell>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('creditHealth.factors.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('creditHealth.factors.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: t('creditHealth.factors.paymentHistory'),
                percentage: 35,
                description: t('creditHealth.factors.paymentHistoryDesc')
              },
              {
                title: t('creditHealth.factors.creditUtilization'),
                percentage: 30,
                description: t('creditHealth.factors.creditUtilizationDesc')
              },
              {
                title: t('creditHealth.factors.creditLength'),
                percentage: 15,
                description: t('creditHealth.factors.creditLengthDesc')
              },
              {
                title: t('creditHealth.factors.creditMix'),
                percentage: 10,
                description: t('creditHealth.factors.creditMixDesc')
              },
              {
                title: t('creditHealth.factors.newCredit'),
                percentage: 10,
                description: t('creditHealth.factors.newCreditDesc')
              }
            ].map((factor, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
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
              </Card>
            ))}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('creditHealth.timeline.title')}</h2>
            <p className="text-xl text-gray-600">{t('creditHealth.timeline.subtitle')}</p>
          </div>
          
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-orange-50 to-orange-100">
            <CardContent className="p-12">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-orange-600 w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
                  <Clock className="text-white w-10 h-10" />
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{t('creditHealth.timeline.duration')}</h3>
                <p className="text-xl text-gray-700 mb-8">{t('creditHealth.timeline.description')}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('creditHealth.timeline.quickWins')}</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>{t('creditHealth.timeline.quickWin1')}</li>
                      <li>{t('creditHealth.timeline.quickWin2')}</li>
                      <li>{t('creditHealth.timeline.quickWin3')}</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('creditHealth.timeline.longTerm')}</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>{t('creditHealth.timeline.longTerm1')}</li>
                      <li>{t('creditHealth.timeline.longTerm2')}</li>
                      <li>{t('creditHealth.timeline.longTerm3')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CreditHealth;
