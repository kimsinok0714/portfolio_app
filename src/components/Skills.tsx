'use client';

import { useState, useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  icon: string;
  description: string;
}

interface SkillsData {
  frontend: Skill[];
  backend: Skill[];
  tools: Skill[];
}

const Skills = () => {
  const [skills, setSkills] = useState<SkillsData | null>(null);
  const [visibleSkills, setVisibleSkills] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Skills 데이터 로드
    const loadSkills = async () => {
      try {
        const response = await fetch('/data/skills.json');
        const data = await response.json();
        setSkills(data);
      } catch (error) {
        console.error('스킬 데이터를 불러오는데 실패했습니다:', error);
      }
    };

    loadSkills();
  }, []);

  useEffect(() => {
    // Intersection Observer로 뷰포트 진입 감지
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillElement = entry.target as HTMLElement;
            const skillName = skillElement.dataset.skillName;
            if (skillName) {
              setVisibleSkills((prev) => new Set([...prev, skillName]));
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    // 모든 스킬 카드 관찰
    const skillCards = sectionRef.current?.querySelectorAll('[data-skill-name]');
    skillCards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [skills]);

  const SkillCard = ({ skill, isVisible }: { skill: Skill; isVisible: boolean }) => (
    <div
      data-skill-name={skill.name}
      className="bg-white dark:bg-neutral-800 p-8 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-all duration-300 hover:scale-105"
    >
      <div className="flex items-center mb-6">
        <span className="text-3xl mr-4">{skill.icon}</span>
        <div>
          <h4 className="font-semibold text-foreground tracking-wide">{skill.name}</h4>
          <p className="text-sm text-secondary-600 dark:text-secondary-400 leading-relaxed mt-1">
            {skill.description}
          </p>
        </div>
      </div>
      
      {/* 프로그레스 바 */}
      <div className="mt-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300 tracking-wide">
            숙련도
          </span>
          <span className="text-sm font-bold text-primary-600">
            {skill.level}%
          </span>
        </div>
        <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full transition-all duration-1000 ease-out"
            style={{
              width: isVisible ? `${skill.level}%` : '0%',
            }}
          />
        </div>
      </div>
    </div>
  );

  const SkillCategory = ({ 
    title, 
    skills, 
    icon 
  }: { 
    title: string; 
    skills: Skill[]; 
    icon: string;
  }) => (
    <div className="mb-16">
      <div className="flex items-center mb-8">
        <span className="text-2xl mr-4">{icon}</span>
        <h3 className="text-2xl font-bold text-foreground tracking-tight">{title}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            isVisible={visibleSkills.has(skill.name)}
          />
        ))}
      </div>
    </div>
  );

  if (!skills) {
    return (
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-secondary-600 dark:text-secondary-400">
            스킬 데이터를 불러오는 중...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="section-padding bg-background"
    >
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* 섹션 헤더 */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
              Skills & Technologies
            </h2>
            <p className="text-secondary-600 dark:text-secondary-400 text-lg max-w-2xl mx-auto leading-relaxed tracking-wide">
              지속적인 학습과 실무 경험을 통해 쌓아온 기술 스택입니다
            </p>
          </div>

          {/* 스킬 카테고리 */}
          <div className="space-y-12">
            <SkillCategory
              title="Frontend Development"
              skills={skills.frontend}
              icon="🎨"
            />
            
            <SkillCategory
              title="Backend Development"
              skills={skills.backend}
              icon="⚙️"
            />
            
            <SkillCategory
              title="Tools & Others"
              skills={skills.tools}
              icon="🛠️"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;