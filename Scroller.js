class Scroller {
  constructor(rootSelector) {
    const rootElement = document.querySelector(rootSelector);
    console.log(rootSelector);
    this.sections = document.querySelectorAll("section");
    const sectionsArr = [...this.sections];
    this.currentSectionIndex = sectionsArr.findIndex((element) => {
      return this.isScrollIntoView(element);
    });
    this.isThrottled = false;

    this.isScrollIntoView(this.sections[0]);
  }

  isScrollIntoView(el) {
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = Math.floor(rect.bottom);

    const isVissible = elemTop >= 0 && elemBottom <= window.innerHeight;

    return isVissible;
  }

  listenScroll = (event) => {
    if (this.isThrottled) return;
    this.isThrottled = true;

    setTimeout(() => {
      this.isThrottled = false;
    }, 1000);

    const direction = event.wheelDelta < 0 ? 1 : -1;

    this.scroll(direction);
  };

  scroll = (direction) => {
    console.log(direction);
    if (direction === 1) {
      const isLastSection =
        this.currentSectionIndex === this.sections.length - 1;
      if (isLastSection) return;
    } else if (direction === -1) {
      const firstSection = this.currentSectionIndex === 0;
      if (firstSection) return;
    }

    this.currentSectionIndex = this.currentSectionIndex + direction;
    // scrollToCurrentSection();
  };

  scrollToCurrentSection = () => {
    this.sections[this.currentSectionIndex].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
}
