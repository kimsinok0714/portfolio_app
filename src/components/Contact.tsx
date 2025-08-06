'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'hong@example.com',
      href: 'mailto:hong@example.com'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/honggildong',
      href: 'https://github.com/honggildong'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/honggildong',
      href: 'https://linkedin.com/in/honggildong'
    }
  ];

  // 실시간 입력 검증
  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return '이름을 입력해주세요.';
        if (value.trim().length < 2) return '이름은 2글자 이상 입력해주세요.';
        break;
      case 'email':
        if (!value.trim()) return '이메일을 입력해주세요.';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return '올바른 이메일 형식을 입력해주세요.';
        break;
      case 'message':
        if (!value.trim()) return '메시지를 입력해주세요.';
        if (value.trim().length < 10) return '메시지는 10글자 이상 입력해주세요.';
        break;
    }
    return undefined;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // 실시간 검증
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 전체 폼 검증
    const newErrors: FormErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof FormData]);
      if (error) {
        newErrors[key as keyof FormErrors] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
        
        // 성공 메시지 3초 후 숨기기
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        throw new Error('메시지 전송에 실패했습니다.');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
      
      // 에러 메시지 3초 후 숨기기
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* 섹션 헤더 */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
              Get In Touch
            </h2>
            <p className="text-secondary-600 dark:text-secondary-400 text-lg max-w-2xl mx-auto leading-relaxed tracking-wide">
              새로운 프로젝트나 협업 기회에 대해 언제든 연락해주세요
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* 연락처 정보 */}
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-8 tracking-tight">
                  연락처 정보
                </h3>
                <div className="space-y-5">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center p-6 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                    >
                      <span className="text-2xl mr-5">{info.icon}</span>
                      <div>
                        <div className="font-semibold text-foreground group-hover:text-primary-600 transition-colors tracking-wide">
                          {info.label}
                        </div>
                        <div className="text-secondary-600 dark:text-secondary-400 text-sm mt-1 leading-relaxed">
                          {info.value}
                        </div>
                      </div>
                      <span className="ml-auto text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        ↗
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* 추가 정보 */}
              <div className="p-6 bg-primary-50 dark:bg-primary-900/20 rounded-xl border border-primary-200 dark:border-primary-800">
                <h4 className="font-semibold text-primary-700 dark:text-primary-300 mb-2">
                  💡 함께 일하고 싶어요!
                </h4>
                <p className="text-primary-600 dark:text-primary-400 text-sm leading-loose tracking-wide">
                  흥미로운 프로젝트나 새로운 기술에 대한 이야기를 나누는 것을 좋아합니다. 
                  커피 한 잔과 함께 아이디어를 공유해보세요!
                </p>
              </div>
            </div>

            {/* 문의 폼 */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8 tracking-tight">
                메시지 보내기
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* 이름 */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-3 tracking-wide">
                    이름 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-5 py-4 border rounded-lg bg-white dark:bg-neutral-800 text-foreground placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors ${
                      errors.name ? 'border-error' : 'border-neutral-300 dark:border-neutral-600'
                    }`}
                    placeholder="홍길동"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-error">{errors.name}</p>
                  )}
                </div>

                {/* 이메일 */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-3 tracking-wide">
                    이메일 *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-5 py-4 border rounded-lg bg-white dark:bg-neutral-800 text-foreground placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors ${
                      errors.email ? 'border-error' : 'border-neutral-300 dark:border-neutral-600'
                    }`}
                    placeholder="hong@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-error">{errors.email}</p>
                  )}
                </div>

                {/* 메시지 */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-3 tracking-wide">
                    메시지 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className={`w-full px-5 py-4 border rounded-lg bg-white dark:bg-neutral-800 text-foreground placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors resize-vertical ${
                      errors.message ? 'border-error' : 'border-neutral-300 dark:border-neutral-600'
                    }`}
                    placeholder="프로젝트에 대한 상세한 내용을 알려주세요..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-error">{errors.message}</p>
                  )}
                </div>

                {/* 제출 버튼 */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800 disabled:cursor-not-allowed tracking-wide"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      전송 중...
                    </span>
                  ) : (
                    '메시지 보내기'
                  )}
                </button>
              </form>

              {/* 상태 메시지 */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-success/10 border border-success/20 text-success rounded-lg">
                  ✅ 메시지가 성공적으로 전송되었습니다! 빠른 시일 내에 답변드리겠습니다.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-error/10 border border-error/20 text-error rounded-lg">
                  ❌ 메시지 전송에 실패했습니다. 잠시 후 다시 시도해주세요.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;