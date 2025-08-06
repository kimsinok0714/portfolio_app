'use client';

import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'fullstack';
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'mobile' | 'fullstack'>('all');

  // 프로젝트 데이터 (실제 프로젝트로 교체 필요)
  const projects: Project[] = [
    {
      id: 1,
      title: "E-커머스 플랫폼",
      description: "Next.js와 Stripe를 활용한 현대적인 온라인 쇼핑몰입니다. 관리자 대시보드와 사용자 경험 최적화가 특징입니다.",
      image: "/images/project-1.jpg", // 실제 이미지로 교체 필요
      technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example/ecommerce",
      category: "fullstack"
    },
    {
      id: 2,
      title: "실시간 채팅 애플리케이션",
      description: "WebSocket을 활용한 실시간 채팅 시스템입니다. 그룹 채팅과 파일 공유 기능을 지원합니다.",
      image: "/images/project-2.jpg", // 실제 이미지로 교체 필요
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Express"],
      demoUrl: "https://chat.example.com",
      githubUrl: "https://github.com/example/chat-app",
      category: "web"
    },
    {
      id: 3,
      title: "프로젝트 관리 도구",
      description: "팀 협업을 위한 칸반 보드 스타일의 프로젝트 관리 도구입니다. 드래그 앤 드롭과 실시간 동기화를 지원합니다.",
      image: "/images/project-3.jpg", // 실제 이미지로 교체 필요
      technologies: ["React", "Redux", "Node.js", "GraphQL", "AWS"],
      demoUrl: "https://pm.example.com",
      githubUrl: "https://github.com/example/project-manager",
      category: "fullstack"
    },
    {
      id: 4,
      title: "날씨 정보 대시보드",
      description: "다양한 기상 API를 통합한 반응형 날씨 정보 웹 애플리케이션입니다. 위치 기반 서비스와 날씨 예보를 제공합니다.",
      image: "/images/project-4.jpg", // 실제 이미지로 교체 필요
      technologies: ["Vue.js", "JavaScript", "Chart.js", "OpenWeather API"],
      demoUrl: "https://weather.example.com",
      githubUrl: "https://github.com/example/weather-app",
      category: "web"
    },
    {
      id: 5,
      title: "포트폴리오 CMS",
      description: "개발자들을 위한 포트폴리오 콘텐츠 관리 시스템입니다. 헤드리스 CMS 아키텍처로 구성되었습니다.",
      image: "/images/project-5.jpg", // 실제 이미지로 교체 필요
      technologies: ["Next.js", "Sanity", "Tailwind CSS", "Vercel"],
      demoUrl: "https://portfolio-cms.example.com",
      githubUrl: "https://github.com/example/portfolio-cms",
      category: "fullstack"
    },
    {
      id: 6,
      title: "블로그 플랫폼",
      description: "마크다운 기반의 개발 블로그 플랫폼입니다. SEO 최적화와 검색 기능을 제공합니다.",
      image: "/images/project-6.jpg", // 실제 이미지로 교체 필요
      technologies: ["Gatsby", "React", "GraphQL", "Netlify CMS"],
      demoUrl: "https://blog.example.com",
      githubUrl: "https://github.com/example/blog-platform",
      category: "web"
    }
  ];

  const filters = [
    { key: 'all' as const, label: '전체', count: projects.length },
    { key: 'fullstack' as const, label: '풀스택', count: projects.filter(p => p.category === 'fullstack').length },
    { key: 'web' as const, label: '웹', count: projects.filter(p => p.category === 'web').length },
    { key: 'mobile' as const, label: '모바일', count: projects.filter(p => p.category === 'mobile').length },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const ProjectCard = ({ project }: { project: Project }) => (
    <div className="group bg-white dark:bg-neutral-800 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      {/* 프로젝트 이미지 */}
      <div className="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 overflow-hidden">
        {/* 임시 이미지 - 실제 프로젝트 이미지로 교체 필요 */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-4xl opacity-60">🚀</div>
        </div>
        {/* 실제 이미지 사용 시:
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        */}
        
        {/* 호버 오버레이 */}
        <div className="absolute inset-0 bg-primary-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-primary-900 rounded-lg font-medium hover:bg-primary-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            >
              Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-primary-900 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            >
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* 프로젝트 정보 */}
      <div className="p-8">
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary-600 transition-colors tracking-tight">
          {project.title}
        </h3>
        <p className="text-secondary-600 dark:text-secondary-400 text-sm leading-loose tracking-wide mb-6">
          {project.description}
        </p>

        {/* 기술 스택 뱃지 */}
        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-md border border-primary-200 dark:border-primary-800 tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="section-padding bg-surface dark:bg-neutral-900/50">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* 섹션 헤더 */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-secondary-600 dark:text-secondary-400 text-lg max-w-2xl mx-auto leading-relaxed tracking-wide">
              다양한 기술 스택을 활용하여 구현한 프로젝트들입니다
            </p>
          </div>

          {/* 필터 */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 tracking-wide ${
                  activeFilter === filter.key
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white dark:bg-neutral-800 text-secondary-600 dark:text-secondary-400 border border-neutral-200 dark:border-neutral-700 hover:bg-primary-50 dark:hover:bg-neutral-700 hover:text-primary-600'
                }`}
              >
                {filter.label}
                <span className="ml-3 text-xs opacity-75">({filter.count})</span>
              </button>
            ))}
          </div>

          {/* 프로젝트 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* 더 많은 프로젝트 */}
          <div className="text-center mt-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800"
            >
              <span>더 많은 프로젝트 보기</span>
              <span className="ml-2">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;