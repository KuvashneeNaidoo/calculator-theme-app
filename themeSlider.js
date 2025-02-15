// Get the theme slider element to switch themes
const themeSlider = document.getElementById("themeSlider");

// The following objects define different themes with key-value pairs.
// The keys represent custom CSS variables, and the values specify the corresponding color for each element in the theme.

// Theme 1 (Dark Blue)
const theme1 = {
  "--bg-color": "hsl(222, 26%, 31%)",
  "--key-bg-color": "hsl(30, 25%, 89%)",
  "--key-shadow": "hsl(28, 16%, 65%)",
  "--key-text": "hsl(221, 14%, 31%)",
  "--toggle-bg": "hsl(223, 31%, 20%)",
  "--screen-bg": "hsl(224, 36%, 15%)",
  "--display-text": "hsl(0, 0%, 100%)",
  "--calc-title-color": "hsl(30, 25%, 89%)",
  "--toggle-text-color": "hsl(30, 25%, 89%)",
  "--theme-number-color": "hsl(30, 25%, 89%)",

  // Button colors
  "--reset-btn-bg": "hsl(225, 21%, 49%)",
  "--reset-btn-shadow": "hsl(224, 28%, 35%)",

  "--delete-btn-bg": "hsl(360, 83%, 53%)",
  "--delete-btn-shadow": "hsl(360, 70%, 40%)",

  "--equals-btn-bg": "hsl(6, 63%, 50%)",
  "--equals-btn-shadow": "hsl(6, 70%, 35%)",

  // Slider thumb
  "--slider-thumb-color": "hsl(360, 83%, 53%)",
};

// Theme 2 (Light Tone)
const theme2 = {
  "--bg-color": "hsl(0, 0%, 90%)",
  "--key-bg-color": "hsl(45, 7%, 89%)",
  "--key-shadow": "hsl(35, 11%, 61%)",
  "--key-text": "hsl(60, 10%, 19%)",
  "--toggle-bg": "hsl(0, 5%, 81%)",
  "--screen-bg": "hsl(0, 0%, 93%)",
  "--display-text": "hsl(60, 10%, 19%)",
  "--calc-title-color": "hsl(60, 10%, 19%)",
  "--toggle-text-color": "hsl(60, 10%, 19%)",
  "--theme-number-color": "hsl(60, 10%, 19%)",

  // Button colors
  "--reset-btn-bg": "hsl(185, 42%, 37%)",
  "--reset-btn-shadow": "hsl(185, 58%, 25%)",

  "--delete-btn-bg": "hsl(185, 42%, 37%)",
  "--delete-btn-shadow": "hsl(185, 58%, 25%)",

  "--equals-btn-bg": "hsl(25, 98%, 40%)",
  "--equals-btn-shadow": "hsl(25, 99%, 27%)",

  // Slider thumb color
  "--slider-thumb-color": "hsl(185, 42%, 37%)",
};

// Theme 3 (Violet and Cyan)
const theme3 = {
  "--bg-color": "hsl(268, 75%, 9%)",
  "--key-bg-color": "hsl(268, 47%, 21%)",
  "--key-shadow": "hsl(290, 70%, 36%)",
  "--key-text": "hsl(52, 100%, 62%)",
  "--toggle-bg": "hsl(268, 71%, 12%)",
  "--screen-bg": "hsl(268, 71%, 12%)",
  "--display-text": "hsl(52, 100%, 62%)",
  "--calc-title-color": "hsl(52, 100%, 62%)",
  "--toggle-text-color": "hsl(52, 100%, 62%)",
  "--theme-number-color": "hsl(52, 100%, 62%)",

  // Button colors
  "--reset-btn-bg": "hsl(281, 89%, 26%)",
  "--reset-btn-shadow": "hsl(285, 91%, 52%)",

  "--delete-btn-bg": "hsl(281, 89%, 26%)",
  "--delete-btn-shadow": "hsl(285, 91%, 52%)",

  "--equals-btn-bg": "hsl(176, 100%, 44%)",
  "--equals-btn-shadow": "hsl(177, 92%, 70%)",

  // Slider thumb color
  "--slider-thumb-color": "hsl(281, 89%, 26%)",
};

// Apply Theme 1 when the page loads
applyTheme(theme1);

// Set the slider thumb to Theme 1
document.getElementById("themeSlider").value = 1;

// Apply the selected theme
function applyTheme(theme) {
  // Iterate over each key in the theme object
  Object.keys(theme).forEach((key) => {
    // For each key, set the corresponding CSS variable on the element
    document.documentElement.style.setProperty(key, theme[key]);
  });
}

// Add event listener for the theme slider
themeSlider.addEventListener("input", function () {
  const themeValue = parseInt(themeSlider.value);
  if (themeValue === 1) {
    applyTheme(theme1);
  } else if (themeValue === 2) {
    applyTheme(theme2);
  } else if (themeValue === 3) {
    applyTheme(theme3);
  }
});
