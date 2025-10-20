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
  document.getElementById("title").style.cursor = "default";
  document.getElementById("paragraph").style.color = "white";
  let para = document.getElementById("paragraph");
  para.textContent = "CSS makes everything pretty!";
}

function showJS() {
  document.body.className = "styled animate";
  let para = document.getElementById("paragraph");
  let title = document.getElementById("title");
  title.style.color = "white";
  title.style.cursor = "pointer";
  para.textContent = "🎉 But JavaScript makes things interactive!";
  document.getElementById("particles-js").style.background = "radial-gradient(circle 700px at 0% 30%, rgba(120, 22, 211, 0.5), transparent), linear-gradient(135deg, rgba(23, 170, 97, 1), rgba(115, 12, 129, 1))";

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


function spin() {
  if (document.body.className === "styled animate") {
    document.getElementById("title").style.transform = "rotateY(360deg)"
    document.getElementById("title").style.transition = "transform 1s ease-in-out"
    setTimeout(() => {
      document.getElementById("title").textContent = "Click for a fact";
      
    }, 300);
  }
}

function spinBack() {
  if (document.body.className === "styled animate") {
    document.getElementById("title").style.transform = "rotateY(0deg)"
    document.getElementById("title").style.transition = "transform 1s ease-in-out"
    setTimeout(() => {
      document.getElementById("title").textContent = "Welcome!";
    }, 300);
  }
}

function message() {
  if (document.body.className === "styled animate") {
      const interestingFacts = [
      "Octopuses have three hearts and blue blood.",
      "Bananas are berries, but strawberries aren’t.",
      "Honey never spoils — archaeologists have found edible honey in ancient Egyptian tombs.",
      "A group of flamingos is called a flamboyance.",
      "The Eiffel Tower can grow more than 15 cm taller in summer due to heat expansion.",
      "Sharks existed before trees.",
      "There’s enough DNA in the human body to stretch from the Sun to Pluto and back — 17 times.",
      "Sloths can hold their breath longer than dolphins can.",
      "Some cats are allergic to humans.",
      "Wombat poop is cube-shaped to keep it from rolling away."
    ];

    const fact = Math.floor(Math.random() * interestingFacts.length);
    alert(interestingFacts[fact]);
  }
}

