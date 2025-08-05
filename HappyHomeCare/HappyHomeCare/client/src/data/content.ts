export const aboutContent = {
  ko: {
    missionPoints: []
  },
  en: {
    missionPoints: []
  }
};

export const servicesContent = {
  ko: {
    services: [
      {
        icon: 'UserMd',
        title: '건강 관리',
        description: '전문 간호사와 의료진이 어르신들의 건강 상태를 지속적으로 모니터링하고 관리합니다.'
      },
      {
        icon: 'Utensils',
        title: '영양 관리',
        description: '영양사가 설계한 균형 잡힌 식단으로 어르신들의 건강한 식생활을 지원합니다.'
      },
      {
        icon: 'Gamepad2',
        title: '레크리에이션',
        description: '다양한 취미 활동과 게임을 통해 어르신들의 인지 능력 향상과 즐거운 시간을 제공합니다.'
      },
      {
        icon: 'Activity',
        title: '물리 치료',
        description: '전문 물리치료사가 어르신들의 신체 기능 유지와 향상을 위한 맞춤 운동을 지도합니다.'
      },
      {
        icon: 'Bus',
        title: '교통 서비스',
        description: '안전한 차량으로 어르신들의 편리한 통근을 지원하는 픽업 및 드롭오프 서비스를 제공합니다.'
      },
      {
        icon: 'Heart',
        title: '심리 지원',
        description: '전문 상담사가 어르신들의 심리적 안정감과 정서적 건강을 위한 지원을 제공합니다.'
      }
    ]
  },
  en: {
    services: [
      {
        icon: 'UserMd',
        title: 'Health Management',
        description: 'Professional nurses and medical staff continuously monitor and manage the health status of our seniors.'
      },
      {
        icon: 'Utensils',
        title: 'Nutrition Management',
        description: 'We support healthy eating habits for seniors with balanced meals designed by nutritionists.'
      },
      {
        icon: 'Gamepad2',
        title: 'Recreation Activities',
        description: 'We provide cognitive enhancement and enjoyable time through various hobby activities and games.'
      },
      {
        icon: 'Activity',
        title: 'Physical Therapy',
        description: 'Professional physical therapists guide customized exercises to maintain and improve seniors\' physical functions.'
      },
      {
        icon: 'Bus',
        title: 'Transportation Service',
        description: 'We provide pickup and drop-off services with safe vehicles to support convenient commuting for seniors.'
      },
      {
        icon: 'Heart',
        title: 'Psychological Support',
        description: 'Professional counselors provide support for psychological stability and emotional health of seniors.'
      }
    ]
  }
};

export const daycareSchedule = {
  ko: [
    { time: '08:00 - 09:00', title: '등원 및 건강체크', description: '안전한 하루 시작' },
    { time: '09:00 - 10:30', title: '아침 운동 & 체조', description: '건강한 몸만들기' },
    { time: '10:30 - 12:00', title: '인지 활동 프로그램', description: '두뇌 활동 증진' },
    { time: '12:00 - 13:00', title: '점심식사 & 휴식', description: '영양 가득한 식사' },
    { time: '13:00 - 14:30', title: '취미 활동', description: '개인 맞춤 취미' },
    { time: '14:30 - 15:30', title: '간식 시간', description: '건강한 간식' },
    { time: '15:30 - 16:30', title: '레크리에이션', description: '즐거운 게임시간' },
    { time: '16:30 - 17:00', title: '하원 준비', description: '안전한 귀가' }
  ],
  en: [
    { time: '08:00 - 09:00', title: 'Arrival & Health Check', description: 'Safe start of the day' },
    { time: '09:00 - 10:30', title: 'Morning Exercise & Gymnastics', description: 'Building a healthy body' },
    { time: '10:30 - 12:00', title: 'Cognitive Activity Program', description: 'Brain activity enhancement' },
    { time: '12:00 - 13:00', title: 'Lunch & Rest', description: 'Nutritious meal' },
    { time: '13:00 - 14:30', title: 'Hobby Activities', description: 'Personalized hobbies' },
    { time: '14:30 - 15:30', title: 'Snack Time', description: 'Healthy snacks' },
    { time: '15:30 - 16:30', title: 'Recreation', description: 'Fun game time' },
    { time: '16:30 - 17:00', title: 'Departure Preparation', description: 'Safe return home' }
  ]
};

export const eligibilityContent = {
  ko: {
    criteria: [
      '만 65세 이상의 어르신',
      '치매, 중풍 등으로 일상생활에 도움이 필요한 분',
      '장기요양등급 1~5등급 인정자',
      '인지지원등급 인정자',
      '사회적 고립감을 느끼시는 어르신'
    ],
    process: [
      { title: '상담 예약', description: '전화 또는 방문 상담 예약' },
      { title: '초기 평가', description: '건강상태 및 케어 필요도 평가' },
      { title: '서류 제출', description: '필요 서류 준비 및 제출' },
      { title: '계약 체결', description: '이용 계약서 작성 및 서명' },
      { title: '서비스 시작', description: '개인 맞춤 케어 서비스 시작' }
    ],
    documents: [
      '장기요양인정서 사본',
      '주민등록등본',
      '건강진단서 (최근 3개월 이내)',
      '신분증 사본',
      '보험증 사본',
      '약물복용확인서'
    ]
  },
  en: {
    criteria: [
      'Seniors aged 65 and above',
      'Those who need assistance with daily living due to dementia, stroke, etc.',
      'Long-term care grade 1-5 certified individuals',
      'Cognitive support grade certified individuals',
      'Seniors experiencing social isolation'
    ],
    process: [
      { title: 'Consultation Appointment', description: 'Phone or visit consultation appointment' },
      { title: 'Initial Assessment', description: 'Health status and care needs assessment' },
      { title: 'Document Submission', description: 'Prepare and submit required documents' },
      { title: 'Contract Signing', description: 'Prepare and sign service contract' },
      { title: 'Service Start', description: 'Begin personalized care services' }
    ],
    documents: [
      'Copy of Long-term Care Certificate',
      'Resident Registration Certificate',
      'Health Certificate (within 3 months)',
      'Copy of ID',
      'Copy of Insurance Card',
      'Medication Confirmation Form'
    ]
  }
};

export const careersContent = {
  ko: {
    jobs: [
      {
        title: '간호사',
        type: '정규직',
        requirements: ['간호사 면허 소지자', '노인 케어 경험 3년 이상', '책임감과 인내심 보유']
      },
      {
        title: '요양보호사',
        type: '정규직',
        requirements: ['요양보호사 자격증 소지자', '성실하고 친절한 성격', '팀워크 중시']
      },
      {
        title: '물리치료사',
        type: '정규직',
        requirements: ['물리치료사 면허 소지자', '노인 재활 경험 우대', '소통 능력 우수']
      },
      {
        title: '사회복지사',
        type: '정규직',
        requirements: ['사회복지사 자격증 소지자', '프로그램 기획 능력', '어르신과의 소통 능력']
      },
      {
        title: '영양사',
        type: '정규직',
        requirements: ['영양사 면허 소지자', '단체급식 경험 우대', '위생관리 철저']
      },
      {
        title: '운전기사',
        type: '파트타임',
        requirements: ['1종 보통 면허 소지자', '무사고 경력 3년 이상', '친절하고 세심한 성격']
      }
    ],
    benefits: [
      '4대 보험 완비 (국민연금, 건강보험, 고용보험, 산재보험)',
      '유급휴가 및 연차휴가 보장',
      '직원 교육 프로그램 지원',
      '성과에 따른 인센티브 제공',
      '건강검진 지원'
    ]
  },
  en: {
    jobs: [
      {
        title: 'Registered Nurse',
        type: 'Full-time',
        requirements: ['Licensed registered nurse', '3+ years elderly care experience', 'Responsible and patient']
      },
      {
        title: 'Care Worker',
        type: 'Full-time',
        requirements: ['Certified care worker', 'Sincere and kind personality', 'Values teamwork']
      },
      {
        title: 'Physical Therapist',
        type: 'Full-time',
        requirements: ['Licensed physical therapist', 'Elderly rehabilitation experience preferred', 'Excellent communication skills']
      },
      {
        title: 'Social Worker',
        type: 'Full-time',
        requirements: ['Certified social worker', 'Program planning skills', 'Communication skills with seniors']
      },
      {
        title: 'Nutritionist',
        type: 'Full-time',
        requirements: ['Licensed nutritionist', 'Group meal service experience preferred', 'Thorough hygiene management']
      },
      {
        title: 'Driver',
        type: 'Part-time',
        requirements: ['Class 1 driver\'s license holder', '3+ years accident-free record', 'Kind and attentive personality']
      }
    ],
    benefits: [
      'Complete 4 major insurances (National Pension, Health Insurance, Employment Insurance, Workers\' Compensation)',
      'Guaranteed paid leave and annual vacation',
      'Employee training program support',
      'Performance-based incentives',
      'Health checkup support'
    ]
  }
};
