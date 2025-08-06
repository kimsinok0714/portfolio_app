'use client';

const About = () => {
  const highlights = [
    {
      icon: '🗓️',
      title: '총 경력',
      value: '7년',
      description: '웹 개발 및 소프트웨어 엔지니어링'
    },
    {
      icon: '🚀',
      title: '완성 프로젝트',
      value: '15개',
      description: '기업용 웹 애플리케이션 및 서비스'
    },
    {
      icon: '👥',
      title: '협업 경험',
      value: '50+',
      description: '다양한 팀과의 협업 프로젝트'
    },
    {
      icon: '🏆',
      title: '기술 스택',
      value: '10+',
      description: '전문적으로 다루는 기술들'
    }
  ];

  return (
    <section id="about" className="section-padding bg-surface dark:bg-neutral-900/50">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* 섹션 헤더 */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
              About Me
            </h2>
            <p className="text-secondary-600 dark:text-secondary-400 text-lg max-w-2xl mx-auto leading-relaxed tracking-wide">
              끊임없이 학습하고 성장하며, 사용자 중심의 개발을 추구합니다
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 프로필 이미지 */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* 배경 장식 */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full blur opacity-20"></div>
                
                {/* 프로필 이미지 컨테이너 */}
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white dark:border-neutral-800 shadow-2xl">
                  {/* 임시 프로필 이미지 - 실제 사용 시 실제 이미지로 교체 */}
                  <div className="w-full h-full bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 flex items-center justify-center">
                    <div className="text-6xl">👨‍💻</div>
                  </div>
                  {/* 실제 이미지 사용 시:
                  <Image
                    src="/profile-image.jpg"
                    alt="홍길동 프로필"
                    fill
                    className="object-cover"
                    priority
                    loading="eager"
                  />
                  */}
                </div>
              </div>
            </div>

            {/* 자기소개 및 정보 */}
            <div className="space-y-8">
              {/* 자기소개 */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground mb-6 tracking-tight">
                  안녕하세요! 저는 홍길동입니다
                </h3>
                
                <div className="space-y-8 text-secondary-700 dark:text-secondary-300 leading-relaxed tracking-wide">
                  <p className="text-base leading-loose">
                    7년간의 풀스택 개발 경험을 바탕으로 사용자 중심의 웹 애플리케이션을 개발하고 있습니다. 
                    React와 Next.js를 활용한 모던 프론트엔드 개발부터 Node.js 기반의 백엔드 아키텍처 설계까지, 
                    전체 개발 사이클을 아우르는 전문성을 보유하고 있습니다.
                  </p>
                  
                  <p className="text-base leading-loose">
                    특히 성능 최적화와 사용자 경험 개선에 깊은 관심을 가지고 있으며, 
                    복잡한 비즈니스 요구사항을 직관적이고 효율적인 솔루션으로 구현하는 것을 즐깁니다. 
                    지속적인 학습과 기술 공유를 통해 팀과 함께 성장하는 개발자가 되고자 합니다.
                  </p>
                  
                  <p className="text-base leading-loose">
                    현재는 차세대 웹 기술과 AI 기반 개발 도구에 관심을 두고 연구하고 있으며, 
                    더 나은 개발자 경험과 사용자 만족을 위한 혁신적인 솔루션을 모색하고 있습니다.
                  </p>
                </div>
              </div>

              {/* 핵심 경력 하이라이트 */}
              <div className="grid grid-cols-2 gap-6">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="p-5 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-2xl mb-3">{item.icon}</div>
                    <div className="text-2xl font-bold text-primary-600 mb-2 tracking-tight">
                      {item.value}
                    </div>
                    <div className="text-sm font-semibold text-foreground mb-2 tracking-wide">
                      {item.title}
                    </div>
                    <div className="text-xs text-secondary-600 dark:text-secondary-400 leading-relaxed">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;