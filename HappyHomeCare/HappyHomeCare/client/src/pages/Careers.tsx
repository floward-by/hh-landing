import { useLanguage } from '@/contexts/LanguageContext';
import { careersContent } from '@/data/content';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, Mail, Clock } from 'lucide-react';

export default function Careers() {
  const { language, t } = useLanguage();
  const content = careersContent[language];

  const getJobTypeColor = (type: string) => {
    if (type.includes('정규직') || type.includes('Full-time')) {
      return 'bg-primary';
    }
    return 'bg-accent';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {language === 'ko' ? '채용정보' : 'Careers'}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ko' ? '해피홈과 함께 어르신들에게 따뜻한 케어를 제공할 팀원을 찾고 있습니다' : 'We are looking for team members to provide warm care to seniors together with Happy Home'}
            </p>
          </div>

          {/* Job Openings */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {content.jobs.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`job-card-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {job.title}
                    </h3>
                    <Badge className={`text-white ${getJobTypeColor(job.type)}`}>
                      {job.type}
                    </Badge>
                  </div>
                  <div className="space-y-2 mb-4">
                    {job.requirements.map((requirement, reqIndex) => (
                      <p key={reqIndex} className="text-gray-600 text-sm flex items-start">
                        <span className="mr-2">•</span>
                        {requirement}
                      </p>
                    ))}
                  </div>
                  <Button 
                    className="w-full"
                    data-testid={`apply-button-${index}`}
                  >
{language === 'ko' ? '지원하기' : 'Apply Now'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Contact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {language === 'ko' ? '복리후생' : 'Benefits'}
                </h2>
                <div className="space-y-4">
                  {content.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-gray-700" data-testid={`benefit-${index}`}>
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-primary text-white shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">
                  {language === 'ko' ? '채용문의' : 'Career Inquiries'}
                </h2>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5" />
                    <div>
                      <p className="font-semibold">{language === 'ko' ? '전화' : 'Phone'}</p>
                      <a href="tel:862-336-1701" className="hover:opacity-80 transition-opacity">
                        862-336-1701
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5" />
                    <div>
                      <p className="font-semibold">{language === 'ko' ? '이메일' : 'Email'}</p>
                      <a href="mailto:hello@happyhomenj.com" className="hover:opacity-80 transition-opacity">
                        hello@happyhomenj.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5" />
                    <div>
                      <p className="font-semibold">{language === 'ko' ? '상담시간' : 'Consultation Hours'}</p>
                      <p>{language === 'ko' ? '평일 08:00 - 18:00' : 'Weekdays 08:00 - 18:00'}</p>
                    </div>
                  </div>
                </div>
                <Button 
                  variant="secondary" 
                  className="w-full"
                  data-testid="button-career-inquiry"
                >
{language === 'ko' ? '지금 문의하기' : 'Contact Now'}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {language === 'ko' ? '왜 해피홈 데이케어와 함께해야 할까요?' : 'Why Join Happy Home Daycare?'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'ko' ? '의미있는 일과 성장의 기회를 제공하는 직장' : 'A workplace that provides meaningful work and growth opportunities'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">의미있는 일</h3>
                <p className="text-gray-600">
                  어르신들의 삶에 긍정적인 변화를 만드는 보람있는 업무
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-secondary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">전문성 성장</h3>
                <p className="text-gray-600">
                  지속적인 교육과 훈련을 통한 전문역량 향상 기회
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">팀워크</h3>
                <p className="text-gray-600">
                  서로를 지지하고 협력하는 따뜻한 조직 문화
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
