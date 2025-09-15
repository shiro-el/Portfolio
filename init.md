# 프로젝트 개요
- **포트폴리오 웹사이트**: Jae Lee의 개인 포트폴리오 웹사이트
- **핵심 목적**: 개발자로서의 경험, 프로젝트, 스킬을 보여주는 개인 브랜딩 사이트
- **주요 기능**: 
  - 소개 및 자기소개 섹션
  - 프로젝트 포트폴리오 갤러리
  - 연락처 및 소셜 미디어 링크
  - 다크/라이트 테마 지원
  - 반응형 디자인

# Tech Stack
- **프레임워크**: Next.js 15.5.3 (App Router)
- **언어**: TypeScript 5
- **스타일링**: Tailwind CSS 4
- **UI 컴포넌트**: Radix UI + shadcn/ui
- **애니메이션**: Framer Motion, React Spring
- **상태 관리**: Zustand
- **폼 관리**: React Hook Form + Zod
- **이메일**: Nodemailer
- **폰트**: Geist Sans & Geist Mono
- **아이콘**: Lucide React

# Project Structure
```
src/
├── app/                    # Next.js App Router
│   ├── (routes)/          # 라우트 그룹
│   │   ├── about/         # 소개 페이지
│   │   ├── contact/       # 연락처 페이지
│   │   └── projects/      # 프로젝트 페이지
│   ├── api/               # API 라우트
│   └── globals.css        # 전역 스타일
├── components/            # React 컴포넌트
│   ├── common/           # 공통 컴포넌트
│   ├── layout/           # 레이아웃 컴포넌트
│   ├── sections/         # 페이지 섹션 컴포넌트
│   └── ui/               # UI 컴포넌트 (shadcn/ui)
├── lib/                  # 유틸리티 및 설정
│   ├── data/             # 정적 데이터
│   ├── hooks/            # 커스텀 훅
│   └── utils.ts          # 유틸리티 함수
└── types/                # TypeScript 타입 정의
```

# Commands
- **개발 서버 실행**: `npm run dev` - Turbopack을 사용한 빠른 개발 서버
- **프로덕션 빌드**: `npm run build` - Turbopack을 사용한 최적화된 빌드
- **프로덕션 서버 실행**: `npm start` - 빌드된 앱 실행
- **린팅**: `npm run lint` - ESLint를 사용한 코드 품질 검사

# Code Style & 규칙
- **컴포넌트**: 함수형 컴포넌트만 사용, React 19의 최신 기능 활용
- **타입스크립트**: strict 모드 활성화, 모든 컴포넌트와 함수에 타입 정의 필수
- **스타일링**: Tailwind CSS 클래스 사용, CSS-in-JS 금지
- **상태 관리**: Zustand를 사용한 전역 상태 관리
- **폼 처리**: React Hook Form + Zod 스키마 검증 사용
- **애니메이션**: Framer Motion을 사용한 부드러운 애니메이션
- **접근성**: Radix UI 컴포넌트 사용으로 접근성 보장
- **네이밍**: 
  - 컴포넌트: PascalCase
  - 파일명: kebab-case 또는 PascalCase
  - 변수/함수: camelCase
- **import 순서**: 
  1. React/Next.js 관련
  2. 외부 라이브러리
  3. 내부 컴포넌트/유틸리티
  4. 타입 정의

# Do Not
- **절대 하지 말 것**:
  - `src/app` 디렉터리 외부에 페이지 컴포넌트 생성 금지
  - `public` 폴더의 기본 Next.js 파일들 수정 금지
  - `node_modules` 직접 수정 금지
  - `.next` 폴더 커밋 금지
  - 하드코딩된 스타일 (인라인 스타일) 사용 금지
  - `any` 타입 사용 금지 (타입 안전성 보장)
  - console.log 프로덕션 코드에 남기기 금지

# 참고/특이사항
- **Turbopack 사용**: Next.js의 새로운 번들러로 빠른 개발 경험 제공
- **shadcn/ui**: Radix UI 기반의 재사용 가능한 UI 컴포넌트 라이브러리
- **App Router**: Next.js 13+의 새로운 라우팅 시스템 사용
- **다크 모드**: 시스템 설정에 따른 자동 테마 전환 지원
- **SEO 최적화**: 메타데이터와 Open Graph 태그 설정
- **성능 최적화**: 
  - 이미지 최적화 (next/image)
  - 폰트 최적화 (next/font)
  - 코드 스플리팅 자동 적용
- **이메일 연락처**: Nodemailer를 사용한 연락처 폼 처리
- **반응형 디자인**: 모바일 우선 접근 방식
- **접근성**: WCAG 가이드라인 준수
