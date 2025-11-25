document.querySelectorAll('.ecosystem-svg circle').forEach((circle, index) => {
    setTimeout(() => {
      circle.style.stroke = `hsl(${(index + 1) * 45}, 100%, 50%)`;
    }, index * 500);
  });
  