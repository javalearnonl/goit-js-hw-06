
  const nextPageButton = document.querySelector('[data-action="next-page"]');
  const currentPagePath = window.location.pathname; 
  let nextPagePath;
  switch (currentPagePath) {
    case '/task-01.html':
      nextPagePath = 'https://maksmvc.github.io/goit-js-hw-06/task-02.html';
      break;
    case '/task-02.html':
      nextPagePath = 'https://maksmvc.github.io/goit-js-hw-06/task-03.html';
      break;
    case '/task-03.html':
      nextPagePath = 'https://maksmvc.github.io/goit-js-hw-06/task-04.html';
      break;
    case '/task-04.html':
      nextPagePath = 'https://maksmvc.github.io/goit-js-hw-06/task-05.html';
      break;
    case '/task-05.html':
      nextPagePath = 'https://maksmvc.github.io/goit-js-hw-06/task-06.html';
      break;
    case '/task-06.html':
      nextPagePath = 'https://maksmvc.github.io/goit-js-hw-06/task-07.html';
      break;
    case '/task-07.html':
      nextPagePath = 'https://maksmvc.github.io/goit-js-hw-06/task-08.html';
      break;
    case '/task-08.html':
      nextPagePath = 'https://maksmvc.github.io/goit-js-hw-06/task-09.html';
      break;
    case '/task-09.html':
      nextPagePath = 'https://maksmvc.github.io/goit-js-hw-06/task-10.html';
      break;
    default:
    
      nextPagePath = '/goit-js-hw-06/task-01.html';
      break;
  }

  nextPageButton.addEventListener('click', () => {

    window.location.href = nextPagePath;
  });

  
