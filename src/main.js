// src/main.js

const app = document.querySelector("#app");

if (app) {
  app.innerHTML = `
    <main style="font-family: system-ui, sans-serif; padding: 2rem;">
      <h1>사이다반 기여 로그</h1>
      <p>지금은 초기 테스트 화면입니다.</p>
    </main>
  `;
} else {
  console.error("#app 엘리먼트를 찾을 수 없습니다.");
}

