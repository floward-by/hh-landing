import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Stethoscope, 
  Users, 
  Home, 
  Activity, 
  Gamepad2, 
  Sparkles,
  Film,
  Target
} from 'lucide-react';

export default function Services() {
  const { language, t } = useLanguage();

  const nursingServices = [
    {
      title: language === 'ko' ? '간호팀의 건강관리' : 'Health Management by Nursing Team',
      description: language === 'ko' ? '혈압, 혈당, 활력징후 등 기본 건강 상태를 정기적으로 확인합니다' : 'Regular monitoring of basic health conditions including blood pressure, blood sugar, and vital signs'
    },
    {
      title: language === 'ko' ? '1:1 맞춤 의료 상담' : '1:1 Personalized Medical Consultation',
      description: language === 'ko' ? '개인별 건강 상태에 맞는 상담과 관리 계획을 제공합니다' : 'Providing consultation and management plans tailored to individual health conditions'
    },
    {
      title: language === 'ko' ? '질병 예방 교육' : 'Disease Prevention Education',
      description: language === 'ko' ? '영양, 운동, 약물 복용 등 질병 예방을 위한 실용적인 교육을 진행합니다' : 'Practical education for disease prevention including nutrition, exercise, and medication management'
    },
    {
      title: language === 'ko' ? '응급 상황 신속 대응' : 'Rapid Emergency Response',
      description: language === 'ko' ? '응급 시 빠르고 전문적인 초기 처치와 도움을 제공합니다' : 'Providing quick and professional initial treatment and assistance in emergency situations'
    },
    {
      title: language === 'ko' ? '진료 예약 및 안내' : 'Medical Appointment & Guidance',
      description: language === 'ko' ? '필요 시 병원 진료 예약을 돕고, 필요한 정보를 안내해드립니다' : 'Assisting with hospital appointment scheduling and providing necessary information when needed'
    }
  ];

  const socialServices = language === 'ko' ? [
    '메디케이드 신청 및 재갱신',
    '노인 아파트 신청 및 Section 8 (노인아파트 재갱신서류 지원)',
    '푸드 스탬프 신청 및 재갱신',
    '야채바우처 (Farmer\'s market)',
    '각종 민원 업무 및 통역서비스',
    'SSA & SSI 신청',
    '각 종 통역업무',
    '메디컬 빌 정리',
    '소셜국 방문 및 그 외 서류작성'
  ] : [
    'Medicaid application and renewal',
    'Senior housing application and Section 8 (senior housing renewal document support)',
    'Food stamp application and renewal',
    'Vegetable voucher (Farmer\'s market)',
    'Various civil affairs and interpretation services',
    'SSA & SSI applications',
    'Various interpretation services',
    'Medical bill organization',
    'Social services office visits and other document preparation'
  ];

  const facilities = [
    {
      title: language === 'ko' ? '휴게실' : 'Rest Room',
      description: language === 'ko' ? '프리미엄 마사지 의자와 함께하는 고급스러운 휴식공간. 편안한 침묵 속에서 진정한 휴식을 만끽해보세요' : 'Luxurious rest area with premium massage chairs. Enjoy true relaxation in peaceful silence',
      icon: Home
    },
    {
      title: language === 'ko' ? '탁구실 / 당구실' : 'Ping Pong / Billiards Room',
      description: language === 'ko' ? '탁구와 당구 시설에서 활기찬 시간을 보내세요! 즐거운 게임을 하며 운동도 하고, 즐거운 추억을 만들어보세요.' : 'Spend energetic time at ping pong and billiards facilities! Exercise while playing fun games and create joyful memories.',
      icon: Target
    },
    {
      title: language === 'ko' ? '보드게임실' : 'Board Game Room',
      description: language === 'ko' ? '다양한 보드게임으로 즐거운 시간을 보내세요! 머리도 쓰고 웃음도 가득한 특별한 경험을 만나보세요.' : 'Enjoy pleasant time with various board games! Experience special moments filled with mental stimulation and laughter.',
      icon: Gamepad2
    },
    {
      title: language === 'ko' ? '액티비티실' : 'Activity Room',
      description: language === 'ko' ? '활기찬 액티비티실에서 요가, 운동, 댄스, 게임까지! 매일 새로운 즐거움과 건강을 만나는 공간입니다.' : 'From yoga, exercise, dance to games in our vibrant activity room! A space where you can discover new joy and health every day.',
      icon: Activity
    },
    {
      title: language === 'ko' ? '미용실' : 'Beauty Salon',
      description: language === 'ko' ? '미용 서비스로 스타일을 업그레이드하세요! 전문가의 손길로 더욱 빛나는 당신을 만나보실 수 있습니다' : 'Upgrade your style with beauty services! Discover a more radiant you through expert care',
      icon: Sparkles
    },
    {
      title: language === 'ko' ? '영화관' : 'Movie Theater',
      description: language === 'ko' ? '최신 영화부터 클래식 명작까지, 쾌적한 영화관에서 특별한 관람의 즐거움을 느껴보세요!' : 'From latest movies to classic masterpieces, experience the special joy of viewing in our comfortable theater!',
      icon: Film
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {language === 'ko' ? '서비스 안내' : 'Services'}
            </h1>
          </div>
        </div>
      </section>

      {/* Nursing Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Stethoscope className="h-12 w-12 text-primary mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">
                {language === 'ko' ? '간호 서비스' : 'Nursing Services'}
              </h2>
            </div>
            <p className="text-xl text-gray-600">
              {language === 'ko' 
                ? '전문 간호팀이 제공하는 건강관리 서비스'
                : 'Healthcare services provided by our professional nursing team'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nursingServices.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Users className="h-12 w-12 text-primary mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">
                {language === 'ko' ? '소셜 업무' : 'Social Services'}
              </h2>
            </div>
            <p className="text-xl text-gray-600">
              {language === 'ko' 
                ? '각종 행정업무와 통역 서비스를 지원합니다'
                : 'We support various administrative tasks and interpretation services'
              }
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {socialServices.map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">{service}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Home className="h-12 w-12 text-primary mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">
                {language === 'ko' ? '편의시설' : 'Facilities'}
              </h2>
            </div>
            <p className="text-xl text-gray-600">
              {language === 'ko' 
                ? '다양한 편의시설에서 즐거운 시간을 보내세요'
                : 'Enjoy pleasant time at our various facilities'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                    <facility.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600">
                    {facility.description}
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