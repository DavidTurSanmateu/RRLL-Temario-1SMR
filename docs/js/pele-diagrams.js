function renderPeleDiagrams() {
  if (!window.pele) return;

  document.querySelectorAll("pre.pele").forEach((element) => {
    if (element.dataset.peleRendered) return;

    const source = element.textContent;

    try {
      element.dataset.peleRendered = "true";
      window.pele.mount(element, source);
    } catch (error) {
      delete element.dataset.peleRendered;
      console.error("Error al renderizar el diagrama Pele:", error);
    }
  });
}

if (typeof document$ !== "undefined") {
  document$.subscribe(renderPeleDiagrams);
} else {
  document.addEventListener("DOMContentLoaded", renderPeleDiagrams);
}
