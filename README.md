# 개인 폼 페이지 (Feat: Google Form Page)

### 프로젝트 목적

1. 신청서 작성 page 제작
2. 신청한 사람 관리

---

### 제공하는 기능

- 신청서 제작
- 신청서 작성
- 신청서 관리
- 신청자 관리

---

### 프로젝트 구조

```
Create React App Boilerplate for Typescript
├─ 📁config
│  ├─ 📁jest
│  │  ├─ 📄babelTransform.js
│  │  ├─ 📄cssTransform.js
│  │  └─ 📄fileTransform.js
│  ├─ 📁components
│  │  └─ 📁persistentCache
│  │     └─ 📁persistentCache
│  │        └─ 📄createEnvironmentHash.js
│  ├─ 📄env.js
│  ├─ 📄getHttpsConfig.js
│  ├─ 📄modules.js
│  ├─ 📄paths.js
│  ├─ 📄webpack.config.js
│  └─ 📄webpackDevServer.config.js
├─ 📁public
│  ├─ 📄index.css
│  ├─ 📄index.html
│  ├─ 📄logo.svg
│  ├─ 📄manifest.json
│  └─ 📄robots.txt
├─ 📁scripts
│  ├─ 📄build.js
│  ├─ 📄start.js
│  └─ 📄test.js
├─ 📁src
│  ├─ 📁components
│  ├─ 📁middlewares
│  ├─ 📁utils
│  ├─ 📁screens
│  ├─ 📁scss
│  ├─ 📄App.tsx
│  ├─ 📄global.d.ts
│  └─ 📄index.tsx
├─ 📄.eslintrc.json
├─ 📄.gitignore
├─ 📄.gitmessage.txt
├─ 📄.prettierrc
├─ 📄package-lock.json
├─ 📄package.json
├─ 📄README.md
├─ 📄Todo.txt
└─ 📄tsconfig.json
```

---

### 파일 설명

- 📁config: CRA의 기초 구성 파일을 담고 있는 폴더 (scss 설정을 위함)
- 📁scripts: CRA의 동작 명령어를 담고 있는 폴더
- 📄global.d.ts: 타입스크립트가 지원하지 않는 타입을 추가하는 프로젝트 한정 글로벌 파일
- 📄.eslintrc.json: eslint 설정 파일
- 📄.gitmessage.txt: git commit template 파일
- 📄.prettierrc: 프리티어 설정 파일
- 📄Todo.txt: 현재 프로젝트의 Todo List
