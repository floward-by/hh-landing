import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Users, CreditCard } from 'lucide-react';

export default function Eligibility() {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              {language === 'ko' ? '대상 및 절차' : 'Eligibility & Process'}
            </h1>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="text-center mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                {language === 'ko' 
                  ? '해피홈은 모든 분들께 열려 있습니다. 다만, 프로그램을 이용하시기 위해서는 뉴져지 메디케이드를 소지하시고 있어야합니다.'
                  : 'Happy Home is open to everyone. However, to use our programs, you must have New Jersey Medicaid.'
                }
              </p>
            </div>

            {/* Two Column Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* With Medicaid */}
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <CreditCard className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {language === 'ko' ? '메디케이드 (Medicaid) 가지고 계신 분들' : 'For Those With Medicaid'}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {language === 'ko' 
                      ? '해피홈에 상담하신후 등록 절차를 안내해드립니다.'
                      : 'After consulting with Happy Home, we will guide you through the registration process.'
                    }
                  </p>
                </CardContent>
              </Card>

              {/* Without Medicaid */}
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {language === 'ko' ? '메디케이드 (Medicaid) 없으신 분들' : 'For Those Without Medicaid'}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {language === 'ko' 
                      ? '메디케이드가 없으신 경우에도 걱정하지 마세요. 대상 여부에 대한 상담 및 신청 안내를 도와드립니다.'
                      : 'Don\'t worry if you don\'t have Medicaid. We will help you with consultation on eligibility and application guidance.'
                    }
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Message */}
            <div className="text-center">
              <p className="text-lg text-gray-700 font-medium">
                {language === 'ko' 
                  ? '언제든지 문의 주시면 친절하게 안내해드리겠습니다.'
                  : 'Please contact us anytime and we will kindly guide you.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}