function toggleMenu() {
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("active");
}

// Close dropdown when clicking outside
window.addEventListener('click', function(e) {
    if (!e.target.matches('.menu-btn')) {
        const dropdown = document.getElementById('dropdown');
        if (dropdown && dropdown.classList.contains('active')) {
            dropdown.classList.remove('active');
        }
    }
});