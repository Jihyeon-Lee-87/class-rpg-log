// src/main.js
import { auth, googleProvider } from "./firebaseConfig";
import { signInWithPopup, signOut } from "firebase/auth";

const app = document.querySelector("#app");

if (!app) {
  console.error("#app 엘리먼트를 찾을 수 없습니다.");
} else {
  app.innerHTML = `
    <main style="font-family: system-ui, sans-serif; padding: 2rem; max-width: 480px; margin: 0 auto;">
      <h1>사이다반 기여 로그</h1>
      <p>Firebase Google 로그인을 테스트하는 화면입니다.</p>

      <section style="margin-top: 1.5rem;">
        <button id="googleLoginBtn" style="padding: 0.5rem 1rem; font-size: 1rem;">
          Google로 로그인
        </button>
        <button id="googleLogoutBtn" style="padding: 0.5rem 1rem; font-size: 1rem; margin-left: 0.5rem; display:none;">
          로그아웃
        </button>
      </section>

      <section style="margin-top: 1rem;">
        <div id="loginResult">아직 로그인하지 않았습니다.</div>
      </section>
    </main>
  `;
}

const loginBtn = document.getElementById("googleLoginBtn");
const logoutBtn = document.getElementById("googleLogoutBtn");
const resultDiv = document.getElementById("loginResult");

if (loginBtn && logoutBtn && resultDiv) {
  // 로그인
  loginBtn.addEventListener("click", async () => {
    try {
      loginBtn.disabled = true;
      loginBtn.textContent = "로그인 중...";

      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      console.log("로그인 성공:", user);
      resultDiv.textContent = `${user.displayName}님, 환영합니다!`;
      loginBtn.style.display = "none";
      logoutBtn.style.display = "inline-block";
    } catch (error) {
      console.error("로그인 에러:", error);
      resultDiv.textContent = "로그인 중 오류가 발생했습니다. 콘솔을 확인해 주세요.";
    } finally {
      loginBtn.disabled = false;
      loginBtn.textContent = "Google로 로그인";
    }
  });

  // 로그아웃
  logoutBtn.addEventListener("click", async () => {
    try {
      await signOut(auth);
      resultDiv.textContent = "로그아웃되었습니다.";
      loginBtn.style.display = "inline-block";
      logoutBtn.style.display = "none";
    } catch (error) {
      console.error("로그아웃 에러:", error);
      resultDiv.textContent = "로그아웃 중 오류가 발생했습니다.";
    }
  });
}

