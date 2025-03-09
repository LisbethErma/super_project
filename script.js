const projectItems = document.querySelectorAll('.project-item');

projectItems.forEach(item => {
  item.addEventListener('click', () => {
    projectItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });
    item.classList.toggle('active');
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.project-item')) {
    projectItems.forEach(item => {
      item.classList.remove('active');
    });
  }
});