function generateSpace() {
  const canvas = document.getElementById("space");
  const ctx = canvas.getContext("2d");

  // Set canvas size to match viewport
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Generate random stars
  const numStars = 200;
  for (let i = 0; i < numStars; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 2 + 1; // Vary star size
    ctx.beginPath();
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
  }
}
