function showHTML() {
  document.body.className = "";
  document.getElementById("title").className = "";
  document.getElementById("paragraph").className = "";
  document.getElementById("paragraph").textContent = "This is just plain HTML text.";
  document.getElementById("particles-js").style.background = "white";
  document.getElementById("title").style.color = "black";
  document.getElementById("paragraph").style.color = "black";

  // Reset background
  document.getElementById("particles-js").innerHTML = "";
}

function showCSS() {
  document.body.className = "styled";
  document.getElementById("title").className = "";
  document.getElementById("paragraph").className = "";
  document.getElementById("particles-js").innerHTML = "";
  document.getElementById("particles-js").style.background = "radial-gradient(circle 700px at 0% 30%, rgba(120, 22, 211, 0.5), transparent), linear-gradient(135deg, rgba(23, 170, 97, 1), rgba(115, 12, 129, 1))";
  document.getElementById("title").style.color = "white";
  document.getElementById("paragraph").style.color = "white";
  let para = document.getElementById("paragraph");
  para.textContent = "CSS makes everything pretty!";
}

function showJS() {
  document.body.className = "styled animate";
  document.getElementById("title").style.color = "white";
  document.getElementById("particles-js").style.background = "radial-gradient(circle 700px at 0% 30%, rgba(120, 22, 211, 0.5), transparent), linear-gradient(135deg, rgba(23, 170, 97, 1), rgba(115, 12, 129, 1))";
  let para = document.getElementById("paragraph");
  para.textContent = "🎉 But JavaScript makes things interactive!";

  // Start particles.js background
  particlesJS("particles-js", {
    particles: {
      number: { value: 80 },
      size: { value: 3 },
      move: { speed: 3 },
      line_linked: { enable: true },
      color: { value: "#00ffff" },
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: { distance: 100 },
        push: { particles_nb: 4 },
      },
    },
  });
}
