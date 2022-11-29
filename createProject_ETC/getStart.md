# javaScript 프로젝트 생성하기


1. `mkdir`폴더생성
2. `cd 만든폴더명`
3. `npm init`
4. `npm install --save-dev @babel/core @babel/cli`
5. `pakage.json` 파일에 `devDependencies` 항목 추가
```
"devDependencies": {
    "@babel/cli": "^7.19.3",
    "@babel/core": "^7.20.2"
}
```
6. `npm install parcel-bundler`
7. `pakage.json` 파일 수정
```
"scripts": {
    "start": "parcel index.html --open",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

# React 프로젝트 생성하기 (1)


1. terminal에 mkdir로 폴더생성후, npm create-react-app 프로젝트명
2. 인텔리제이로 해당 프로젝트 열기
3. node_modules : 라이브러리 모듬 폴더
   public : 이미지파일과 같은 static 파일 보관함. 빌드 시에 압축되지 않음.
   src : 소스코드 보관함
   src폴더 안에 있는 App.js : 메인페이지에 들어갈 HTML 작성하는곳
   public폴더 안에 index.html : 메인페이지(코드 상으로는 아무것도 없다. 왜냐하면 App.js에 있는 것들을 index.js에 의해 index.html 안에서 보여주기 때문.)
   package.json : 설치한 라이브러리 목록
4. 인텔리제이 터미널에서 npm start
5. 브라우저 창이 열리고 App.js 에서 작업


# React 프로젝트 생성하기 (2)

1. terminal에 mkdir로 폴더생성 후, npm의 패키지 실행도구인 npx를 사용해서 
2. 생성한 폴더(프로젝트) 경로로 들어가서
3. npx create-react-app 프로젝트명
4. yarn create react-app 프로젝트명
5. 인텔리제이 해당프로젝트 오픈
6. 인텔리제이 터미널에서 npm start
7. yarn start


# React 프로젝트 생성하기 (3)

1. terminal
2. npx create-react-app 프로젝트
3. 인텔리제이로 프로젝트 오픈
4. 인텔리 터미널에서
5. npm start


# React 프로젝트 생성하기 (4)
- create-react-app 을 typescript 버전으로 설치하기
- eslint & prettier typescript 버전으로 설치하기
- typeScript를 사용하는 create-react-app을 어떻게 생성?
- typeScript로 만든 create-react-app을 eslint와 prettier 설정은 어떻게?
- typeScript로 만든 create-react-app은 github와 pages에 어떻게 배포?

1. TypeScript create-react-app 생성
   - 참고 : npx 와 npm의 차이
     - npm 자체로 단순히 패키지를 실행하지 않는다. npm으로 패키지를 실행하려면 package.json에서 해당 패키지를 지정해야함. package.json파일을 편집하고 해당 script 섹션에서 해당 패키지 추가 하고 npm run-script 또는 npm run 사용하여 스크립트를 실행.
     - npx는 이전에 설치되지 않은 패키지를 실행할 수 있다. npx create-react-app 프로젝트명 을 실행하면 명령이 실행 된 경로 내에 react 앱 상용구를 생성하고 사용하려할떄마다 업그레이트할 필요없이 항상 최신 버전의 생성기 또는 빌드 사용됨. npx는 node.js 패키지를 실행하는 도구이다.
   - (1) terminal 창에서 프로젝트 생성할 디렉토리경로가 지정된 상태에서 : npx create-react-app 프로젝트명 -template typescript
     - 명령어 실행하고 설치가 완료되면, added n packages in xm 어쩌구 몇개 패키지 설치 됐다고 npm fund 실행 어쩌고 removed 한개 패키지 어쩌구 하면서
       Success! 생성되었다 니 프로젝트가 어디 경로에  밑에 이어서 npm start, npm run build, npm run eject, npm test, cd 프로젝트명 npm start 나오고 마지막줄에
       Happy hacking!
   - (2) 인텔리제이로 해당 프로젝트 열어서 인텔리제이 터미널창에 : npm i --save react react-dom typescript 하면 또 설치가 됨.
   - (3) npm i --save-dev @types/react @types/react-dom @types/node 이거 또 깔아주는데 (확인)
   - 추가적으로 typescript를 사용하면서 필요한 라이브러리들을 설치해준다.
   - (4) 이하 코드를 tsconfig.json에 설정해줘야하는데 tsconfig가 없을거임 . yarn start 해주면 자동으로 설치해준다는데 설치가 안되길래 tsc --init 해줬는데 에러났다
         그래서 yarn add -D typescript 하고 인텔리제이 재시작했는데 yarn.lock 생기고 tsconfig 안생기는데 코딩애플 강사가 tsconfig.json 을 수동으로 당당하게 만들라고 포스팅한게 있었음.(루트폴더에)
     - (이거확인좀) 그리고 아래 제이슨파일 복붙. 
     - tsconfig.json 파일은 맨 처음 프로젝트를 yarn start 명령어로 시작해보면 tsconfig.json 파일이 없다는 것을 알아채고 자동으로 만들어낸다.
     - default 상태에서 "baseUrl":"./src" 코드만 추가하면, ./src를 절대경로로 갖겠다는 의미이다. 나중에 프로젝트가 커지면 경로지옥에 빠질수도 있기때문에 초기에 설정.그리고 아래 코드를 추가한다.
     - 1. target 은 typeScript file을 어떤 버전의 자바스크립트로 바꿔줄지 정하는 부분. es6로 정하면 es6버전 자바스크립트로 컴파일(변환)된다. 신버전원하면 esnext 해도 됨.
     - 2. module 은 자바스크립트 파일 간의 import 문법을 구현할 때 어던 문법을 쓸지 정하는 곳.
     - 3. commonjs 는 require 문법
     - 4. noImplicitAny 는 any 라는 타입이 의도치 않게 발생할 경우 에러를 띄워주는 설정
     - 5. strictNullChecks 는 null, undefined 타입에 이상한 조작을 하면 에러를 띄우는 설정 (4,5번은 일단 패스 ?)

```
{
  "compilerOptions": {
    "target": "es6",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "baseUrl": "./src",
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "src"
  ],
}
```
2. eslint & prettier 설정
   - eslint는 javaScript 코드에서 발견된 문제패턴을 식별하기 위한 정적코드분석도구. 코드의 질을 높이기 위한 도구
   - (vsCode에서는 extension 설치하는 곳에서 eslint 설치)
   - npm install -D eslint
   - npx eslint --init 이거 실행하면, 질문들이 시작됨.
   - Ok to proceed? (y) => y하고 엔터
   - ```
     How would you like to use ESLint?
        : Eslint를 어디에 사용할거니? > To check syntax and find problems
     What type of modules does your project use?
        : 니 프로젝트에서 어떤 타입의 모듈을 사용할건데? > JavaScript modules (import/export)
     Which framework does your project use?
        : 프레임워크는 뭐 쓸래? > React
     Does your project use TypeScript? (y/N)
        : TS 사용하실? > yes
     Where does your code run? (Press space to select, a to toggle all, i to > invert selection)
        : 코드 어디서 실행시킬거야? > Node
     What format do you want your config file to be in? (Use arrow keys)
        : 파일 포맷 어떤걸로 할거? > JSON
     The config that you've selected requires the following dependencies:
     @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
     Would you like to install them now with npm? (Y/n)
        : 지금까지 설정한 내용을 바탕으로 npm으로 설치할거얌? > yes
     Which package manager do you want to use? > yarn
     ```
   - 인텔리제이 사용시 auto fix 설정하기 
     - : Preferences > 검색에 eslint > Language 어쩌구 밑에 
     - (1)두번째 select Automatic ESLint configuration 체크하고, 
     - (2)Run for files: {**/*,*}.{js,ts,jsx,tsx,html,vue}, 
     - (3)Run eslint 어쩌고에 체크하기.
   - // 아래 설치는 다시 확인.(할필요 있는지)
   - npm i -D eslint-config-airbnb-base  //라액트관련규칙x
   - npm i -D eslint-config-airbnb    //리액트관련규칙o
   - npm i -D eslint-plugin-react eslint-plugin-react-hooks
   - npm i -D eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-prettier eslint-config-prettier
   - ```
     eslint-plugin-import : ES6의 import, export 구문을 지원. 필수플러그인
     eslint-plugin-react : React 규칙이 들어있는 플러그인
     eslint-plugin-react-hooks : React Hooks 규칙이 들어있는 플러그인
     eslint-plugin-jsx-a11y : JSX요소의 접근성 규칙에 대한 정적검사 플러그인
     ```
   - eslintrc.json 파일에 코드 넣기 (이거이상함 확인.)
```
module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
        'airbnb', // or airbnb-base
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended', // 설치 한경우
        'plugin:import/errors', // 설치한 경우
        'plugin:import/warnings', // 설치한 경우
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    rules: {
        'linebreak-style': 0,
        'import/prefer-default-export': 0,
        'import/extensions': 0,
        'no-use-before-define': 0,
        'import/no-unresolved': 0,
        'react/react-in-jsx-scope': 0,
        'import/no-extraneous-dependencies': 0, // 테스트 또는 개발환경을 구성하는 파일에서는 devDependency 사용을 허용
        'no-shadow': 0,
        'react/prop-types': 0,
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};
```
  - estends는 ESLint에 적용할 규칙들을 정의해주는 곳이다.
  - 나중에 정의된(밑에있는) 옵션일수록 높은 우선순위를 가진다
  - 그리고 eslint는 아주 엄격한 규칙을 요구하는데 그런 규칙을 무시하고 싶을때가 있다면 rules 란에 '해당규칙': 0 의 옵션을 주면 그 규칙을 무시하겠다는 뜻이 된다.
3. prettier는 code formatter
   - 코드를 정리할때 일일이 저장할 필요 없이 자동으로 코드를 일정형식으로 맞춰줌
   - npm install -D prettier
   - 프로젝트 루트 폴더에 .prettierrc파일 생성 후 코드 넣기
```
{
  "singleQuote": true, 
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80,
  "arrowParens": "always",
  "orderedImports": true,
  "bracketSpacing": true,
  "jsxBracketSameLine": false
}
```
4. package.json 에 정보입력
```

```
4. settings.json 파일수정
   - prettier는 우선 전역으로 설정해주는 setting.json파일을 먼저 보고, 프로젝트 안에 .prettierrc 파일이 있다면 그 파일을 뒤에 참조하는 방식으로 작동한다.
   - 전역으로 설정해줄 설정은 아래와 같다
```
{ 
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "window.zoomLevel": -1,
  "editor.formatOnSave": true,
  "[javascript]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "[javascriptreact]":{ "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "[typescript]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "[typescriptreact]": { "editor.defaultFormatter": "esbenp.prettier-vscode" }
}
```
   - 위에서, window.zoomLevel은 IDE의 확대사이즈를 의미.
5. TypeScript creat-react-app을 github pages에 배포하기
   - npm install -save gh-pages
   - 위 명령어 실행 후 가끔 @type/react가 없어질때가 있는데 다시 설치해준다.
   - npm install -save @type/react
   - package.json에서 scripts에 있는 deploy 추가
```
"scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```
6. - yarn start
   - yarn build
   - yarn test
   - yarn eject
   - cd 경로
   - yarn start
   - Happy hacking!