// Function to click the "Skip Intro" button and "Next Episode" button if they exist
function clickButtons() {
    // Netflix skip intro button
    let netflixSkipButton = document.querySelector('span.default-ltr-cache-bf8b0m');
    if (netflixSkipButton && netflixSkipButton.innerText === "Skip Intro") {
      netflixSkipButton.click();
    }
  
    // Netflix next episode button
    let netflixNextEpisodeButton = document.querySelector('button[data-uia="next-episode-seamless-button"]');
    if (netflixNextEpisodeButton) {
      netflixNextEpisodeButton.click();
    }
  
    // Prime Video skip intro button
    let primeSkipButton = document.querySelector('button.atvwebplayersdk-skipelement-button');
    if (primeSkipButton) {
      primeSkipButton.click();
    }
  
    // Prime Video next episode button
    let primeNextEpisodeButton = document.querySelector('button[data-uia="next-episode-seamless-button"]'); // Update this with the correct selector if necessary
    if (primeNextEpisodeButton) {
      primeNextEpisodeButton.click();
    }
  
    // Disney+ skip button example
    let disneySkipButton = document.querySelector('.skip__button');
    if (disneySkipButton) {
      disneySkipButton.click();
    }
  
    // Disney+ next episode button example
    let disneyNextEpisodeButton = document.querySelector('.next__episode__button'); // Update with actual class or ID
    if (disneyNextEpisodeButton) {
      disneyNextEpisodeButton.click();
    }
  }
  
// Run the function every second
setInterval(clickButtons, 1000);
  