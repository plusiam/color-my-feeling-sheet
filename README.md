# Color My Feeling Sheet

감정을 색상으로 표현하고 기록하는 인터랙티브 웹 애플리케이션입니다.

## 기술 스택

- **Vite** - 빌드 도구
- **React** - UI 라이브러리
- **TypeScript** - 타입 안정성
- **shadcn/ui** - UI 컴포넌트
- **Tailwind CSS** - 스타일링

## 시작하기

### 설치

```bash
# 의존성 설치
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 http://localhost:8080 으로 접속하세요.

### 프로덕션 빌드

```bash
npm run build
```

빌드된 파일은 `dist` 폴더에 생성됩니다.

## GitHub Pages 배포

이 프로젝트는 GitHub Pages에 자동으로 배포될 수 있습니다.

### 수동 배포

```bash
# 빌드
npm run build

# dist 폴더를 gh-pages 브랜치에 배포
npm install -g gh-pages
gh-pages -d dist
```

### GitHub Actions를 통한 자동 배포

`.github/workflows/deploy.yml` 파일이 포함되어 있어 main 브랜치에 푸시할 때마다 자동으로 배포됩니다.

배포 후 `https://[username].github.io/color-my-feeling-sheet/` 에서 확인할 수 있습니다.

## 프로젝트 구조

```
color-my-feeling-sheet/
├── src/
│   ├── components/    # React 컴포넌트
│   ├── hooks/         # 커스텀 훅
│   ├── lib/           # 유틸리티 함수
│   ├── pages/         # 페이지 컴포넌트
│   └── App.tsx        # 메인 앱 컴포넌트
├── public/            # 정적 파일
└── ...
```

## 라이선스

MIT License
