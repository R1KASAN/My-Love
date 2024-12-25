import { useState } from "react";
import "./App.css";

const phrases = [
  "ไม่รัก",
  "ไม่รัก🥺? งั้นเค้าให้นี่กับเธอนะ🌟",
  "เเน่ใจนะว่าไม่รักเค้าน่ะ🥹?",
  "น้าน้าเธอ เค้ารักเธอมากเลยน้า เธอรักเค้าไหม🥹🥹",
  "ยังไงเธอก็น่ารักเสมอน้าาา รักเค้าเถอะน้า 😊",
  "ผมรักเกรซมากๆเลยนะครับ เธอน่ารักที่สุดเลยน้าาา รักเค้ารึยัง 🤩😘🥺🩷🩵",
  "ไม่รักเค้าจริงหรอ งื้อ 😭",
];

const images = [
  "https://media1.tenor.com/m/OM6iAc6qf6YAAAAC/project-sekai-project-sekai-picmix.gif",
  "https://media1.tenor.com/m/uuJr6gz1IRoAAAAC/tsukasa-tenma-tsukasa-tenma-chibi.gif",
  "https://media1.tenor.com/m/X532Aylpf8AAAAAC/pjsk-pjsk-anime.gif",
  "https://media1.tenor.com/m/pu-LKKYGD8IAAAAd/project-sekai-shiho.gif",
  "https://media.tenor.com/P6JvCvo6_IsAAAAi/an-project-sekai.gif",
  "https://media1.tenor.com/m/r5o61e7yjRwAAAAd/xavier-caviar.gif",
  "https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/456270510_2975697819237442_8474386001676557720_n.jpg?stp=dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGp3leVITAw9b6ZhdhP44SZFTAGTU2HvIoVMAZNTYe8itFajOQDQuES8B_ubS2SFXQpzkD-l9aKIytJND6ZtQLA&_nc_ohc=SLc6nuxXh08Q7kNvgGVi1im&_nc_zt=23&_nc_ht=scontent.fbkk29-1.fna&oh=00_AYCyvQn5vKzfY5RxegoD3rIji8cg8VL2nSD6mEK--tFO0Q&oe=66D27C28",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  function getNoButtonImage() {
    return images[Math.min(noCount, images.length - 1)];
  }

  return (
    <div className="val-container">
      {yesPressed ? (
        <>
          <img
            src="https://media.tenor.com/GjZ0BgmKRMkAAAAi/tkthao219-capoo.gif"
            alt="yes-pic"
          />
          <div className="val-text">
            เย้เย้! เค้าก็รักเธอมากๆเลยนะ
            <br />
            (____////🩷❤️🩵\\\\____)
            <br />
            สุขสันต์วันเกิดนะครับที่รัก 🎂 (⁠ ⁠╹⁠▽⁠╹⁠ ⁠) 💞
            <br />
            ขอให้เธอน่ารักและสดใสแบบนี้ไปนานๆนะครับ (⁠ ⁠˘⁠ ⁠³⁠˘⁠)⁠♥
            <br />
            เค้าจะอยู่ข้างเธอเสมอ 🌟
            <br />
            เเละ เราจะจับมือและก้าวเดินไปข้างหน้าด้วยกันนะครับ (⁠♡⁠ω⁠♡⁠ ⁠)⁠ ⁠~⁠♪
            <br />
            เค้ารักเธอในทุกๆอย่างที่เธอเป็นมากๆเลยนะ✨(⁠灬⁠º⁠‿⁠º⁠灬⁠)⁠
            <br />
            ข่าวดีผมกลับบ้านนะครับ😊
          </div>
        </>
      ) : (
        <>
          <img src={getNoButtonImage()} alt="no-pic" />
          <div className="val-text">เธอรักเค้าไหม?</div>
          <div>
            <button
              className="button yes-button"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              รัก
            </button>
            <button
              onClick={() => setNoCount(noCount + 1)}
              className="button no-button"
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
