document.addEventListener('DOMContentLoaded', (event) => {
  const selector = document.querySelector('.toggler input[type="checkbox"]');

  function switchTheme(e) {
      if (e.target.checked) {
          document.documentElement.setAttribute('class', 'light');
      }
      else {
          document.documentElement.setAttribute('class', 'dark');
      }
  }

  selector.addEventListener('change', switchTheme);
})
