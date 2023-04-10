const scrollBtn = document.querySelector('#scroll-btn');
scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: document.main.scrollHeight,
    behavior: 'smooth'
  });
});

