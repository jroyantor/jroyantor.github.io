document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.querySelector('#checkbox');
    const body = document.body;

    // Set initial state
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        body.classList.add('dark-theme');
        if(toggleSwitch) toggleSwitch.checked = true;
    }

    if (toggleSwitch) {
        toggleSwitch.addEventListener('change', () => {
            if (toggleSwitch.checked) {
                body.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark');
            } else {
                body.classList.remove('dark-theme');
                localStorage.setItem('theme', 'light');
            }
        });
    }
});