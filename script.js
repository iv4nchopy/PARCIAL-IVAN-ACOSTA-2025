document.addEventListener("DOMContentLoaded", () => {
  // Botón cambiante: agrega clase 'clicked' 1.2s
  const bc = document.getElementById("botonCambiante");
  if (bc) {
    bc.addEventListener("click", (e) => {
      e.preventDefault();
      bc.classList.add("clicked");
      setTimeout(() => bc.classList.remove("clicked"), 1200);
      // si el usuario quiere que descargue al click, podemos forzar:
      // window.location.href = 'cv/CV_Lewandowski.pdf';
    });
  }

  // Reveal on scroll para posts (IntersectionObserver)
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("revealed");
    });
  }, {threshold: 0.15});

  document.querySelectorAll(".to-reveal").forEach(el => io.observe(el));

  // Aseguramos que todos los botones "Descargar CV" tengan href correcto y download
  document.querySelectorAll('a').forEach(a => {
    if (a.textContent && a.textContent.toLowerCase().includes("cv") || a.href.endsWith("CV_Lewandowski.pdf")) {
      // fuerza atributo download y ruta relativa correcta
      a.setAttribute("href", "cv/CV_Lewandowski.pdf");
      a.setAttribute("download", "CV_Lewandowski.pdf");
      a.setAttribute("target", "_blank");
      a.classList.add("btn-download");
    }
  });
});
