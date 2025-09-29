import React , { useEffect ,useState } from "react";
import "./styles/style.css";
import AppRoutes from "./routes/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  const [isReady, setIsReady] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const MIN_DELAY_MS = 5000;   // 至少 5 秒
    const FADE_OUT_MS  = 1000;   // CSS 淡出秒數（需與 style.css 一致）
    const start = Date.now();

    const finish = () => {
      const elapsed = Date.now() - start;
      const wait = Math.max(0, MIN_DELAY_MS - elapsed);
      setTimeout(() => {
        setFadeOut(true);                        // 觸發淡出動畫
        setTimeout(() => setIsReady(true), FADE_OUT_MS); // 等淡出完移除
      }, wait);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
      return () => window.removeEventListener("load", finish);
    }
  }, []);

  return (
    <div className="app">
      {!isReady && <div className={`page-loader ${fadeOut ? "fade-out" : "fade-in"}`}><img src="./intro.png" alt="Loading..." /></div>}
      <Navbar />
      {/* Main content area */}
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
