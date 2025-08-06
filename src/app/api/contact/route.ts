import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    
    // 입력 검증
    const { name, email, message } = body;
    
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: '모든 필드를 입력해주세요.' },
        { status: 400 }
      );
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '올바른 이메일 형식을 입력해주세요.' },
        { status: 400 }
      );
    }

    // 내용 길이 검증
    if (name.trim().length < 2) {
      return NextResponse.json(
        { error: '이름은 2글자 이상 입력해주세요.' },
        { status: 400 }
      );
    }

    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: '메시지는 10글자 이상 입력해주세요.' },
        { status: 400 }
      );
    }

    // 실제 프로덕션에서는 여기서 이메일 전송 서비스를 연동합니다
    // 예: SendGrid, AWS SES, Nodemailer 등
    
    console.log('Contact form submission:', {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    });

    // 개발 환경에서는 콘솔에 로그만 출력
    // 실제 환경에서는 이메일 전송 로직을 구현해야 합니다
    
    /*
    // 예시: Nodemailer를 사용한 이메일 전송
    import nodemailer from 'nodemailer';
    
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'hong@example.com',
      subject: `포트폴리오 문의: ${name}`,
      html: `
        <h2>새로운 포트폴리오 문의가 있습니다</h2>
        <p><strong>이름:</strong> ${name}</p>
        <p><strong>이메일:</strong> ${email}</p>
        <p><strong>메시지:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>전송 시간: ${new Date().toLocaleString('ko-KR')}</small></p>
      `,
    });
    */

    // 성공 응답
    return NextResponse.json(
      { 
        message: '메시지가 성공적으로 전송되었습니다. 빠른 시일 내에 답변드리겠습니다.',
        success: true
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact API error:', error);
    
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' },
      { status: 500 }
    );
  }
}

// GET 요청에 대한 응답 (선택사항)
export async function GET() {
  return NextResponse.json(
    { message: 'Contact API endpoint. POST 요청만 지원됩니다.' },
    { status: 405 }
  );
}