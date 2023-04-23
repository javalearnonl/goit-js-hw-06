
  const nextPageButton = document.querySelector('[data-action="next-page"]');
  const currentPagePath = window.location.pathname; 
  let nextPagePath;
  switch (currentPagePath) {
    case './task-01.html':
      nextPagePath = 'task-02.html';
      break;
    case './task-02.html':
      nextPagePath = 'task-03.html';
      break;
    case './task-03.html':
      nextPagePath = 'task-04.html';
      break;
    case './task-04.html':
      nextPagePath = 'task-05.html';
      break;
    case './task-05.html':
      nextPagePath = 'task-06.html';
      break;
    case './task-06.html':
      nextPagePath = 'task-07.html';
      break;
    case './task-07.html':
      nextPagePath = 'task-08.html';
      break;
    case './task-08.html':
      nextPagePath = 'task-09.html';
      break;
    case './task-09.html':
      nextPagePath = 'task-10.html';
      break;
    default:
    
      nextPagePath = 'task-01.html';
      break;
  }

  nextPageButton.addEventListener('click', () => {

    window.location.href = nextPagePath;
  });

  
