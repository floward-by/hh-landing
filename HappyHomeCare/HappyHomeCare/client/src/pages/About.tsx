import { useLanguage } from '@/contexts/LanguageContext';
import { aboutContent } from '@/data/content';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

export default function About() {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {language === 'ko' ? '회사 소개' : 'About Us'}
            </h1>
            {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ko' 
                ? '어르신들의 행복하고 건강한 삶을 위해 최선을 다하는 해피홈 데이케어입니다'
                : 'Happy Home Daycare is dedicated to the happy and healthy lives of our seniors'
              }
            </p> */}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Senior care and community" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {language === 'ko' ? '인사말' : 'Welcome Message'}
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  {language === 'ko' 
                    ? '어르신 한분, 한분의 오늘이 편안하고 의미있게 최선을 다 하는 집입니다. "어르신의 오늘을 더 소중하게" 라는 슬로건에는 단순한 돌봄을 넘어 어르신의 하루하루에 진심을 담고 존중과 사랑으로 함께 하겠다는 우리의 마음이 담겨 있습니다.'
                    : 'We are a home that does our best to make each senior\'s day comfortable and meaningful. Our slogan "Making Every Day More Precious for Our Seniors" contains our heartfelt commitment to go beyond simple care and accompany each senior\'s daily life with sincerity, respect, and love.'
                  }
                </p>
                <div className="space-y-4 mt-6">
                  {aboutContent[language].missionPoints.map((point, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <p className="text-gray-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {language === 'ko' ? '우리의 가치' : 'Our Values'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'ko' 
                ? '해피홈 데이케어가 추구하는 핵심 가치들입니다'
                : 'These are the core values that Happy Home Daycare pursues'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">존</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {language === 'ko' ? '존중' : 'Respect'}
                </h3>
                <p className="text-gray-600">
                  {language === 'ko' 
                    ? '어르신 한 분 한 분의 존엄성과 개성을 소중히 여깁니다'
                    : 'We cherish the dignity and individuality of each senior'
                  }
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-secondary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-secondary">사</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {language === 'ko' ? '사랑' : 'Love'}
                </h3>
                <p className="text-gray-600">
                  {language === 'ko' 
                    ? '가족같은 따뜻한 마음으로 진심 어린 케어를 제공합니다'
                    : 'We provide heartfelt care with the warmth of family'
                  }
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">신</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {language === 'ko' ? '신뢰' : 'Trust'}
                </h3>
                <p className="text-gray-600">
                  {language === 'ko' 
                    ? '투명하고 전문적인 서비스로 신뢰받는 케어센터가 됩니다'
                    : 'We become a trusted care center through transparent and professional services'
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
