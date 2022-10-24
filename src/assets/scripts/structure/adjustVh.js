// ウィンドウの高さをCSS変数化
!(function () {
  let vw = window.innerWidth;

  const adjustVh = () => {
    const vh = document.documentElement.clientHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  window.addEventListener('resize', () => {
    if (vw === window.innerWidth) {
      // 画面の横幅にサイズ変動がないので処理を終える
      return;
    }
    // 画面の横幅のサイズ変動があった時のみ高さを再計算する
    vw = window.innerWidth;
    adjustVh();
  });

  // 初期化
  adjustVh();
})();

// Usage Examples
// -----------------
// // CSS
// .eml {
//   min-height: 100vh;
//   min-height: calc(var(--vh, 1vh) * 100);
// }
