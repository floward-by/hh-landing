import HeroCarousel from '@/components/HeroCarousel';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Users, Shield, Clock } from 'lucide-react';

export default function Home() {
  const { language, t } = useLanguage();

  const features = [
    {
      icon: Heart,
      title: { ko: '전문적인 케어', en: 'Professional Care' },
      description: { ko: '전문 의료진과 케어 전문가들이 함께합니다', en: 'Professional medical staff and care specialists work together' }
    },
    {
      icon: Users,
      title: { ko: '맞춤형 프로그램', en: 'Customized Programs' },
      description: { ko: '개인별 특성에 맞춘 다양한 활동 프로그램', en: 'Various activity programs tailored to individual characteristics' }
    },
    {
      icon: Shield,
      title: { ko: '안전한 환경', en: 'Safe Environment' },
      description: { ko: '어르신들의 안전을 위한 완벽한 시설과 관리', en: 'Perfect facilities and management for seniors\' safety' }
    },
    {
      icon: Clock,
      title: { ko: '24시간 케어', en: '24/7 Care' },
      description: { ko: '언제나 어르신들과 함께하는 따뜻한 돌봄', en: 'Warm care that is always with our seniors' }
    }
  ];

  return (
    <div>
      <HeroCarousel />
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {language === 'ko' ? '해피홈만의 특별함' : 'What Makes Happy Home Special'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ko' ? '어르신들을 위한 전문적이고 따뜻한 케어 서비스를 제공합니다' : 'We provide professional and warm care services for our seniors'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title[language]}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description[language]}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {language === 'ko' ? '해피홈과 함께하세요' : 'Join Happy Home Today'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {language === 'ko' ? '궁금한 점이나 상담이 필요하시면 언제든지 연락해 주세요' : 'Contact us anytime if you have questions or need consultation'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg font-medium px-8 py-4"
              data-testid="button-contact-service"
            >
              {language === 'ko' ? '서비스 문의하기' : 'Contact Us'}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg font-medium px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
              data-testid="button-schedule-visit"
            >
              {language === 'ko' ? '방문 예약하기' : 'Schedule Visit'}
            </Button>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {language === 'ko' ? '공지사항' : 'Announcements'}
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {language === 'ko' ? '페어뷰 센터 완공' : 'Fairview Center Completed'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'ko' ? '새로운 페어뷰 센터가 완공되었습니다.' : 'Our new Fairview Center has been completed.'}
                  </p>
                </div>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  10-2025
                </span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Happy Home News Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('home.news.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ko' ? '해피홈의 최신 소식과 활동을 확인하세요' : 'Check out the latest news and activities from Happy Home'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gallery placeholder cards */}
            {[1, 2, 3].map((item) => (
              <Card key={item} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">
                    {language === 'ko' ? '사진' : 'Photo'} {item}
                  </span>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {language === 'ko' ? `소식 제목 ${item}` : `News Title ${item}`}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {language === 'ko' ? 
                      '해피홈의 따뜻한 일상과 특별한 순간들을 함께 나누어요.' : 
                      'Share the warm daily life and special moments of Happy Home.'}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
