import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { 
  Utensils, 
  Car, 
  Heart, 
  Hospital, 
  Users, 
  ShoppingBag, 
  Activity, 
  Music, 
  Palette, 
  Pen,
  Mic
} from 'lucide-react';

export default function Daycare() {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              {language === 'ko' ? '데이케어' : 'Daycare'}
            </h1>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed space-y-6">
              <p className="text-lg">
                {language === 'ko' 
                  ? '데이케어는 보호자의 도움의 필요한 어르신들이 일정시간동안 오셔서 스태프 보호아래 여러 프로그램을 즐기실수 있는 시설입니다. 간호시설, 운동 프로그램, 치매예방 프로그램, 등 다양한 활동을 하며 여러분들과 어울리며 시간을 보낼 수 있는 곳입니다. 또한, 식사와 차량 제공을 통해 움직이기 어려우신 분들도 편안하게 나와서 활동 하실 수 있습니다.'
                  : 'Daycare is a facility where seniors who need caregiver assistance can come for a certain period of time and enjoy various programs under staff supervision. It is a place where you can spend time with others while engaging in various activities such as nursing facilities, exercise programs, dementia prevention programs, and more. Additionally, through meal and transportation services, even those who have difficulty moving can comfortably come out and participate in activities.'
                }
              </p>
              
              <p className="text-lg">
                {language === 'ko'
                  ? '하루 일과는 요가, 운동, 미술 수업, 라인댄스, 게임으로 채워지며 원하시는 분들은 쇼핑, 합창, 당구, 마작. 탁구, 노래방 을 선택하여 즐기실수 있습니다.'
                  : 'Daily activities include yoga, exercise, art classes, line dancing, and games, while those who wish can choose to enjoy shopping, choir, billiards, mahjong, ping pong, and karaoke.'
                }
              </p>
            </div>

            {/* Services Pills */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {language === 'ko' ? '제공 서비스' : 'Services Provided'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
                <Badge variant="secondary" className="px-6 py-3 text-base flex items-center space-x-3 w-full justify-center">
                  <Utensils className="h-8 w-8" />
                  <span className="font-medium">{language === 'ko' ? '식사(2회) 및 간식과 과일 제공' : 'Meals (2x) plus snacks & fruits'}</span>
                </Badge>
                <Badge variant="secondary" className="px-6 py-3 text-base flex items-center space-x-3 w-full justify-center">
                  <Car className="h-8 w-8" />
                  <span className="font-medium">{language === 'ko' ? '차량지원' : 'Transportation Support'}</span>
                </Badge>
                <Badge variant="secondary" className="px-6 py-3 text-base flex items-center space-x-3 w-full justify-center">
                  <Heart className="h-8 w-8" />
                  <span className="font-medium">{language === 'ko' ? '건강관리' : 'Health Management'}</span>
                </Badge>
                <Badge variant="secondary" className="px-6 py-3 text-base flex items-center space-x-3 w-full justify-center">
                  <Hospital className="h-8 w-8" />
                  <span className="font-medium">{language === 'ko' ? '병원업무 지원' : 'Hospital Service Support'}</span>
                </Badge>
                <Badge variant="secondary" className="px-6 py-3 text-base flex items-center space-x-3 w-full justify-center">
                  <Users className="h-8 w-8" />
                  <span className="font-medium">{language === 'ko' ? '소셜워커 서비스' : 'Social Worker Services'}</span>
                </Badge>
                <Badge variant="secondary" className="px-6 py-3 text-base flex items-center space-x-3 w-full justify-center">
                  <ShoppingBag className="h-8 w-8" />
                  <span className="font-medium">{language === 'ko' ? '쇼핑 외출' : 'Shopping Trips'}</span>
                </Badge>
                <Badge variant="secondary" className="px-6 py-3 text-base flex items-center space-x-3 w-full justify-center">
                  <Activity className="h-8 w-8" />
                  <span className="font-medium">{language === 'ko' ? '시니어 운동' : 'Senior Exercise'}</span>
                </Badge>
                <Badge variant="secondary" className="px-6 py-3 text-base flex items-center space-x-3 w-full justify-center">
                  <Music className="h-8 w-8" />
                  <span className="font-medium">{language === 'ko' ? '라인댄스' : 'Line Dancing'}</span>
                </Badge>
                <Badge variant="secondary" className="px-6 py-3 text-base flex items-center space-x-3 w-full justify-center">
                  <Activity className="h-8 w-8" />
                  <span className="font-medium">{language === 'ko' ? '요가' : 'Yoga'}</span>
                </Badge>
                <Badge variant="secondary" className="px-6 py-3 text-base flex items-center space-x-3 w-full justify-center">
                  <Palette className="h-8 w-8" />
                  <span className="font-medium">{language === 'ko' ? '네일아트' : 'Nail Art'}</span>
                </Badge>
                <Badge variant="secondary" className="px-6 py-3 text-base flex items-center space-x-3 w-full justify-center">
                  <Palette className="h-8 w-8" />
                  <span className="font-medium">{language === 'ko' ? '아트 수업' : 'Art Classes'}</span>
                </Badge>
                <Badge variant="secondary" className="px-6 py-3 text-base flex items-center space-x-3 w-full justify-center">
                  <Pen className="h-8 w-8" />
                  <span className="font-medium">{language === 'ko' ? '서예' : 'Calligraphy'}</span>
                </Badge>
                <Badge variant="secondary" className="px-6 py-3 text-base flex items-center space-x-3 w-full justify-center">
                  <Mic className="h-8 w-8" />
                  <span className="font-medium">{language === 'ko' ? '합창반' : 'Choir Group'}</span>
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
