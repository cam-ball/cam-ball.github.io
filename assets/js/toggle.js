document.addEventListener('DOMContentLoaded', (event) => {
  const selector = document.querySelector('.toggler input[type="checkbox"]');
  const savedTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

  if (savedTheme) {
      document.documentElement.setAttribute('class', savedTheme);

      if (savedTheme === 'light') {
          selector.checked = true;
      }
  }

  function switchTheme(e) {
    let newTheme = 'dark';
    if (e.target.checked) {
      newTheme = 'light';
    }

    document.documentElement.setAttribute('class', newTheme);
    localStorage.setItem('theme', newTheme);
  }

  selector.addEventListener('change', switchTheme);
})
