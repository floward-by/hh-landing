import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ko' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

const translations: Record<string, Record<Language, string>> = {
  // Header
  'site.title': {
    ko: '해피홈 데이케어',
    en: 'Happy Home Adult Daycare'
  },
  'site.slogan': {
    ko: '어르신의 오늘을 더 소중하게',
    en: 'Making Every Day More Precious for Our Seniors'
  },
  'nav.home': {
    ko: '홈',
    en: 'Home'
  },
  'nav.about': {
    ko: '소개',
    en: 'About'
  },
  'nav.services': {
    ko: '서비스안내',
    en: 'Services'
  },
  'nav.daycare': {
    ko: '데이케어',
    en: 'Daycare'
  },
  'nav.eligibility': {
    ko: '대상 및 절차',
    en: 'Eligibility & Procedures'
  },
  'nav.careers': {
    ko: '채용정보',
    en: 'Careers'
  },
  'button.contact': {
    ko: '서비스 문의하기',
    en: 'Contact Us Today'
  },
  
  // About Page
  'about.title': {
    ko: '소개',
    en: 'About Us'
  },
  'about.description': {
    ko: '해피홈 데이케어는 어르신들의 건강하고 행복한 일상을 위해 최선을 다하는 전문 데이케어 센터입니다.',
    en: 'Happy Home Adult Daycare is a professional daycare center dedicated to providing healthy and happy daily life for our seniors.'
  },
  'about.mission': {
    ko: '우리의 미션',
    en: 'Our Mission'
  },
  
  // Services Page
  'services.title': {
    ko: '서비스안내',
    en: 'Our Services'
  },
  'services.description': {
    ko: '어르신들의 다양한 필요에 맞춘 전문적이고 포괄적인 서비스를 제공합니다.',
    en: 'We provide professional and comprehensive services tailored to the diverse needs of our seniors.'
  },
  
  // Daycare Page
  'daycare.title': {
    ko: '데이케어 프로그램',
    en: 'Daycare Programs'
  },
  'daycare.description': {
    ko: '어르신들의 하루하루가 의미 있고 즐거우실 수 있도록 다양한 프로그램을 준비했습니다.',
    en: 'We have prepared various programs to make every day meaningful and enjoyable for our seniors.'
  },
  
  // Eligibility Page
  'eligibility.title': {
    ko: '대상 및 절차',
    en: 'Eligibility & Procedures'
  },
  'eligibility.description': {
    ko: '해피홈 데이케어 이용을 위한 대상 및 입소 절차를 안내해 드립니다.',
    en: 'We guide you through the eligibility requirements and admission procedures for Happy Home Adult Daycare.'
  },
  
  // Careers Page
  'careers.title': {
    ko: '채용정보',
    en: 'Career Opportunities'
  },
  'careers.description': {
    ko: '어르신들의 행복한 일상을 함께 만들어 갈 전문적이고 따뜻한 마음을 가진 분들을 찾습니다.',
    en: 'We are looking for professional and warm-hearted individuals to create happy daily life together with our seniors.'
  },
  
  // Footer
  'footer.contact': {
    ko: '연락처',
    en: 'Contact'
  },
  'footer.hours': {
    ko: '운영시간',
    en: 'Operating Hours'
  },
  'footer.copyright': {
    ko: '© 2024 해피홈 데이케어. 모든 권리 보유.',
    en: '© 2024 Happy Home Adult Daycare. All rights reserved.'
  },
  
  // Home page content
  'home.features.title': {
    ko: '에서 제공하는 특별한 케어',
    en: '\'s Special Care Services'
  },
  'home.features.subtitle': {
    ko: '어르신들의 건강하고 행복한 일상을 위해 최고의 서비스를 제공합니다',
    en: 'We provide the best services for the healthy and happy daily life of our seniors'
  },
  'home.cta.title': {
    ko: '어르신들의 행복한 하루를 함께하세요',
    en: 'Join Us in Creating Happy Days for Our Seniors'
  },
  'home.cta.subtitle': {
    ko: '전문적이고 따뜻한 케어로 어르신들의 일상을 더욱 특별하게 만들어 드립니다',
    en: 'We make seniors\' daily lives more special with professional and warm care'
  },
  'home.cta.contact': {
    ko: '서비스 문의하기',
    en: 'Contact Our Services'
  },
  'home.cta.visit': {
    ko: '방문 예약하기',
    en: 'Schedule a Visit'
  },
  
  // Announcements section
  'home.announcements.title': {
    ko: '공지 사항',
    en: 'Announcements'
  },
  'home.announcements.fairview.title': {
    ko: '페어뷰 센터 오픈',
    en: 'Fairview Center Opening'
  },
  'home.announcements.fairview.subtitle': {
    ko: '페어뷰 센터가 완공 했습니다',
    en: 'Fairview Center has been completed'
  },
  
  // News section
  'home.news.title': {
    ko: '해피홈 소식',
    en: 'Happy Home News'
  },
  
  // Footer updates
  'footer.hours.korean': {
    ko: '영업 시간',
    en: 'Hours'
  },
  'footer.hours.days': {
    ko: '월 - 금: 오전 8시 - 오후 6시',
    en: 'Monday - Friday: 8AM - 6PM'
  }
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('ko');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ko' ? 'en' : 'ko');
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
