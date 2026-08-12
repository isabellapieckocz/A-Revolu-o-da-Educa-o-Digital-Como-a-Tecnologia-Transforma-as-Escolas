document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const bodyElement = document.body;

    themeToggleButton.addEventListener('click', () => {
        bodyElement.classList.toggle('dark-mode');
        
        if (bodyElement.classList.contains('dark-mode')) {
            themeToggleButton.textContent = 'Alternar Modo Claro';
        } else {
            themeToggleButton.textContent = 'Alternar Modo Escuro';
        }
    });
});
