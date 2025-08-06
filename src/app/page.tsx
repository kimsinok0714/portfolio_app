'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import useScrollSpy from '@/hooks/useScrollSpy';

export default function Home() {
  // 스크롤 스파이를 위한 섹션 ID 배열
  const sectionIds = ['home', 'about', 'skills', 'projects', 'contact'];
  const activeSection = useScrollSpy({ sectionIds, offset: 100 });

  return (
    <div className="relative">
      {/* 헤더 */}
      <Header activeSection={activeSection} />
      
      {/* 메인 콘텐츠 */}
      <main>
        {/* Hero 섹션 */}
        <Hero />
        
        {/* About 섹션 */}
        <About />
        
        {/* Skills 섹션 */}
        <Skills />
        
        {/* Projects 섹션 */}
        <Projects />
        
        {/* Contact 섹션 */}
        <Contact />
      </main>
      
      {/* 푸터 */}
      <Footer />
    </div>
  );
}
