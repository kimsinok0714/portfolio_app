import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "홍길동 | 개발자 포트폴리오",
  description: "경험이 풍부한 풀스택 개발자 홍길동의 포트폴리오입니다. React, Next.js, TypeScript를 활용한 모던 웹 개발을 전문으로 합니다.",
  keywords: ["개발자", "포트폴리오", "React", "Next.js", "TypeScript", "풀스택", "웹개발"],
  authors: [{ name: "홍길동" }],
  creator: "홍길동",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    title: "홍길동 | 개발자 포트폴리오",
    description: "경험이 풍부한 풀스택 개발자 홍길동의 포트폴리오입니다.",
    siteName: "홍길동 포트폴리오",
  },
  twitter: {
    card: "summary_large_image",
    title: "홍길동 | 개발자 포트폴리오",
    description: "경험이 풍부한 풀스택 개발자 홍길동의 포트폴리오입니다.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "", // Google Search Console 인증 코드
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "홍길동",
              jobTitle: "풀스택 개발자",
              description: "경험이 풍부한 풀스택 개발자로 React, Next.js, TypeScript를 전문으로 합니다.",
              url: typeof window !== 'undefined' ? window.location.origin : '',
              knowsAbout: ["React", "Next.js", "TypeScript", "Node.js", "JavaScript", "웹개발"],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
