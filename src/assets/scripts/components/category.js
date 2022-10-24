export default class category {
  constructor() {
    this.init();
  }
  init() {
    const item = document.querySelectorAll('.c-category__listItem');

    for (let i = 0; i < item.length; i++) {
      item[i].addEventListener("click", tabToggle);
    }

    function tabToggle() {
      for (let i = 0; i < item.length; i++) {
        item[i].classList.remove("is-active");
      }
      this.classList.add("is-active");
    }
  }
}