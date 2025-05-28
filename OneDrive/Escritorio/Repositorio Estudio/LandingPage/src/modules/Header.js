$(document).ready(() => {
    // Cargar el header dinámicamente
    $("#header-container").load("header.html", () => {
        const toggleButton = $("#mode-toggle");
        const body = $("body");

        // Verificar si el usuario tiene modo oscuro activado
        if (localStorage.getItem("darkMode") === "enabled") {
            body.addClass("dark-mode");
            toggleButton.text("☀️");
        }

        // Manejar el cambio de modo oscuro/claro
        toggleButton.on("click", () => {
            body.toggleClass("dark-mode");

            if (body.hasClass("dark-mode")) {
                localStorage.setItem("darkMode", "enabled");
                toggleButton.text("☀️");
            } else {
                localStorage.setItem("darkMode", "disabled");
                toggleButton.text("🌙");
            }
        });
    });
});