# 라꾸라꾸<img src="https://user-images.githubusercontent.com/88028826/181926304-38d14f81-33e6-4107-94f4-008eab7b669a.png" align=left width=100>

<b>공유 먼슬리 다이어리, 라꾸라꾸</b>🌙
<br>
<br>

>" 나만의 다이어리를 작성하여 여러분만의 라이프 스타일을 꾸려보세요! ✨ ✨


<br>

### 목차

1. [✏️ 기획 및 설계](#-기획-및-설계)
2. [📍 서비스 소개](#-서비스-소개)
3. [⏰ 개발 일정](#-개발-일정)
4. [👨‍👩‍👦‍👦 팀원 소개](#-팀원-소개)
5. [🛠️ 기술스택 및 라이브러리](#-기술스택-및-라이브러리) 
6. [🔨 개발](#-개발) 
7. [✨ 주요기능 소개](#-주요기능-소개)
8. [📲 와이어프레임](#-와이어프레임)

<br>

# ✏️ 기획 및 설계

- [🌞 피그마](https://www.figma.com/file/DCbbUwBsBpSKjAvcyGHUCj/GUI-Design?node-id=0%3A1)
- [📝노션](https://www.notion.so/efub/72815aacba754c38822ebd291044c9be)
- [✍코딩 컨벤션](https://www.notion.so/efub/091d29f13a4c456d8671fd2850d6a3a6)

<br>

# 📍 서비스 소개

#### " 나만의 다이어리를 작성하여 여러분만의 라이프 스타일을 꾸려보세요! ✨" 

'라꾸라꾸'는 웹 기반 공유 다이어리 서비스로, 쉽고 간단하게 다이어리를 작성하여 나만의 라이프스타일을 꾸미고 이를 공유하고자 하는 유저들을 위해 제작되었습니다. 웹 기반 서비스이기 때문에 간편하게 휴대하고 걱정없이 저장할 수 있으며, 나의 일기를 한 눈에 확인하고 친구와 공유하며 댓글로 소통할 수 있습니다. 또한 기본 제공되는 300여종의 스티커 및 템플릿를 활용하여 간단하게 다이어리를 꾸밀 수 있으며 원하는 사진을 스티커로 만들어 나만의 다이어리를 만들 수 있습니다.

본 프로젝트는 이화여대 커리어 클럽 웹개발 동아리 EFUB의 여름 프로젝트인 🏖SWS(Summer Web Surf)의 일환으로 진행되었음을 밝힙니다.


 <img src="https://user-images.githubusercontent.com/86418674/207007558-bfd65741-c3ce-4249-9c3e-c918e582d611.gif" align="right"  width="500px" />
 <img src=https://user-images.githubusercontent.com/86418674/207008478-57ec8ba5-77a4-492b-b917-1cfab83752fc.gif align="left" width="500px"/>
<br>

# ⏰ 개발 일정     

 (2022.03.15 ~ 2022.07.03) 

- 기획 및 디자인 : 2022.03.15 ~ 2022.07.03    
- 개발 : 2022.07.04 ~ 2022.08.06

<br>

# 👨‍👨‍👨‍👨‍ 팀원 소개

<table>
  <tr align="center">
    <td><a href="https://github.com/flowersayo">김서연</a></td>
    <td><a href="https://github.com/rajoo1120">박희진</a></td>
     <td><a href="https://github.com/paya17">신유진</a></td>
     <td><a href="https://github.com/Kyoungminn">안민경</a></td>
  </tr>
  <tr align="center">
    <td><img src="https://github.com/flowersayo.png" width="200"></td>
    <td><img src="https://github.com/rajoo1120.png" width="200"></td>
     <td><img src="https://github.com/paya17.png" width="200"></td>
      <td><img src="https://github.com/Kyoungminn.png" width="200"></td>
  </tr>
  <tr align="center">
    <td> 알림창 및 다이어리 꾸미기 (스티커, 사진) </td>
    <td> 유저 회원가입과 로그인 / 댓글 폼과 댓글 목록 </td>
    <td> 프로필 / 설정 / 다이어리 꾸미기 (속지,텍스트) </td>
    <td> 먼슬리 / 친구 목록 및 추가 </td>
  </tr>
</table>

<br>

# 🔨 개발 

## 실행 

```
git clone 
npm install
npm start
```


## 🗃 폴더 구조
```
├── 📁public 
├── 📁src
│   ├── 📁assets 
│   ├── 📁components 
│   │   ├── 📁common
│   │   ├── 📁LandingPage
│   │   ├── 📁LoginPage
│   │   ├── 📁SignupPage
│   │   ├── 📁MainPage
│   │   ├── 📁MonthlyPage
│   │   ├── 📁SideBar
│   │   ├── 📁SocialPage
│   │   ├── 📁DiaryPage
│   │   └── 📄index.js
│   ├── 📁fonts
│   ├── 📁styles
│   ├── 📄App.css
│   ├── 📄App.js
│   ├── 📄index.css
│   └── 📄index.js
└── 📜etc (setting files)
```

## 라우팅 구조


- 랜딩페이지 `/`
- 로그인 `/login`
- 회원가입 `/register`
- 먼슬리페이지 `/main/{nickname}`
- 설정 `/main/{nickname}/setting`
- 친구목록 `/main/{nickname}/social`
- 다이어리 내부 -> `/main/{nickname}/diary/{date}`

<br>

# 📚 기술스택 및 라이브러리

<div align=center> 
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
  <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white">
  <img src="https://img.shields.io/badge/Konva-0D83CD?style=for-the-badge&logo=Konva&logoColor=white">
  <br>
  
  <img src="https://img.shields.io/badge/StyledComponents-DB7093?style=for-the-badge&logo=StyledComponents&logoColor=white"> 
  <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white">
  <br>
  
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <br>
</div>
<br />

```
"dependencies": {
    "@emotion/react": "^11.9.3",
    "@emotion/styled": "^11.9.3",
    "@mui/material": "^5.9.1",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "date-fns": "^2.28.0",
    "emoji-picker-react": "^3.5.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-konva": "^18.2.1",
    "react-redux": "^8.0.2",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "react-use": "^17.4.0",
    "redux": "^4.2.0",
    "redux-devtools-extension": "^2.13.9",
    "styled-components": "^5.3.5",
    "use-image": "^1.0.12",
    "web-vitals": "^2.1.4"
  }
```


<br>

# ✨ 주요기능 소개

#### 1️⃣`먼슬리 달력`
라꾸라꾸의 기본 화면입니다. 날짜를 클릭하고, 그 날의 다이어리를 자유롭게 꾸며보세요!
<div align="center">

  <img src="https://user-images.githubusercontent.com/88028826/181934392-afa4a116-0bba-45cb-8c5c-86a8bef48f83.png" width=500>
</div>
1. 먼슬리 달력: 날짜를 클릭하여 다이어리를 생성할 수 있고, 이미 생성된 다이어리를 조회할 수 있습니다. <br>
2. 프로필: 프로필 수정 버튼을 클릭하여 원하는 프로필 이미지와 자기소개를 설정할 수 있습니다. <br>
3. 알림창: 좋아요, 댓글, 대댓글 등의 알림을 확인할 수 있습니다.


#### 2️⃣`다이어리 꾸미기`
자신의 취향에 따라 속지,텍스트,사진,스티커를 적용하여 다이어리를 자유롭게 꾸며보세요!
<div align="center">
  <img src="https://user-images.githubusercontent.com/88028826/181933985-f27309cd-ddba-4197-8a1d-00c1153b043d.png" width=330>
  <img src="https://user-images.githubusercontent.com/88028826/181933997-3116014c-2167-4b65-bdda-58a5cb23b8c0.png" width=330>
  <img src="https://user-images.githubusercontent.com/88028826/181933911-3cbcff82-5b5e-459f-b361-0b80b22dbaab.png" width=330>

</div>
1. 상단 탭: 다이어리 꾸미기를 완료한 후에 오른쪽의 디스크 버튼을 누르면 다이어리를 저장할 수 있습니다. <br>
2. 하단 탭: 속지,텍스트,사진,스티커 중 적용하기를 원하는 요소를 클릭하여 캔버스에 생성히여 자신의 취향에 따라 적용할 수 있습니다. <br>
3. 캔버스: 속지,텍스트,사진,스티커를 캔버스에 원하는 디자인,회전,크기로 자유롭게 생성할 수 있습니다.

#### 3️⃣`친구와 공유하기`
UID를 통해 다이어리를 공유하고 싶은 친구를 추가해 친구의 다이어리에 놀러갈 수 있습니다.<br />
친구와 서로의 다이어리에 좋아요를 누르고 댓글을 달며 자유롭게 공유해보세요!
<div align="center">
  <img src="https://user-images.githubusercontent.com/88028826/181933956-6fee44d5-7e5f-4975-b7ce-2b57e960cdf2.png" width=500>
  <img src="https://user-images.githubusercontent.com/88028826/181933852-968f18b8-a221-470a-bee8-c3344337c1cb.png" width=500>
</div>
1. 친구 목록: 친구를 맺고, 끊을 수 있으며 친구의 다이어리로 이동할 수 있습니다. <br>
2. 친구 추가: 친구의 UID를 검색하여 친구를 추가할 수 있습니다. <br>
3. 좋아요, 댓글, 대댓글: 친구의 다이어리에 좋아요를 누르고, 댓글과 대댓글을 달며 친구와 다이어리를 통해 소통할 수 있습니다.
<br />


# 📲 와이어프레임

![image](https://user-images.githubusercontent.com/86418674/182038583-7a826f9b-2ac6-4e68-bb6f-80bcfc981e95.png)
