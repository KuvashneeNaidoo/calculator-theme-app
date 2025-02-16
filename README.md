# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Perform mathematical operations including addition, subtraction, multiplication, and division.
- Switch between three different color themes for a personalised experience.
- View a responsive layout that adapts to various screen sizes.

### Screenshot

![calculator-theme-app](https://github.com/user-attachments/assets/5e901766-18a8-471f-b72d-d796be5006a2)

### Links

- [Solution URL](https://github.com/KuvashneeNaidoo/calculator-theme-app)
- [Live Site URL](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Media queries
- JavaScript

### What I learned

In this project, I gained a deeper understanding of how to work with object key-value pairs in JavaScript, particularly in the context of managing themes with custom CSS properties. This method allowed me to dynamically switch between different visual themes on a webpage.

```css
.reset-btn {
  background-color: var(--reset-btn-bg);
  box-shadow: 0px 5px var(--reset-btn-shadow);
}
```

```js
const theme1 = {
  "--reset-btn-bg": "hsl(225, 21%, 49%)",
  "--reset-btn-shadow": "hsl(224, 28%, 35%)",
};

function applyTheme(theme) {
  Object.keys(theme).forEach((key) => {
    document.documentElement.style.setProperty(key, theme[key]);
  });
}
```

### Continued development

I am yet to implement the bonus challenge where the theme preference is checked using `prefers-color-scheme` and any additional theme changes are saved in the browser (so they persist between sessions). I will make use of localStorage to store and retrieve the user’s theme choice.

### Useful resources

- [MDN Webkit Slider Thumb](https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-slider-thumb) - I used this CSS pseudo-element to style the slider thumb that users interact with to adjust the value of a <input> element with type="range."

## Author

- [Website](https://kuvashnee-naidoo-portfolio.netlify.app/)
- [Frontend Mentor](https://www.frontendmentor.io/profile/KuvashneeNaidoo)
- [Twitter](https://x.com/kuvashnee)
