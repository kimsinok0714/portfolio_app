'use client';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-50 via-background to-secondary-50 dark:from-primary-900/10 dark:via-background dark:to-secondary-900/10"
    >
      {/* 배경 장식 요소 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-200/20 dark:bg-primary-800/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-200/20 dark:bg-secondary-800/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary-300/30 dark:bg-primary-700/30 rounded-full blur-2xl animate-bounce" />
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* 환영 메시지 */}
          <div className="mb-24">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-12 leading-tight tracking-tight">
              안녕하세요,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
                홍길동
              </span>
              입니다
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-secondary-600 dark:text-secondary-400 font-medium max-w-2xl mx-auto leading-relaxed tracking-wide">
              사용자 경험을 최우선으로 생각하는{' '}
              <span className="text-primary-600 font-semibold">풀스택 개발자</span>
              <br className="mb-4" />
              혁신적이고 확장 가능한 웹 솔루션을 만들어갑니다
            </p>
          </div>

          {/* 핵심 키워드 */}
          <div className="mb-56">
            <div className="flex flex-wrap justify-center gap-4 mb-28 leading-loose">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'AWS'].map((tech) => (
                <span
                  key={tech}
                  className="px-5 py-3 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium border border-primary-200 dark:border-primary-800 tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* 시각적 구분선 */}
            <div className="flex justify-center items-center my-24">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-secondary-300 dark:via-secondary-600 to-transparent"></div>
              <div className="mx-4 w-2 h-2 bg-primary-400 dark:bg-primary-600 rounded-full"></div>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-secondary-300 dark:via-secondary-600 to-transparent"></div>
            </div>
          </div>

          {/* CTA 버튼 */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-32">
            <button
              onClick={scrollToProjects}
              className="group px-10 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800 tracking-wide"
            >
              프로젝트 보기
              <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
            
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-10 py-4 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800 tracking-wide"
            >
              연락하기
            </a>
          </div>

          {/* 스크롤 인디케이터 */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce mt-32">
            <div className="w-6 h-10 border-2 border-secondary-400 dark:border-secondary-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-secondary-400 dark:bg-secondary-600 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;