# 자바 프로젝트 생성하기


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