const currentPagePath = window.location.pathname;
let currentPageNumber = parseInt(currentPagePath.match(/\d+/)[0]);
let nextPageNumber = currentPageNumber + 1;
let nextPagePath = `goit-js-hw-06/task-${nextPageNumber}.html`;

nextPageButton.addEventListener('click', () => {
  window.location.href = nextPagePath;
});