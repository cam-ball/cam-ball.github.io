document.addEventListener('DOMContentLoaded', (event) => {
  const selector = document.querySelector('.toggler input[type="checkbox"]');
  let savedTheme;
  if (localStorage.getItem('theme')) {
    savedTheme = localStorage.getItem('theme');
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    savedTheme = 'light'
  } else {
    savedtheme = 'dark'
  }

  if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);

      if (savedTheme === 'light') {
          selector.checked = true;
      }
  }

  function switchTheme(e) {
    let newTheme = 'dark';
    if (e.target.checked) {
      newTheme = 'light';
    }

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }

  selector.addEventListener('change', switchTheme);
})
