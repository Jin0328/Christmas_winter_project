# 🎅 산타에게 받는 나만의 편지 앱

## 📌 소개
"산타에게 받는 나만의 편지 앱"은 심리테스트 형식으로 질문을 받고, 결과에 따라 선물을 결정해주는 React Native 앱입니다. 또한, Upstage Solar AI API를 활용하여 산타가 직접 작성한 편지를 받을 수 있습니다!

---

## 🛠 주요 기능
✔ **심리테스트 진행** - 6개의 질문을 통해 점수 계산 후 선물 결정 🎁  
✔ **산타의 맞춤 편지** - AI가 제공하는 따뜻한 위로의 편지 💌  
✔ **SNS 공유 기능** - 자신이 받은 편지와 선물을 친구들에게 공유 가능 📢  
✔ **React Native 기반** - 모바일 친화적인 UI/UX 🎨  

---

## 📂 프로젝트 구조
```
📦 Christmas_Letter_App
 ┣ 📂 backend        # 백엔드 서버 (FastAPI 기반)
 ┣ 📂 frontend       # 프론트엔드 (React Native & Expo)
 ┣ 📄 .env.example   # 환경변수 예시 파일
 ┣ 📄 README.md      # 프로젝트 설명
 ┗ ...
```

---

## 🚀 설치 & 실행 방법
### 1️⃣ **백엔드 실행 (FastAPI)**
```sh
pip install -r requirements.txt  # 의존성 설치
uvicorn main:app --host 0.0.0.0 --port 5000  # 서버 실행
```

### 2️⃣ **프론트엔드 실행 (React Native & Expo)**
```sh
npm install  # 패키지 설치
npx expo start  # 앱 실행
```

---

## 🔧 환경 설정
### 1️⃣ **.env 파일 설정**
`.env` 파일을 생성하고, API 키 및 필요한 설정 값을 입력하세요.
```
API_KEY=your_api_key_here
```

### 2️⃣ **API 호출 IP 변경**
`Question 5` 컴포넌트에서 API 호출 부분의 IP 주소를 **서버 환경에 맞게 변경**해야 합니다.
```js
const API_URL = "http://192.168.xxx.xxx:5000/api/santa-reply/";
```

---

## 🎥 데모 영상
👉 [**데모 보기**](https://www.youtube.com/watch?v=uFB6CdDsNzk)  

---

## 📜 기술 스택
- **프론트엔드**: React Native, Expo
- **백엔드**: FastAPI, Uvicorn
- **AI 서비스**: Upstage Solar AI API

---


## 📌 참고 사항
- 백엔드 실행 전에 **Python이 설치되어 있어야 합니다.**
- `.env` 파일에 API 키를 입력하지 않으면 AI 편지가 생성되지 않습니다.
- **IP 주소를 변경하지 않으면 백엔드와 정상적으로 연결되지 않을 수 있습니다.**

---

## 💡 문의
이 프로젝트에 대해 궁금한 점이 있다면 chloe02.han@ewhain.net으로 자유롭게 문의하세요! 🎄✨

