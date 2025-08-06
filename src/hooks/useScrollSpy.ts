'use client';

import { useState, useEffect } from 'react';

interface UseScrollSpyOptions {
  sectionIds: string[];
  offset?: number;
}

const useScrollSpy = ({ sectionIds, offset = 100 }: UseScrollSpyOptions) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      
      // 각 섹션의 위치를 확인하고 현재 뷰포트에 있는 섹션을 찾습니다
      let currentSection = '';
      
      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          // 현재 스크롤 위치가 섹션 범위 내에 있는지 확인
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            currentSection = sectionId;
            break;
          }
          
          // 첫 번째 섹션이 뷰포트 위에 있을 때도 처리
          if (sectionId === sectionIds[0] && scrollPosition < elementTop) {
            currentSection = sectionId;
            break;
          }
        }
      }
      
      // 스크롤이 맨 아래에 있을 때 마지막 섹션 활성화
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
        currentSection = sectionIds[sectionIds.length - 1];
      }
      
      setActiveSection(currentSection);
    };

    // 초기 상태 설정
    handleScroll();
    
    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // 리사이즈 이벤트도 처리 (모바일 환경에서 주소창 숨김/표시 시)
    window.addEventListener('resize', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
};

export default useScrollSpy;