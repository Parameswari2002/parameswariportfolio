// Simple alert for navigation links
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
        alert(`Navigating to ${link.textContent}`);
    });
});
