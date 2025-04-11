// Function to click the "Skip Intro" button and "Next Episode" button if they exist
function clickButtons() {
    // Netflix skip intro button
    let netflixSkipButton = document.querySelector('button[data-uia="player-skip-intro"]');
    if (netflixSkipButton) {
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
    // Note: This selector might need verification based on the actual Prime Video UI.
    let primeNextEpisodeButton = document.querySelector('button.atvwebplayersdk-nextupcard-button');
    if (primeNextEpisodeButton) {
      primeNextEpisodeButton.click();
    }
  
    // Hotstar skip intro button
    // Note: This selector might need verification based on the actual Hotstar UI.
    let hotstarSkipButton = document.querySelector('button[data-testid="skip-intro-button"]');
    if (hotstarSkipButton) {
      hotstarSkipButton.click();
    }

    // Hotstar next episode button
    // Note: This selector might need verification based on the actual Hotstar UI.
    let hotstarNextEpisodeButton = document.querySelector('button[data-testid="next-episode-button"]');
    if (hotstarNextEpisodeButton) {
      hotstarNextEpisodeButton.click();
    }
  }
  
// Run the function every second
setInterval(clickButtons, 1000);
  