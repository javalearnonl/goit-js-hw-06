const nextPageButton = document.querySelector('[data-action="next-page"]');
const currentPagePath = window.location.pathname;
const currentPageNumber = parseInt(currentPagePath.match(/\d+/)[0]);
const nextPageNumber = currentPageNumber + 1;
const nextPagePath = currentPagePath.replace(currentPageNumber, nextPageNumber);

nextPageButton.addEventListener('click', () => {
  window.location.href = nextPagePath;
});