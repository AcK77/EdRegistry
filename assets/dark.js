(function () {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (saved) {
    document.documentElement.dataset.theme = saved;
  } else if (prefersDark) {
    document.documentElement.dataset.theme = 'dark';
  }

  window.toggleTheme = function () {
    const current = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = current;
    localStorage.setItem('theme', current);
  };
})();
