export const showContentTab = (contentId: string, typeTab: string): void => {
  const tabContents = document.getElementsByClassName("tab--content");
  for (const item of tabContents as any) {
    if (typeTab == item.dataset.tabContentType) item.style.display = "none";

    if (contentId == item.getAttribute("id")) {
      item.style.display = "block";
    }
  }
};

export const changeTab = (idElement: string): void => {
  const allTab = document.querySelectorAll(
    `[data-tab-to]`
  ) as NodeListOf<HTMLElement>;
  allTab.forEach((item) => {
    item.classList.remove("active");
    if (item.dataset.tabTo == idElement && item.dataset.tabType) {
      showContentTab(item.dataset.tabTo, item.dataset.tabType);
      item.classList.add("active");
    }
  });
};
