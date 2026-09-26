function initTocToggle() {
    const search = document.querySelector(".md-search");

    if (!search) {
        return;
    }

    let button = document.querySelector(".toc-toggle-button");

    // Crear el botón si todavía no existe
    if (!button) {
        button = document.createElement("button");

        button.className = "toc-toggle-button";
        button.type = "button";

        button.setAttribute(
            "aria-label",
            "Mostrar u ocultar índice"
        );

        button.setAttribute(
            "title",
            "Mostrar u ocultar índice"
        );

        button.setAttribute(
            "aria-expanded",
            "true"
        );

        button.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;

        // Colocar el botón justo después del buscador
        search.parentNode.insertBefore(
            button,
            search.nextSibling
        );
    }


    // Eliminar cualquier listener anterior
    // y asignar uno nuevo.
    button.onclick = function () {

        // IMPORTANTE:
        // Buscar el TOC cada vez que se pulsa.
        // navigation.instant puede haber sustituido
        // el elemento anterior.
        const toc = document.querySelector(
            ".md-sidebar--secondary"
        );

        if (!toc) {
            return;
        }

        const hidden = toc.classList.toggle("toc-hidden");

        button.setAttribute(
            "aria-expanded",
            String(!hidden)
        );
    };
}


// Primera carga
document.addEventListener(
    "DOMContentLoaded",
    initTocToggle
);


// Navegación instantánea de Material
if (typeof document$ !== "undefined") {

    document$.subscribe(function () {
        initTocToggle();
    });
}
