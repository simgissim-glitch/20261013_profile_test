# 개인 프로필 웹사이트

프로젝트 폴더에서 아래 명령을 실행한 뒤 http://localhost:3000 에 접속하세요. Node.js 기본 모듈만 사용하므로 `npm install`이나 별도 빌드는 필요하지 않습니다.

```sh
npm start
```

`npm run dev`도 같은 서버를 실행합니다. 파일 수정 후 브라우저를 새로고침하면 반영됩니다. 종료하려면 터미널에서 `Ctrl+C`를 누르세요.

포트를 바꾸려면 PowerShell에서 다음과 같이 실행하세요.

```powershell
$env:PORT = '3001'
npm start
```

## 폴더 구조

실제 웹사이트 파일은 `dist/`에 있으며, 별도 빌드 없이 이 폴더를 직접 수정하고 배포합니다. 아래 파일 설명은 `dist/` 기준입니다.

- `index.html`: 프로필, 소개, 프로젝트, 연락처
- `styles.css`: 원본 Stitch 디자인에서 생성한 CSS
- `custom.css`: 반응형 레이아웃, 모바일 메뉴, 접근성 보완
- `script.js`: 메뉴 상태, 이메일 복사, 메일 작성창 연결
- `resume.txt`: 다운로드할 수 있는 예시 이력서
- 루트의 `stitch-export/`: 제공받은 원본 디자인 (보관용)
- 루트의 `server.cjs`: 로컬 전용 Node.js 정적 서버
- 루트의 `package.json`: 실행 명령 (외부 의존성 없음)
- 루트의 `vercel.json`: Vercel 정적 배포 설정
- 루트의 `tailwind-input.css`, `tailwind.config.cjs`: 선택적인 CSS 재생성용 소스 및 설정

## Vercel 배포

프로젝트 전체를 Git 저장소에 올린 뒤 Vercel에서 가져오세요. Root Directory는 `package.json`이 있는 프로젝트 루트로 지정합니다. `vercel.json`에 Framework Preset `Other` (`null`), Output Directory `dist`, 설치 및 빌드 명령 생략 설정이 포함되어 있습니다. Vercel에는 `dist/`의 정적 파일만 배포되며 로컬 서버를 실행할 필요가 없습니다. `dist/`도 Git에 포함하세요.

설정 참고: https://vercel.com/docs/project-configuration

## 내용 수정

이름, 사진, 학력, 경력, 성과, 이메일과 외부 링크는 모두 예시입니다. `index.html`에서 실제 내용으로 교체해 주세요. 프로젝트의 `.project-link`에 실제 프로젝트 URL을 지정하면 카드 전체가 해당 주소로 연결됩니다. Code/Repo 링크도 각 저장소 주소로 변경할 수 있습니다.

이메일 주소를 변경할 때는 `#emailText`의 표시 내용과 `mailto:` 주소를 함께 수정하세요. 문의 양식은 입력 내용을 기본 메일 앱으로 전달하며 웹사이트에서 직접 발송하지 않습니다. 사용 기기에 메일 앱이 설정되어 있어야 합니다.

폰트, 아이콘, 원본 사진은 외부 Google 리소스이므로 인터넷 연결이 필요합니다. CSS와 동작 스크립트는 로컬 파일입니다.

HTML에 새로운 Tailwind 클래스를 추가했다면 다음 명령으로 CSS를 다시 생성할 수 있습니다. 일반적인 사용에는 필요하지 않습니다.

```sh
npx --yes tailwindcss@3.4.17 -i tailwind-input.css -o dist/styles.css --minify
```
