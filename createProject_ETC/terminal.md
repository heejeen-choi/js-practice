# 터미널 명령어 정리


### ls (list)
- 현재 경로에 있는 파일/폴더 확인하기

***
### pwd (print working directory)
- 현재 어떤 경로의 디렉토리에 있는지 출력해줌

***
### cd (change directory)
- 경로 이동

`~ cd desktop` : desktop 폴더로 이동<br>
`pwd` : desktop으로 경로 이동됐고 경로수정 pwd<br>
`/User/jass/desktop` : desktop으로 경로가 수정됐다!<br>
`cd` : Desktop 폴더 밖으로 이동하는 cd<br>
`~ pwd` : pwd 하면? <br>
`/Uers/jass` : 이동된 경로 보여준다! <br>

***
### mkdir (make directory)
- 새로운 폴더 생성

***
### rmdir (remove directory)
- 폴더 삭제 (내부에 파일 없는 빈 폴더)
- `Directory not empty`

***
### rm -r (remove -recursive)
- 내부 파일 존재하는 폴더 삭제

`rmdir myBoard` : myBoard 폴더 삭제 시도 <br>
`Directory not empty` : 파일 있어서 안지워줌 <br>
`rm -r myBoard` : 명령어를 바꾸자 rm -r <br>
`ls` : ls로 현재 경로 안 폴더 확인해보면 지워져 있다
***
### touch 
- 파일 생성하기

`touch test.txt`: touch 뒤에 파일명 적기<br>
`ls`: ls로 파일이 잘 생성 되었는지 확인한다<br>
***
### clear
- 터미널 창 초기화