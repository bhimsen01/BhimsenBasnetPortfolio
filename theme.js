const themeToggle = document.querySelector('.mode-toggle');
const themeIcon = themeToggle.querySelector('img');

// Get saved theme (default to dark)
const savedTheme = localStorage.getItem('theme') || 'dark';

// Apply theme on load
if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark-mode');
    themeIcon.src = 'Icons/lightmode.png';
} else {
    document.documentElement.classList.remove('dark-mode');
    themeIcon.src = 'Icons/darkmode.png';
}

// Toggle theme on click
themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark-mode');

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeIcon.src = isDark
        ? 'Icons/lightmode.png'
        : 'Icons/darkmode.png';
});
