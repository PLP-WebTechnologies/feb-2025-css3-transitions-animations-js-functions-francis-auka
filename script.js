// Apply stored theme on page load
window.onload = function () {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(savedTheme);
    document.getElementById('theme').value = savedTheme;
  };
  
  // Change theme and store preference
  document.getElementById('theme').addEventListener('change', function () {
    const theme = this.value;
    document.body.className = ''; // Remove existing theme
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme); // Save preference
  });
  
  // Trigger animation on click
  document.getElementById('animateBtn').addEventListener('click', function () {
    const box = document.getElementById('animatedBox');
    box.classList.toggle('animate');
  
    // Optional: Reset animation after it ends
    setTimeout(() => box.classList.remove('animate'), 1000);
  });
  