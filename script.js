document.addEventListener('DOMContentLoaded', () => {
  const virus = document.getElementById("virus");
  if (!virus) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let virusX = mouseX;
  let virusY = mouseY;

  const speed = 0.02;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Create trail container
  const trailContainer = document.createElement("div");
  trailContainer.style.position = "fixed";
  trailContainer.style.top = "0";
  trailContainer.style.left = "0";
  trailContainer.style.width = "100%";
  trailContainer.style.height = "100%";
  trailContainer.style.pointerEvents = "none";
  document.body.appendChild(trailContainer);

  // Animation loop
  function animate() {
    // Move virus toward cursor
    virusX += (mouseX - virusX) * speed;
    virusY += (mouseY - virusY) * speed;

    virus.style.left = virusX + "px";
    virus.style.top = virusY + "px";

    // Create trail clone
    const trail = virus.cloneNode(true);
    trail.style.opacity = "0.6";
    trail.style.transition = "opacity 0.6s linear";
    trailContainer.appendChild(trail);

    // Position the trail
    trail.style.left = virusX + "px";
    trail.style.top = virusY + "px";

    // Fade out and remove
    setTimeout(() => {
      trail.style.opacity = "0";
      setTimeout(() => trail.remove(), 600);
    }, 10);

    requestAnimationFrame(animate);
  }

  animate();
});
document.addEventListener('DOMContentLoaded', () => {
  const virusSound = document.getElementById("virusSound");
  virusSound.volume = 0.1; // low volume

  const soundButton = document.getElementById("soundButton");
  let soundEnabled = false; // track sound state

  // Toggle sound on button click
  soundButton.addEventListener("click", async () => {
    try {
      if (!soundEnabled) {
        await virusSound.play();
        soundEnabled = true;
        soundButton.textContent = "🔇"; // change icon to muted
      } else {
        virusSound.pause();
        soundEnabled = false;
        soundButton.textContent = "🔊"; // change icon back
      }
    } catch (err) {
      console.log("User interaction required to play sound");
    }
  });

  // --- Virus cursor ---
  const virus = document.getElementById("virus");
  if (!virus) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let virusX = mouseX;
  let virusY = mouseY;
  const speed = 0.02;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Only play sound if enabled
    if (soundEnabled) {
      virusSound.play().catch(() => {});
    }
  });

  function animate() {
    virusX += (mouseX - virusX) * speed;
    virusY += (mouseY - virusY) * speed;

    virus.style.left = virusX + "px";
    virus.style.top = virusY + "px";

    requestAnimationFrame(animate);
  }

  animate();
});

