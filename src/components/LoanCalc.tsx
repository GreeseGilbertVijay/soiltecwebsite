import { Home, Car, CreditCard, Calculator } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';

const Impact = () => {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [loanTenure, setLoanTenure] = useState(20);
  const [activeLoanType, setActiveLoanType] = useState('home');

  // Update defaults when loan type changes
  useEffect(() => {
    if (activeLoanType === 'home') {
      setLoanAmount(5000000);
      setLoanTenure(20);
    } else if (activeLoanType === 'auto' || activeLoanType === 'personal') {
      setLoanAmount(1500000);
      setLoanTenure(60);
    }
  }, [activeLoanType]);

  const calculateEMI = (principal: number, rate: number, tenure: number) => {
    const monthlyRate = rate / (12 * 100);
    // For home loans, tenure is in years, for auto/personal loans it's in months
    const totalMonths = activeLoanType === 'home' ? tenure * 12 : tenure;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
                (Math.pow(1 + monthlyRate, totalMonths) - 1);
    return Math.round(emi);
  };

  const loanData = {
    low: { rate: 16, eligible: 'Housing Finance Companies (HFC)' },
    moderate: { rate: 14, eligible: 'Small Private / Finance Banks' },
    high: { rate: 9, eligible: 'Top Private Sector Banks' }
  };

  const lowEMI = calculateEMI(loanAmount, loanData.low.rate, loanTenure);
  const moderateEMI = calculateEMI(loanAmount, loanData.moderate.rate, loanTenure);
  const highEMI = calculateEMI(loanAmount, loanData.high.rate, loanTenure);

  // Calculate total months for interest calculation
  const totalMonths = activeLoanType === 'home' ? loanTenure * 12 : loanTenure;
  const lowTotal = lowEMI * totalMonths;
  const moderateTotal = moderateEMI * totalMonths;
  const highTotal = highEMI * totalMonths;

  const lowInterest = lowTotal - loanAmount;
  const moderateInterest = moderateTotal - loanAmount;
  const highInterest = highTotal - loanAmount;

  const moderateSavings = lowInterest - moderateInterest;
  const highSavings = lowInterest - highInterest;

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} L`;
    } else {
      return `₹${amount.toLocaleString()}`;
    }
  };

  const getTenureLabel = () => {
    if (activeLoanType === 'home') {
      return 'Loan Tenure (Years)';
    }
    return 'Loan Tenure (Months)';
  };

  const getTenureMinMax = () => {
    if (activeLoanType === 'home') {
      return { min: '1 yr', max: '30 yrs' };
    }
    return { min: '12 mo', max: '84 mo' };
  };

  const getLoanImage = () => {
    switch (activeLoanType) {
      case 'home':
        return '/lovable-uploads/home-loan-image.png';
      case 'auto':
        return '/lovable-uploads/car-loan-image.png';
      case 'personal':
        return '/lovable-uploads/personal-loan-image.png';
      default:
        return '/lovable-uploads/home-loan-image.png';
    }
  };

  const tenureMinMax = getTenureMinMax();

  return (
    <div className="min-h-screen bg-gray-50 font-raleway">
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

        .font-raleway {
          font-family: 'Raleway', sans-serif;
        }

        .font-roboto {
          font-family: 'Roboto', sans-serif;
        }

        .number-field {
          font-family: 'Roboto', sans-serif;
        }

        @media (max-width: 1920px) {
          .container {
            max-width: 1920px;
            margin: 0 auto;
            padding: 0 2rem;
          }
          h1 { font-size: 56px; }
          h2 { font-size: 48px; }
          h3 { font-size: 36px; }
          h4 { font-size: 28px; }
          h6 { font-size: 20px; }
          p { font-size: 18px; }
          [lang]:not([lang="en"]) h1 { font-size: 44px; }
          [lang]:not([lang="en"]) h2 { font-size: 36px; }
          [lang]:not([lang="en"]) h3 { font-size: 28px; }
          [lang]:not([lang="en"]) h4 { font-size: 24px; }
          [lang]:not([lang="en"]) h6 { font-size: 20px; }
          [lang]:not([lang="en"]) p { font-size: 18px; }
        }

        @media (max-width: 1440px) {
          .container {
            max-width: 1440px;
            margin: 0 auto;
            padding: 0 2rem;
          }
          h1 { font-size: 48px; line-height: 1em; }
          h2 { font-size: 40px; }
          h3 { font-size: 32px; }
          h4 { font-size: 28px; }
          h6 { font-size: 16px; }
          p { font-size: 18px; }
          [lang]:not([lang="en"]) h1 { font-size: 36px; }
          [lang]:not([lang="en"]) h2 { font-size: 28px; }
          [lang]:not([lang="en"]) h3 { font-size: 24px; }
          [lang]:not([lang="en"]) h4 { font-size: 22px; }
          [lang]:not([lang="en"]) h6 { font-size: 16px; }
          [lang]:not([lang="en"]) p { font-size: 16px; }
        }

        @media (max-width: 780px) {
          .container {
            max-width: 780px;
            margin: 0 auto;
            padding: 0 1.5rem;
          }
          h1 { font-size: 36px; }
          h2 { font-size: 28px; }
          h3 { font-size: 24px; }
          h4 { font-size: 28px; }
          h6 { font-size: 16px; }
          p { font-size: 16px; }
          [lang]:not([lang="en"]) h1 { font-size: 36px; }
          [lang]:not([lang="en"]) h2 { font-size: 24px; }
          [lang]:not([lang="en"]) h3 { font-size: 20px; }
          [lang]:not([lang="en"]) h6 { font-size: 16px; }
          [lang]:not([lang="en"]) p { font-size: 16px; }
        }

        @media (max-width: 480px) {
          .container {
            max-width: 480px;
            margin: 0 auto;
            padding: 0 1rem;
          }
          h1 { font-size: 36px; }
          h2 { font-size: 28px; }
          h3 { font-size: 24px; }
          h4 { font-size: 20px; }
          h6 { font-size: 16px; }
          p { font-size: 16px; }
          [lang]:not([lang="en"]) h1 { font-size: 36px; }
          [lang]:not([lang="en"]) h2 { font-size: 20px; }
          [lang]:not([lang="en"]) h3 { font-size: 18px; }
          [lang]:not([lang="en"]) h4 { font-size: 20px; }
          [lang]:not([lang="en"]) h6 { font-size: 16px; }
          [lang]:not([lang="en"]) p { font-size: 14px; }
        }
      `}</style>    

      {/* Loan Calculator Section */}
      <section className="bg-white relative">
        <div className='max-w-7xl mx-auto p-4'>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50"></div>
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-bold text-gray-900 mb-6">
              Interactive Loan Calculator
            </h2>
            <p className=" text-gray-600 max-w-3xl mx-auto">
              Compare loan options across different credit scores and see potential savings in real-time
            </p>
          </div>

          {/* Two Container Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left Container */}
            <div className="lg:col-span-2 space-y-8">
              {/* Loan Type Tabs */}
              <div>
                <Tabs value={activeLoanType} onValueChange={setActiveLoanType} className="w-full">
                  <TabsList className="grid grid-cols-3 h-14 bg-white border-2 border-blue-100">
                    <TabsTrigger value="home" className="flex items-center gap-1 font-semibold data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                      <h6>Home Loan</h6>
                    </TabsTrigger>
                    <TabsTrigger value="auto" className="flex items-center gap-1 font-semibold data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                      <h6>Auto Loan</h6>
                    </TabsTrigger>
                    <TabsTrigger value="personal" className="flex items-center gap-1 font-semibold data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                      <h6>Personal Loan</h6>
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {/* Loan Type Image */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-xs">
                  <img 
                    src={getLoanImage()} 
                    alt={`${activeLoanType.charAt(0).toUpperCase() + activeLoanType.slice(1)} Loan`}
                    className="w-full h-auto rounded-lg object-contain bg-transparent"
                    style={{ maxHeight: '120px' }}
                  />
                </div>
              </div>

              {/* Calculator Card */}
              <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-blue-50">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-3 ">
                    <Calculator size={28} />
                    {activeLoanType.charAt(0).toUpperCase() + activeLoanType.slice(1)} Loan Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 gap-8 mb-8">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="loanAmount" className="text-lg font-semibold text-gray-700">
                          Loan Amount
                        </Label>
                        <span className="text-lg font-semibold text-blue-600 number-field">{formatCurrency(loanAmount)}</span>
                      </div>
                      <Slider
                        id="loanAmount"
                        min={100000}
                        max={50000000}
                        step={100000}
                        value={[loanAmount]}
                        onValueChange={(value) => setLoanAmount(value[0])}
                        className="w-full"
                      />
                      <div className="flex justify-between text-gray-500">
                        <span>Min: ₹1L</span>
                        <span>Max: ₹5Cr</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="loanTenure" className="text-lg font-semibold text-gray-700">
                          {getTenureLabel()}
                        </Label>
                        <span className="text-lg font-semibold text-blue-600 number-field">
                          {activeLoanType === 'home' ? `${loanTenure} years` : `${loanTenure} months`}
                        </span>
                      </div>
                      <Slider
                        id="loanTenure"
                        min={activeLoanType === 'home' ? 1 : 12}
                        max={activeLoanType === 'home' ? 30 : 84}
                        step={1}
                        value={[loanTenure]}
                        onValueChange={(value) => setLoanTenure(value[0])}
                        className="w-full"
                      />
                      <div className="flex justify-between text-gray-500">
                        <span>Min: {tenureMinMax.min}</span>
                        <span>Max: {tenureMinMax.max}</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full h-14 text-white font-semibold bg-gradient-to-r from-orange-600 to-purple-500 hover:from-blue-700 hover:to-purple-700">
                    Calculate
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Right Container */}
            <div className="lg:col-span-3">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-2xl text-gray-900">Visual Comparison</h3>
                </div>
                <p className="text-gray-600 max-w-md mx-auto">See how your credit score affects your loan terms and potential savings</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Low Credit Score Card */}
                <div className="group relative">
                  <Card className="h-full bg-gradient-to-br from-red-50 via-red-100 to-red-200 border-red-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-2 pt-6 pb-6">
                      <div className="text-center mb-4">
                        <div className="relative inline-block">
                          <img 
                            className="w-28 h-28 rounded-full object-cover border-4 border-red-200 shadow-md" 
                            src="/lovable-uploads/sad-face-loan.jpg" 
                            alt="Low Credit Score"
                          />
                          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                            Poor
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center mb-6">
                        <h4 className="text-lg font-bold text-gray-800 mb-1">Low Credit Score</h4>
                        <p className="text-sm text-gray-600">Limited options available</p>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-white bg-opacity-70 rounded-lg p-3 shadow-sm">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-gray-600">Principal</span>
                            <span className="text-sm font-bold text-gray-800 number-field">{formatCurrency(loanAmount)}</span>
                          </div>
                        </div>

                        <div className="bg-white bg-opacity-70 rounded-lg p-3 shadow-sm">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-600">Interest Rate</span>
                            <span className="text-lg font-bold text-red-600 number-field">{loanData.low.rate}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-red-500 h-2 rounded-full transition-all duration-300" style={{width: `${(loanData.low.rate/20)*100}%`}}></div>
                          </div>
                        </div>

                        <div className="bg-white bg-opacity-70 rounded-lg p-3 shadow-sm">
                          <div className="mb-1">
                            <span className="text-sm font-medium text-gray-600">Monthly EMI</span>
                          </div>
                          <div className="text-lg font-bold text-gray-800 number-field">{formatCurrency(lowEMI)}</div>
                        </div>

                        <div className="bg-white bg-opacity-70 rounded-lg p-3 shadow-sm">
                          <div className="mb-1">
                            <span className="text-sm font-medium text-gray-600">Total Repayment</span>
                          </div>
                          <div className="text-lg font-bold text-gray-800 number-field">{formatCurrency(lowTotal)}</div>
                        </div>

                        <div className="bg-white bg-opacity-70 rounded-lg p-3 shadow-sm">
                          <div className="mb-1">
                            <span className="text-sm font-medium text-gray-600">Total Interest</span>
                          </div>
                          <div className="text-lg font-bold text-red-600 number-field">{formatCurrency(lowInterest)}</div>
                        </div>
                      </div>  
                    </CardContent>
                  </Card>
                </div>

                {/* Moderate Credit Score Card */}
                <div className="group relative">
                  <Card className="h-full bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 border-orange-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-2 pt-6 pb-6">
                      <div className="text-center mb-4">
                        <div className="relative inline-block">
                          <img 
                            className="w-28 h-28 rounded-full object-cover border-4 border-orange-200 shadow-md" 
                            src="/lovable-uploads/thought-face-loan.jpg" 
                            alt="Moderate Credit Score"
                          />
                          <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                            Fair
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center mb-6">
                        <h4 className="text-lg font-bold text-gray-800 mb-1">Moderate Credit Score</h4>
                        <p className="text-sm text-gray-600">Better options available</p>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-white bg-opacity-70 rounded-lg p-3 shadow-sm">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-gray-600">Principal</span>
                            <span className="text-sm font-bold text-gray-800 number-field">{formatCurrency(loanAmount)}</span>
                          </div>
                        </div>

                        <div className="bg-white bg-opacity-70 rounded-lg p-3 shadow-sm">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-600">Interest Rate</span>
                            <span className="text-lg font-bold text-orange-600 number-field">{loanData.moderate.rate}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-orange-500 h-2 rounded-full transition-all duration-300" style={{width: `${(loanData.moderate.rate/20)*100}%`}}></div>
                          </div>
                        </div>

                        <div className="bg-white bg-opacity-70 rounded-lg p-3 shadow-sm">
                          <div className="mb-1">
                            <span className="text-sm font-medium text-gray-600">Monthly EMI</span>
                          </div>
                          <div className="text-lg font-bold text-gray-800 number-field">{formatCurrency(moderateEMI)}</div>
                        </div>

                        <div className="bg-white bg-opacity-70 rounded-lg p-3 shadow-sm">
                          <div className="mb-1">
                            <span className="text-sm font-medium text-gray-600">Total Repayment</span>
                          </div>
                          <div className="text-lg font-bold text-gray-800 number-field">{formatCurrency(moderateTotal)}</div>
                        </div>

                        <div className="bg-white bg-opacity-70 rounded-lg p-3 shadow-sm">
                          <div className="mb-1">
                            <span className="text-sm font-medium text-gray-600">Total Interest</span>
                          </div>
                          <div className="text-lg font-bold text-orange-600 number-field">{formatCurrency(moderateInterest)}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* High Credit Score Card */}
                <div className="group relative">
                  <Card className="h-full bg-gradient-to-br from-green-50 via-green-100 to-green-200 border-green-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-2 pt-6 pb-6">
                      <div className="text-center mb-4">
                        <div className="relative inline-block">
                          <img 
                            className="w-28 h-28 rounded-full object-cover border-4 border-green-200 shadow-md" 
                            src="/lovable-uploads/happy-face-loan.jpg" 
                            alt="High Credit Score"
                          />
                          <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                            Excellent
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center mb-6">
                        <h4 className="text-lg font-bold text-gray-800 mb-1">High Credit Score</h4>
                        <p className="text-sm text-gray-600">Best rates available</p>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-white bg-opacity-70 rounded-lg p-3 shadow-sm">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-gray-600">Principal</span>
                            <span className="text-sm font-bold text-gray-800 number-field">{formatCurrency(loanAmount)}</span>
                          </div>
                        </div>

                        <div className="bg-white bg-opacity-70 rounded-lg p-3 shadow-sm">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-600">Interest Rate</span>
                            <span className="text-lg font-bold text-green-600 number-field">{loanData.high.rate}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full transition-all duration-300" style={{width: `${(loanData.high.rate/20)*100}%`}}></div>
                          </div>
                        </div>

                        <div className="bg-white bg-opacity-70 rounded-lg p-3 shadow-sm">
                          <div className="mb-1">
                            <span className="text-sm font-medium text-gray-600">Monthly EMI</span>
                          </div>
                          <div className="text-lg font-bold text-gray-800 number-field">{formatCurrency(highEMI)}</div>
                        </div>

                        <div className="bg-white bg-opacity-70 rounded-lg p-3 shadow-sm">
                          <div className="mb-1">
                            <span className="text-sm font-medium text-gray-600">Total Repayment</span>
                          </div>
                          <div className="text-lg font-bold text-gray-800 number-field">{formatCurrency(highTotal)}</div>
                        </div>

                        <div className="bg-white bg-opacity-70 rounded-lg p-3 shadow-sm">
                          <div className="mb-1">
                            <span className="text-sm font-medium text-gray-600">Total Interest</span>
                          </div>
                          <div className="text-lg font-bold text-green-600 number-field">{formatCurrency(highInterest)}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        </div>
      </section>

      <div className='py-4'>
        <div className='max-w-6xl mx-auto p-4'>
        {/* Potential Savings Card */}
       <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200 shadow-lg">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  <h4 className="text-lg font-bold text-gray-900">Quick Comparison Summary</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">Low vs Moderate</span>
                      <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-medium">Save</span>
                    </div>
                    <div className="text-xl font-bold text-orange-600 number-field">{formatCurrency(moderateSavings)}</div>
                    <p className="text-xs text-gray-500 mt-1">Potential savings by improving credit score</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">Low vs High</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">Save</span>
                    </div>
                    <div className="text-xl font-bold text-green-600 number-field">{formatCurrency(highSavings)}</div>
                    <p className="text-xs text-gray-500 mt-1">Maximum potential savings</p>
                  </div>
                </div>
              </div>
        </div>
      </div>

      {/* Home Loan Comparison Table */}
      <section className="py-4 bg-gradient-to-br from-gray-100 to-blue-100">
        <div className='max-w-6xl mx-auto p-4'>
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex flex-col items-center justify-center gap-3 mb-6">
              <Home className="text-blue-600" size={40} />
              <h2 className="font-bold text-gray-900">
                Home Loan Comparison
              </h2>
            </div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Compare home loan options for different credit score ranges
            </p>
          </div>

          <Card className="shadow-2xl border-0 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <tr>
                    <th className="p-4 sm:p-6 text-left text-base sm:text-lg font-semibold">Criteria</th>
                    <th className="p-4 sm:p-6 text-center text-base sm:text-lg font-semibold bg-red-500 bg-opacity-20">Low CIBIL Score (&lt;700)</th>
                    <th className="p-4 sm:p-6 text-center text-base sm:text-lg font-semibold bg-orange-500 bg-opacity-20">Moderate CIBIL Score</th>
                    <th className="p-4 sm:p-6 text-center text-base sm:text-lg font-semibold bg-green-500 bg-opacity-20">High CIBIL Score (&gt;700)</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b border-gray-200">
                    <td className="p-4 sm:p-6 font-semibold text-gray-900">Eligible Lender</td>
                    <td className="p-4 sm:p-6 text-center text-gray-700">{loanData.low.eligible}</td>
                    <td className="p-4 sm:p-6 text-center text-gray-700">{loanData.moderate.eligible}</td>
                    <td className="p-4 sm:p-6 text-center text-gray-700">{loanData.high.eligible}</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 sm:p-6 font-semibold text-gray-900">Interest Rate</td>
                    <td className="p-4 sm:p-6 text-center text-red-600 font-bold number-field">{loanData.low.rate}%</td>
                    <td className="p-4 sm:p-6 text-center text-orange-600 font-bold number-field">13.5%</td>
                    <td className="p-4 sm:p-6 text-center text-green-600 font-bold number-field">{loanData.high.rate}%</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 sm:p-6 font-semibold text-gray-900">EMI (for 20 years)</td>
                    <td className="p-4 sm:p-6 text-center text-gray-700 font-semibold number-field">{formatCurrency(lowEMI)}</td>
                    <td className="p-4 sm:p-6 text-center text-gray-700 font-semibold number-field">{formatCurrency(moderateEMI)}</td>
                    <td className="p-4 sm:p-6 text-center text-gray-700 font-semibold number-field">{formatCurrency(highEMI)}</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 sm:p-6 font-semibold text-gray-900">Total Repayment</td>
                    <td className="p-4 sm:p-6 text-center text-gray-700 font-semibold number-field">{formatCurrency(lowTotal)}</td>
                    <td className="p-4 sm:p-6 text-center text-gray-700 font-semibold number-field">{formatCurrency(moderateTotal)}</td>
                    <td className="p-4 sm:p-6 text-center text-gray-700 font-semibold number-field">{formatCurrency(highTotal)}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 sm:p-6 font-semibold text-gray-900">Total Interest Paid</td>
                    <td className="p-4 sm:p-6 text-center text-gray-700 font-semibold number-field">{formatCurrency(lowInterest)}</td>
                    <td className="p-4 sm:p-6 text-center text-gray-700 font-semibold number-field">{formatCurrency(moderateInterest)}</td>
                    <td className="p-4 sm:p-6 text-center text-gray-700 font-semibold number-field">{formatCurrency(highInterest)}</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 sm:p-6 font-semibold text-gray-900">Potential Savings vs HFC</td>
                    <td className="p-4 sm:p-6 text-center text-gray-500">—</td>
                    <td className="p-4 sm:p-6 text-center text-orange-600 font-bold number-field">{formatCurrency(moderateSavings)}</td>
                    <td className="p-4 sm:p-6 text-center text-green-600 font-bold number-field">{formatCurrency(highSavings)}</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-gray-900">Key Insight</td>
                    <td className="p-4 sm:p-6 text-center text-red-600 font-medium">Limited options due to low score</td>
                    <td className="p-4 sm:p-6 text-center text-orange-600 font-medium">Moderate option with better rate</td>
                    <td className="p-4 sm:p-6 text-center text-green-600 font-medium">Best option with strong credit</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white  font-bold">!</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Disclaimer</h4>
                  <p className="text-gray-700  leading-relaxed">
                    The above comparison is for illustrative purposes only. Actual loan eligibility, interest rates, EMIs, and terms are determined by individual lenders based on the applicant's credit profile, income, employer category, and other underwriting criteria. All loan disbursals are subject to the lender's policies and applicable regulations as prescribed by the Reserve Bank of India (RBI).
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
