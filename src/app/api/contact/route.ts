import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // 입력 검증
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: '모든 필드를 입력해주세요.' },
        { status: 400 }
      );
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '올바른 이메일 주소를 입력해주세요.' },
        { status: 400 }
      );
    }

    // Nodemailer 설정
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER, // 발신자 이메일
        pass: process.env.EMAIL_PASS, // 앱 비밀번호
      },
    });

    // 이메일 내용 설정
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // 본인 이메일로 전송
      replyTo: email, // 답장할 때는 문의자 이메일로
      subject: `[포트폴리오 문의] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            새로운 포트폴리오 문의가 도착했습니다
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #495057; margin-top: 0;">문의자 정보</h3>
            <p><strong>이름:</strong> ${name}</p>
            <p><strong>이메일:</strong> ${email}</p>
            <p><strong>제목:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #495057; margin-top: 0;">메시지 내용</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 8px; font-size: 14px; color: #6c757d;">
            <p><strong>문의 시간:</strong> ${new Date().toLocaleString('ko-KR')}</p>
            <p><strong>IP 주소:</strong> ${request.headers.get('x-forwarded-for') || '알 수 없음'}</p>
          </div>
          
          <div style="margin-top: 20px; text-align: center; color: #6c757d; font-size: 12px;">
            <p>이 이메일은 포트폴리오 웹사이트의 연락처 폼을 통해 전송되었습니다.</p>
          </div>
        </div>
      `,
      text: `
새로운 포트폴리오 문의가 도착했습니다

문의자 정보:
- 이름: ${name}
- 이메일: ${email}
- 제목: ${subject}

메시지 내용:
${message}

문의 시간: ${new Date().toLocaleString('ko-KR')}
IP 주소: ${request.headers.get('x-forwarded-for') || '알 수 없음'}

이 이메일은 포트폴리오 웹사이트의 연락처 폼을 통해 전송되었습니다.
      `,
    };

    // 이메일 전송
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: '메시지가 성공적으로 전송되었습니다.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('이메일 전송 오류:', error);
    return NextResponse.json(
      { error: '메시지 전송 중 오류가 발생했습니다. 다시 시도해주세요.' },
      { status: 500 }
    );
  }
}
