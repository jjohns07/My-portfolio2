document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("dark-mode-toggle");

    if (toggleButton) { // ✅ Check if button exists before adding event listener
        toggleButton.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
        });
    }
});
