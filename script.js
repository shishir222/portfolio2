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

const neonCursor = document.getElementById('neon-cursor');

document.addEventListener('mousemove', e => {
  neonCursor.style.left = e.clientX + 'px';
  neonCursor.style.top = e.clientY + 'px';
});
// Hide cursor when mouse leaves the window
document.addEventListener('mouseleave', () => {
  neonCursor.style.display = 'none';
});

// Show cursor when mouse enters the window
document.addEventListener('mouseenter', () => {
  neonCursor.style.display = 'block';
});

document.addEventListener("DOMContentLoaded", () => {
  const robot = document.getElementById("robot");

  // Show robot after a short delay
  setTimeout(() => {
    robot.classList.add("show");
  }, 500);

  // Hide after 5 seconds
  setTimeout(() => {
    robot.classList.replace("show", "hide");
  }, 5500);
});
document.addEventListener('click', (e) => {
    const target = e.target.closest('button, a');
    
    if (target) {
        const sound = new Audio('mixkit-sci-fi-click-900.wav');
        
        // Lower the volume (0.1 is very quiet, 0.5 is half volume)
        sound.volume = 0.15; 
        
        sound.currentTime = 0;
        sound.play();
    }
});
const mantraSound = new Audio('krishna.mp3'); // Ensure file is renamed to krishna.mp3
const mantraElement = document.getElementById('krishna-mantra');

let isMantraPlaying = false;

if (mantraElement) {
    mantraElement.addEventListener('mouseenter', () => {
        if (!isMantraPlaying) {
            isMantraPlaying = true;
            
            // --- NEW: Add the glowing class ---
            mantraElement.classList.add('playing-glow');
            
            mantraSound.currentTime = 0; 
            mantraSound.volume = 0.4;

            mantraSound.play().catch(error => {
                console.log("Interaction required: Click once to enable audio.");
                isMantraPlaying = false; 
                // Remove glow if it failed to play
                mantraElement.classList.remove('playing-glow');
            });

            // --- NEW: Remove the glowing class when music finishes ---
            mantraSound.onended = () => {
                isMantraPlaying = false;
                mantraElement.classList.remove('playing-glow');
            };
        }
    });
}
const buttons = document.querySelectorAll('.hud-cmd');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // 1. Remove 'active' class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // 2. Add 'active' class to the one we just clicked
    button.classList.add('active');
  });
});