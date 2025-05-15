if (JSON.stringify(inputSequence) === JSON.stringify(secretSequence)) {
  // Show button
  button.style.display = "inline-block";

  // Play DOOM music
  music.play().catch((e) => {
    console.log("User interaction required to play music:", e);
  });

  // Change background to DOOM 1993 cover art
  document.body.style.backgroundImage = "url('https://cdn.alza.cz/Foto/or/articles/29258/img/doom-anniversary-retro-recenze.jpg')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.height = "100vh"; // Ensures it fills the screen



  if (!doomActivated) {  // Prevent multiple activations
  doomActivated = true;
  document.body.classList.add("doom-mode");
}

}


secretButton.addEventListener("click", () => {
  window.location.href = "https://thedoggybrad.github.io/doom_on_js-dos/";
});



// Save scroll position before the page unloads:
window.addEventListener('beforeunload', function() {
  localStorage.setItem('scrollPos', window.scrollY);
});

// On page load, restore scroll position:
window.addEventListener('load', function() {
  const scrollY = localStorage.getItem('scrollPos');
  if (scrollY !== null) {
    window.scrollTo(0, parseInt(scrollY, 10));
  }
});
