# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Links

- Solution URL: [My Solution](https://github.com/Graciano1997/rest-countries-api-with-color-theme-switcher-master.git)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Redux.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

- Alot of Patient
- Persistance
- Master API

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
:root {
  --darkModeElements: hsl(209, 23%, 22%);
  --darkModeBackground: hsl(207, 26%, 17%);
  --darkModeColor: hsl(0, 0%, 100%);

  /* light mode */
  --lightModeElements: hsl(0, 0%, 100%);
  --lightModeBackground: hsl(0, 0%, 98%);
  --lightModeColor: hsl(200, 15%, 8%);
  --lightModeInput: hsl(0, 0%, 52%);

  /* font_size */
  --homePageSize: 14px;
  --detailPageSize: 16px;
}

```
```js
export const getCountries = createAsyncThunk('countries/getCountries', async () => {
  try {
    const result = await axios.get(countryUrl);
    return result.data;
  } catch (error) {
    return error.message;
  }
});
```

### Continued development

- I will add each country's map


## Author

- Website - [Graciano Henrique](https://graciano1997.github.io/portofolio-graciano/)
- Frontend Mentor - [@GracianoHenrique](https://www.frontendmentor.io/profile/Graciano1997)
- Twitter - [@GracianoHenrique](https://www.twitter.com/GracianoSoft)


## 🙏 Acknowledgments <a name="acknowledgements"></a>

> I would like to thank My Microverse School.