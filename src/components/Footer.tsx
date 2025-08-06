const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const links = [
    {
      title: '개인정보 처리방침',
      href: '#privacy',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        // 실제 개인정보 처리방침 페이지로 연결하거나 모달 표시
        alert('개인정보 처리방침 페이지는 준비 중입니다.');
      }
    },
    {
      title: '이용약관',
      href: '#terms',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        // 실제 이용약관 페이지로 연결하거나 모달 표시
        alert('이용약관 페이지는 준비 중입니다.');
      }
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/honggildong',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/honggildong',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'Email',
      href: 'mailto:hong@example.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary-900 dark:bg-neutral-900 text-white">
      {/* 메인 푸터 콘텐츠 */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 브랜드 및 소개 */}
            <div className="md:col-span-1">
              <button
                onClick={scrollToTop}
                className="text-2xl font-bold text-white hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md px-2 py-1 mb-4"
              >
                홍길동
              </button>
              <p className="text-secondary-300 text-sm leading-loose tracking-wide mb-4">
                사용자 경험을 최우선으로 생각하는 풀스택 개발자입니다. 
                혁신적이고 확장 가능한 웹 솔루션을 만들어갑니다.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-secondary-400 hover:text-primary-400 transition-colors p-2 hover:bg-secondary-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* 빠른 링크 */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold text-white mb-4">빠른 링크</h3>
              <nav className="space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const element = document.querySelector(`#${item.toLowerCase()}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block text-secondary-300 hover:text-primary-400 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md px-2 py-1 text-left"
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>

            {/* 연락처 정보 */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold text-white mb-4">연락처</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-secondary-300">
                  <span className="mr-3">📧</span>
                  <a 
                    href="mailto:hong@example.com"
                    className="hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md px-1"
                  >
                    hong@example.com
                  </a>
                </div>
                <div className="flex items-center text-secondary-300">
                  <span className="mr-3">📍</span>
                  <span>Seoul, South Korea</span>
                </div>
                <div className="flex items-center text-secondary-300">
                  <span className="mr-3">💼</span>
                  <span>풀스택 개발자</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 바 */}
      <div className="border-t border-secondary-800">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
            {/* 저작권 */}
            <div className="text-secondary-400 text-sm mb-4 md:mb-0">
              © {currentYear} 홍길동. All rights reserved.
            </div>

            {/* 법적 링크 */}
            <div className="flex space-x-6">
              {links.map((link) => (
                <button
                  key={link.title}
                  onClick={link.onClick}
                  className="text-secondary-400 hover:text-primary-400 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md px-2 py-1"
                >
                  {link.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 맨 위로 버튼 */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-300 z-40"
        aria-label="맨 위로 이동"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;