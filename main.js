document.addEventListener("DOMContentLoaded", function () {
  const scroller = new Scroller("#root");

  document.addEventListener("wheel", (event) => scroller.listenScroll(event));

  document.activeElement("swipeUp", () => scroller.scroll(1));
  document.activeElement("swipeDown", () => scroller.scroll(-1));
});
